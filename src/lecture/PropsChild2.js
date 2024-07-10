import { useEffect, useState } from "react";

function PropsChild2(props) {
  /* 상태값이 바뀌었다고 알려주는 useState
        useState를 통해서 값이 바뀌었다고 인지시켜주지 않으면 반응없음

        컴포넌트별로 상태값을 감지시켜주는 위치확인
    */
  const { num1, num2 } = props;
  const [number1, setNumber1] = useState(Number(num1));
  const [number2, setNumber2] = useState(Number(num2));
  useEffect(() => {
    setNumber1(Number(num1));
    setNumber2(Number(num2));
  }, [props]);
  return (
    <div>
      <p>숫자1: {number1}</p>
      <button onClick={() => setNumber1(number1 + 1)}>숫자업</button>
      <br />
      <button onClick={() => setNumber1(number1 - 1)}>숫자다운</button>
      <br />
      <p>숫자2: {number2}</p>
      <button onClick={() => setNumber2(number2 + 1)}>숫자업</button>
      <br />
      <button onClick={() => setNumber2(number2 - 1)}>숫자다운</button>
    </div>
  );
}
export default PropsChild2;
