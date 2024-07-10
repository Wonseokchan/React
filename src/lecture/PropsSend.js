import { useCallback, useState } from "react";
import PropsChild1 from "./PropsChild1";
import PropsChild2 from "./PropsChild2";
import PropsPopup from "./PropsPopup";

function PropsSend() {
  /* Props : 부모가 자식 컴포넌트에 단일객체로 값 전달 가능
    popup의 경우 부모컴포넌트에서 열고 닫기 가능 - 자식이 직접 컴포넌트를 닫을 수 없음
    부모컴포넌트에서 자식컴포넌트로 함수 전달 -> 자식컴포넌트에서 함수호출 > 부모가 감지해서 닫기
  */
  //   const [name, setName] = useState("");
  //   const nameOnChangeHandler = useCallback((e) => {
  //     setName(e.target.value);
  //   }, []);
  //   const [inputNum1, setNum1] = useState("");
  //   const [inputNum2, setNum2] = useState("");
  //   const numOnChangeHandler = useCallback((e) => {
  //     setNum1(e.target.value);
  //   }, []);
  //   const num2OnChangeHandler = useCallback((e) => {
  //     setNum2(e.target.value);
  //   }, []);
  const [open, setOpen] = useState(false);
  const openPopup = () => {
    setOpen(true);
  };
  const [email, setEmail] = useState("");
  const close = (param) => {
    if (param.close) {
      setOpen(false);
      setEmail(param.email);
      console.log(param.pw);
    }
  };
  return (
    <>
      <p>{email}</p>
      {open ? <PropsPopup title="테스트팝업" close={close} /> : null}
      <div>
        {/* <input className="border" type="text" onChange={nameOnChangeHandler} />
      <PropsChild1
        name={name}
        id="jg1"
        list={["철수", "맹구"]}
        info={{ school: "떡잎" }}
      />
      <input className="border" type="text" onChange={numOnChangeHandler} />
      <br />
      <input className="border" type="number" onChange={num2OnChangeHandler} />
      <PropsChild2 num1={inputNum1} num2={inputNum2} /> */}
        <button className="border" onClick={openPopup}>
          팝업 열기
        </button>
      </div>
    </>
  );
}
export default PropsSend;
