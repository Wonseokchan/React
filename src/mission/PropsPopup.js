import { useCallback, useState } from "react";
const PropsPopup = ({ title, close }) => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const info = JSON.parse(localStorage.getItem("info"));
  const idOnChangeHandler = useCallback((e) => {
    setId(e.target.value);
  }, []);
  const pwOnChangeHandler = useCallback((e) => {
    setPw(e.target.value);
  }, []);
  const goLogin = () => {
    if (!id) {
      alert("아이디를 입력하세요");
      return;
    }
    if (!pw) {
      alert("비밀번호를 입력하세요");
      return;
    }
    if (id && pw) {
      if (id == info.id && pw == info.pw) {
        alert("로그인성공");
        close({ close: true, name: info.name });
      }
      if (id != info.id || pw != info.pw) {
        alert("로그인실패");
      }
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">{title}</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="relative">
                  <input
                    autoComplete="off"
                    id="email"
                    name="email"
                    type="text"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    onChange={idOnChangeHandler}
                  />
                  <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                    사용자 아이디
                  </label>
                </div>
                <div className="relative">
                  <input
                    autoComplete="off"
                    id="password"
                    name="password"
                    type="password"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    onChange={pwOnChangeHandler}
                  />
                  <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                    사용자 비밀번호
                  </label>
                </div>
                <div className="relative align-baseline">
                  <button
                    className="bg-blue-500 text-white rounded-md px-1 py-1 mr-5"
                    onClick={goLogin}
                  >
                    로그인
                  </button>
                  <button
                    className="bg-blue-500 text-white rounded-md px-1 py-1 ml-5"
                    onClick={() => close(true)}
                  >
                    로그인 취소
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PropsPopup;
