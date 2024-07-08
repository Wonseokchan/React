import { useState, useRef, useEffect } from "react";

function HookUseRef() {
  /* useRef
        1) ref 객체를 통해 dom 요소 직접 조작 가능
        2) ref 렌더링에 관여하지 않음(상태값에 영향 안줌)
        - 렌더링이 되더라도 값 유지할 수 있음(값의 영속성)

        useRef(초깃값) --> {current: 초깃값} 객체 생성
    */
  console.log("==========> rendering <==========");
  let countVar = 0;
  const [countState, setCountState] = useState(0);
  const countRef = useRef(0);
  console.log(countRef.current);

  const countVarUp = () => {
    countVar++;
    console.log(countVar);
  };

  const countStateUp = () => {
    setCountState(countState + 1);
  };

  const countRefUp = () => {
    countRef.current++;
    console.log(countRef.current);
  };
  const checkId = "user123";
  const [userId, setUserId] = useState("");
  const searchref = useRef();
  const inputRef = useRef();
  useEffect(() => {
    console.log(searchref);
  }, [searchref]);
  const idOnChangeHandler = (e) => {
    setUserId(e.target.value);
  };
  console.log(inputRef);
  const goLogin = () => {
    if (checkId == userId) {
      alert("로그인완료");
    } else {
      searchref.current.style.backgroundColor = "yellow";
      inputRef.current.focus();
    }
  };

  const userInfo = { id: "user1", pw: 123 };
  /*  아이디, 비번 입력받고 로그인하기 클릭시 userInfo의 값이랑 비교해서 일치하는지 체크
        id, pw 로그인완료 알림창
        id 틀렸을 경우 idinput에 포커싱 & 회원가입버튼 활성화
        pw 틀렸을 경우 pwInput에 포커싱 & 회원가입버튼 활성화
    */
  const [loginInfo, setLoginInfo] = useState({ userId: "", userPw: "" });
  const userIdOnChangeHandler = (e) => {
    setLoginInfo({ userId: e.target.value, userPw: loginInfo.userPw });
  };
  const userPwOnChangeHandler = (e) => {
    setLoginInfo({ userId: loginInfo.userId, userPw: e.target.value });
  };
  const idinput = useRef();
  const pwinput = useRef();
  const signRef = useRef();

  const login = () => {
    if (userInfo.id == loginInfo.userId && userInfo.pw == loginInfo.userPw) {
      alert("로그인완료");
    } else {
      if (userInfo.id != loginInfo.userId) {
        idinput.current.focus();
      }
      if (userInfo.pw != loginInfo.userPw) {
        pwinput.current.focus();
      }
      signRef.current.disabled = false;
    }
  };
  return (
    <div>
      <p>countVar: {countVar}</p>
      <p>countState: {countState}</p>
      <p>countRef: {countRef.current}</p>
      <br />

      <button className="border border-solid" onClick={countVarUp}>
        countVar +
      </button>
      <button className="border border-solid" onClick={countStateUp}>
        countState +
      </button>
      <button className="border border-solid" onClick={countRefUp}>
        countRef +
      </button>
      <br />
      <br />
      <p>로그인 영역</p>
      <input
        className="border"
        type="text"
        onChange={idOnChangeHandler}
        value={userId}
        ref={inputRef}
      />
      <br />
      <button onClick={goLogin} className="mx-3">
        로그인 하기
      </button>
      <button ref={searchref} className="mx-3">
        아이디 찾기
      </button>
      <br />
      <br />
      <label>
        아이디입력 :
        <input
          type="text"
          className="border"
          onChange={userIdOnChangeHandler}
          value={loginInfo.userId}
          ref={idinput}
        />
      </label>
      <br />
      <label>
        비밀번호입력 :
        <input
          type="password"
          className="border"
          onChange={userPwOnChangeHandler}
          value={loginInfo.userPw}
          ref={pwinput}
        />
      </label>
      <br />
      <button className="border mx-3" onClick={login}>
        로그인하기
      </button>
      <button className="border mx-3" disabled ref={signRef}>
        회원가입하기
      </button>
    </div>
  );
}
export default HookUseRef;
