import { useEffect, useState } from "react";

function HookUseEffect() {
  /* HookUseEffect
        렌더링때마다 특정작업을 수행하도록 하는 훅
        mount(첫렌더링), update(재렌더링), unmount(사라짐)
  */
  console.log("=======> rendering <========");
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [list, setList] = useState([]);

  const nameOnChangeHandler = (e) => {
    setName(e.target.value);
  };
  const addList = () => {
    setList([...list, name]);
  };
  useEffect(() => {
    console.log("매번렌더링");
  });
  useEffect(() => {
    console.log("처음에만 렌더링");
  }, []); //[] dependency array

  useEffect(() => {
    console.log("count 상태변화");
    console.log(count);
  }, [count]);

  useEffect(() => {
    console.log("name 상태변화");
  }, [name]);
  useEffect(() => {
    console.log("list 상태변화");
  }, [list]);

  const countUp = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <p>count : {count}</p>
      <button className="border" onClick={countUp}>
        카운트 업
      </button>
      <br />
      <br />
      <input
        className="border"
        type="text"
        value={name}
        onChange={nameOnChangeHandler}
      />
      <button onClick={addList}>추가</button>

      {list.map((v, i) => {
        return <p key={i}>{v}</p>;
      })}
    </div>
  );
}
export default HookUseEffect;
