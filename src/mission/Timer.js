import { useCallback, useEffect, useState } from "react";

function Timer({ init, close }) {
  const [code, setCode] = useState("");
  const [sec, setSec] = useState(init || 100);
  const codeInfo = JSON.parse(localStorage.getItem("code"));

  const codeOnChangeHandler = useCallback((e) => {
    setCode(e.target.value);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setSec((prev) => {
        if (prev == 1) {
          alert("제한시간이 종료되었습니다");
          close({ validate: false });
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes} : ${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const codeCheck = () => {
    if (code == codeInfo) {
      alert("인증완료");
      close({ validate: true });
      return;
    }
    if (code != codeInfo) {
      alert("인증번호가 틀렸습니다");
      return;
    }
  };
  return (
    <>
      <div
        className="md:col-span-4"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <input
          type="text"
          className="h-10 border mt-1 rounded px-4 bg-gray-50"
          style={{ width: "35%" }}
          onChange={codeOnChangeHandler}
        />
        <input
          type="text"
          className="h-10 border mt-1 rounded px-4 ml-5  bg-gray-50"
          value={formatTime(sec)}
          style={{ width: "35%" }}
          readOnly
          disabled
        />
        <button
          className="bg-orange-500 text-white rounded-md px-1 py-1 ml-5"
          style={{ width: "10%" }}
          onClick={codeCheck}
        >
          확인
        </button>
      </div>
    </>
  );
}
export default Timer;
