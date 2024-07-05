function JsxRules() {
  const qnaList = [
    { question: "Q1. 이름은?", answer: "A1. 신짱구" },
    { question: "Q2. 몇살임?", answer: "A2. 5살" },
    { question: "Q3. 유치원은?", answer: "A3. 떡잎쓰" },
    { question: "Q4. 강아지는?", answer: "A4. 흰둥이" },
  ];

  const fruitsList = [
    { fruit: "사과", price: 1000 },
    { fruit: "바나나", price: 2000 },
    { fruit: "딸기", price: 3000 },
    { fruit: "복숭아", price: 4000 },
    { fruit: "오렌지", price: 5000 },
  ];

  return (
    <>
      <p style={{ backgroundColor: "pink" }}>모든 QnA 목록</p>
      {qnaList.map((v, i) => {
        return (
          <div key={`q-${i}`}>
            <strong>{v.question}</strong>
            <p>{v.answer}</p>
          </div>
        );
      })}

      <p style={{ backgroundColor: "pink" }}>제외한 QnA 목록</p>
      {qnaList.map((v, i) => {
        return v.answer !== "A4. 흰둥이" ? (
          <div key={i}>
            <strong>{v.question}</strong>
            <p>{v.answer}</p>
          </div>
        ) : null;
      })}
      <p style={{ backgroundColor: "pink" }}>과일 목록</p>
      {fruitsList.map((v, i) => {
        return (
          <div key={i}>
            <img
              src={`/images/fruit${i + 1}.jpg`}
              style={{ width: "200px", height: "200px" }}
              alt=""
            />
            <p>
              {v.fruit}의 가격 : {v.price}원
            </p>
          </div>
        );
      })}
    </>
  );
}
export default JsxRules;
