import { useRef, useState } from "react";

function HookUseRef() {
  const [num, setNum] = useState(0);
  const colorRef = useRef();
  const randNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const foodChange = () => {
    setNum(randNum(1, 8));
  };
  function getRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  }

  const [colorList, setColorList] = useState([]);
  const colorChange = () => {
    const res = getRandomColor();
    colorRef.current.style.backgroundColor = res;
    setColorList([...colorList, res]);
  };

  return (
    <div>
      <img
        src={`/images/food${num}.png`}
        style={{ width: "400px", height: "400px" }}
      />
      <br />
      <button className="border mx-3 my-3" onClick={foodChange}>
        음식 변경
      </button>
      <br />
      <div
        style={{ width: "400px", height: "400px" }}
        className="border"
        ref={colorRef}
      ></div>
      <button className="border mx-3 my-3" onClick={colorChange}>
        색상 변경
      </button>
      <p>색상 변경 기록</p>
      <br />
      {colorList.map((v, i) => {
        return (
          <p key={i} style={{ color: v }}>
            {v}
          </p>
        );
      })}
    </div>
  );
}
export default HookUseRef;
