import { useCallback, useEffect, useState } from "react";

function HookUseCallback() {
  /* useState : 상태관리훅
     useEffect : 특정 렌더링시 블록문 실행하는 훅
     useRef : 객체생성(값을 유지 or 요소에 접근해서 조작)
     useCallback(함수) : 인자로 전달한 콜백함수 자체를 메모리제이션하는 것 -->> useMemo()
     - 함수가 필요할 때마다 다시 만드는 것이 아니라 메모리에 올려두고 가져와서 사용

     const 변수명 = 함수 : 변수명에 함수객체 할당
     렌더링 발생 >> 컴포넌트 함수 호출 >> 모든 내부 변수 초기화
     문제점. 렌더링때마다 새로 만들어진 함수 객체를 할당 받음

     이미 할당 받은 함수 객체를 재사용할 수 있도록 하기위함 -> useCallback()
  */

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  //기본함수 - 렌더링 때마다 함수 생성(주소지가 새로 생성)
  const basicFn = () => {
    console.log("basicFn");
  };
  //useCallback함수 - [] : 처음 한번만 객체 생성
  const callFn = useCallback(() => {
    console.log("callFn");
  }, []);

  const callNum2Fn = useCallback(() => {
    console.log("callNum2Fn");
  }, [num2]);

  /* 함수객체변경 = 주소값변경 -> useEffect의 []가 감지 */
  useEffect(() => {
    console.log("basicFn 주소지 변경");
  }, [basicFn]);

  useEffect(() => {
    console.log("callFn 주소지 변경");
  }, [callFn]);

  useEffect(() => {
    console.log("call2Fn 주소지 변경");
  }, [callNum2Fn]);

  //입력요소들은 함수연결 시 useCallback 훅 활용 많이 함
  const [name, setName] = useState("");
  //   const nameOnChangeHandler = (e) => {
  //     setName(e.target.value);
  //   };
  const nameOnChangeHandler = useCallback((e) => {
    setName(e.target.value);
  }, []);
  useEffect(() => {
    console.log("nameOnChangeHandler 주소지 변경됨");
  }, [nameOnChangeHandler]);

  const [pw, setPw] = useState("");
  const pwOnChangeHandler = useCallback((e) => {
    setPw(e.target.value);
  }, []);

  const goSave = useCallback(() => {
    console.log("입력된 이름: ", name);
    console.log("입력된 pw: ", pw);
  }, [name, pw]);
  return (
    <div>
      <p>num1: {num1}</p>
      <button onClick={() => setNum1(num1 + 1)}>숫자상승</button>
      <br />
      <p>num2: {num2}</p>
      <button onClick={() => setNum2(num2 + 1)}>숫자상승</button>

      <label>
        이름
        <input
          type="text"
          className="border"
          onChange={nameOnChangeHandler}
        ></input>
      </label>
      <br />
      <label>
        비밀번호
        <input
          type="password"
          className="border"
          onChange={pwOnChangeHandler}
        ></input>
      </label>
      <button onClick={goSave}>저장</button>
    </div>
  );
}
export default HookUseCallback;
