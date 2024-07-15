import { useCallback, useState } from "react";

function SchedulePopUp({ close }) {
  const [info, setInfo] = useState({
    title: "",
    content: "",
  });

  const titleOnChangeHandler = (e) => {
    setInfo({
      title: e.target.value,
      content: info.content,
    });
  };

  const contentOnChangeHandler = (e) => {
    setInfo({
      title: info.title,
      content: e.target.value,
    });
  };

  const submitBtn = () => {
    close({ close: true, info: info });
  };

  return (
    <>
      <div className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
        <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
          <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">
            스케줄 추가하기
          </h1>
          <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
            스케줄 제목
          </label>
          <input
            className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
            onChange={titleOnChangeHandler}
          />
          <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
            스케줄 내용
          </label>
          <input
            className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
            onChange={contentOnChangeHandler}
          />
          <div className="flex items-center justify-start w-full">
            <button
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm"
              onClick={submitBtn}
            >
              등록
            </button>
            <button
              className="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
              onClick={() => close(true)}
            >
              취소
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default SchedulePopUp;
