import { useRef, useState } from "react";

function HookUseRef_v2() {
  const foodRef = useRef();
  const colorRef = useRef();
  const goChangefood = () => {
    foodRef.current.src = `/images/food${Math.floor(
      Math.random() * 8 + 1
    )}.png`;
  };

  const randomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };
  const [colorList, setColorList] = useState([]);
  const goChangeColor = () => {
    const code = randomColor();
    colorRef.current.style.backgroundColor = code;
    setColorList([...colorList, code]);
  };
  return (
    <div style={{ display: "flex" }}>
      <div>
        <img
          ref={foodRef}
          style={{
            width: "400px",
            height: "400px",
            padding: "50px",
          }}
          src="/images/food1.png"
        />
        <br />
        <button className="border mx-3 my-3" onClick={goChangefood}>
          음식 변경
        </button>
      </div>
      <div>
        <div
          style={{ width: "400px", height: "400px", padding: "50px" }}
          className="border"
          ref={colorRef}
        ></div>
        <button className="border mx-3 my-3" onClick={goChangeColor}>
          색상 변경
        </button>
      </div>
      <div style={{ marginLeft: "5%" }}>
        <p>색상 변경 기록</p>
        <br />
        {colorList.map((v, i) => {
          return (
            <div>
              <p key={i} style={{ color: v }}>
                {v}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default HookUseRef_v2;
