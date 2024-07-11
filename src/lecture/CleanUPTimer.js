import { useEffect, useState } from "react";

function CleanUpTimer({ init }) {
  const [sec, setSec] = useState(init);
  /* 함수형 업데이트 
    - 이전 상태값을 기반으로 새로운 상태값을 업데이트 하는 것을 보장
    setSec(값) : 현재의 상태값을 직접 참조
    setSec((이전값)=>이전값+1) : 이전의 상태값을 기준으로 참조
    
    이전 상태에 의존해야하는 경우 함수형 업데이트 방식 사용
   */
  useEffect(() => {
    const timer = setInterval(() => {
      setSec((prev) => {
        return prev - 1;
      });
      console.log("타이머살아있음");
    }, 1000);
    //해당 컴포넌트가 마운트 해제(컴포넌트 사라짐)시 실행
    //cleanup 작업영역
    return () => {
      console.log("타이머정리됨");
      clearInterval(timer);
    };
  }, []);
  return (
    <div>
      <p>Timer : {sec} </p>
    </div>
  );
}
export default CleanUpTimer;
