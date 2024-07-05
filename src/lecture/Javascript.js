function Javascript() {
  /* 데이터타입
        1) 기본 : 문자열(String), 숫자형(number), 논리형(boolean) undefined null
        - undefined & null 차이
          undefined : 선언 후 값을 할당하지 않으면 임시초깃값으로 지정됨
          null : 선언 후 일부러 공간을 비워둠(값이 없음)
        2) 참조 : 배열 객체리터럴 함수 Map Set
    */
  const obj = { p1: 21, p2: { p3: 11, p4: 22 } };
  console.log(undefined?.p4);
  //옵셔널체이닝 ?.
  const date = undefined;
  console.log(date?.p1 || 100);

  //연산자(&&, ||, !, x?y:z)
  const list = null || [];
  list.map((v, i) => {
    console.log(v);
  });

  // ??(널병합연산자)
  const num = 0;
  console.log(num || 100);
  console.log(num ?? 200);

  const list2 = [10, 20, 30];
  list2.map((v, i) => {
    console.log("->", v, i);
  });

  const fruits1 = ["사과", "바나나"];
  const fruits2 = ["메론", "수박"];
  console.log([...fruits1, ...fruits2]);
  return <div>자바스크립트복습</div>;
}
export default Javascript;
