import { useState } from "react";
import CleanUpTimer from "./CleanUPTimer";

const CleanUp = () => {
  const [show, setShow] = useState(false);
  /* cleanup작업 : useEffect훅에서 발생
        컴포넌트의 생명주기와 관련된 작업 수행 시 사용
  */
  return (
    <div>
      <button className="border" onClick={() => setShow(true)}>
        타이머보이기
      </button>
      <br />
      <button className="border" onClick={() => setShow(false)}>
        타이머숨기기
      </button>
      <br />
      {show ? <CleanUpTimer init={120} /> : null}
    </div>
  );
};
export default CleanUp;
