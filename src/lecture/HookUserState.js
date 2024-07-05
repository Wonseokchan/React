import { useState } from "react";

function HookUserState() {
  /* Hook UserState
        const [state(현재의 상태값), setState(상태값 업데이트 함수)] = useState(초깃값)
        컴포넌트의 상태관리 및 변경을 할 수 있도록 도와주는 훅

        setState : 비동기처리방식

        state가 변경 >> 가상돔에서 변경된 부분 확인 >> 변경이 실제로 된 부분만 브라우저에 렌더링
  */
  console.log("=============> rendering <================");
  let letNum = 0;
  const letNumUpdate = () => {
    letNum++;
    console.log(letNum);
  };
  const [countNum, setCountNum] = useState(0);
  const countNumUpdate = () => {
    setCountNum(countNum + 1);
    //상태값업데이트함수 -> 비동기처리
    console.log(countNum);
  };

  const [score, setScore] = useState(0);
  const scoreUpdate = (param) => {
    if (param == "up") {
      setScore(score + 1);
    }
    if (param == "down") {
      setScore(score - 1 < 0 ? 0 : score - 1);
    }
  };

  const [userName, setUserName] = useState("");
  const [list, setList] = useState(["데빌구", "훈발롬"]);
  const userNameOnChangeHandler = (e) => {
    setUserName(e.target.value);
  };

  const goAddUserName = () => {
    // 객체들도 화면에 새로 그릴때에는 set함수 이용해서 업데이트
    // setList(새로운배열값) 업데이트를 했는데 화면에 반응이 없을 때 -> 스프레드연산자 활용
    setList([...list, userName]);
    setUserName(""); //초기화
  };
  return (
    <div>
      <p>letNum값 : {letNum}</p>
      <p>countNum값: {countNum}</p>
      <button onClick={letNumUpdate}>letNum + </button>
      <button onClick={countNumUpdate}>countNum+</button>

      <p>점수:{score}</p>
      <button onClick={() => scoreUpdate("up")}>점수 +</button>
      <button onClick={() => scoreUpdate("down")}>점수 -</button>
      <br />

      <input type="text" value={userName} onChange={userNameOnChangeHandler} />
      <button onClick={goAddUserName}>추가</button>

      <p>목록</p>
      {list.map((v, i) => {
        return <p key={i}>{v}</p>;
      })}
    </div>
  );
}
export default HookUserState;
