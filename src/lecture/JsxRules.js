function JsxRules() {
  const name = "신짱구";
  const obj = { name: "짱구", age: 5 };
  const list = ["철수", "훈이", "유리", "맹구"];
  const list2 = [1, 2, 3, 4];
  return (
    /* Jsc 규칙
    //1. 하나의 부모태그로 감싸야함
    //2. <></> 빈태그 활용해서 스타일 구조 잡을 수도 있음
    //3. 반드시 종료 태그 작성
    //4. class속성명은 className속성명으로 기입
    //5. 속성명은 카멜표기법으로 작성
    //6. 스타일속성은 객체형태로 값 지정
    //7. JS변수 대입해서 사용가능(단, 중괄호 활용) -- 태그안에 중괄호 활용해서 데이터 넣을 때 객체 그대로 넣으면 안됨
    //8. 반복문은 map활용
    //9. 조건문은 삼항연산자 활용
    */
    <>
      <p
        className="bg-pink"
        style={{ backgroundColor: "pink", textAlign: "center" }}
      >
        {name}
      </p>
      <p>
        {obj.name}의 나이는 {obj.age}살
      </p>
      <p>친구들</p>
      <ul>
        {list.map((v, i) => {
          return <li key={`f-${i}`}>{v}</li>;
        })}
      </ul>

      <p>숫자목록</p>
      {list2.map((v, i) => {
        return (
          <div key={`numer-${i}`}>
            <p>
              숫자<span>{v}</span>
            </p>
          </div>
        );
      })}

      <p>빌런제외</p>
      {list.map((v, i) => {
        return v != "훈이" ? <p key={i}>{v}</p> : null;
      })}
    </>
  );
}
export default JsxRules;
