import { useCallback, useEffect, useRef, useState } from "react";
import Timer from "./Timer";

function SignUp() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [email, setEmail] = useState("");
  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const randCode = Math.floor(Math.random() * 89999) + 10000;
    localStorage.setItem("code", JSON.stringify(randCode));
  }, []);

  const idOnChangeHandler = useCallback((e) => {
    setId(e.target.value);
  }, []);

  const pwOnChangeHandler = useCallback((e) => {
    setPw(e.target.value);
  }, []);

  const emailOnChangeHandler = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  const mailClick = () => {
    if (!id) {
      alert("아이디를 입력하세요");
      return;
    }
    if (!pw) {
      alert("비밀번호를 입력하세요");
      return;
    }
    if (!email) {
      alert("이메일을 입력하세요");
      return;
    }
    setShow(true);
  };

  const goClose = (param) => {
    if (param) {
      setShow(false);
      if (param.validate) {
        setSuccess(true);
      }
    }
  };

  const assignBtn = () => {
    if (success) {
      let userInfo = { id: id, pw: pw, email: email };
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
      alert("회원가입 완료");
    } else {
      alert("이메일 인증을 먼저 해주세요");
    }
  };
  return (
    <>
      <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
        <div className="container max-w-screen-lg mx-auto">
          <div>
            <h2 className="font-semibold text-xl text-gray-600">회원가입</h2>
            <p className="text-gray-500 mb-6">회원가입 정보를 입력하세요</p>

            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <div className="lg:col-span-2">
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <div className="md:col-span-5">
                      <label>아이디</label>
                      <input
                        type="text"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        onChange={idOnChangeHandler}
                      />
                    </div>
                    <div className="md:col-span-5">
                      <label>비밀번호</label>
                      <input
                        type="password"
                        className="h-10 border mt-1 rounded px-4 w-full  bg-gray-50"
                        onChange={pwOnChangeHandler}
                      />
                    </div>

                    <div className="md:col-span-4">
                      <label>이메일</label>
                      <div style={{ display: "flex", flexDirection: "row" }}>
                        <input
                          type="email"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          onChange={emailOnChangeHandler}
                          placeholder="email@domain.com"
                          style={{ width: "70%" }}
                        />
                        <button
                          className="bg-orange-500 text-white rounded-md px-1 py-1 ml-5"
                          style={{ width: "20%" }}
                          onClick={mailClick}
                        >
                          이메일 인증
                        </button>
                      </div>
                    </div>
                    {show ? <Timer init={120} close={goClose} /> : null}

                    <div className="md:col-span-5 text-right">
                      <div className="inline-flex items-end">
                        <button
                          className={`${
                            success
                              ? "bg-blue-500 text-white hover:bg-blue-700 font-bold py-2 px-4 rounded"
                              : "bg-blue-500 text-white font-bold py-2 px-4 rounded"
                          } font-bold py-2 px-4 rounded`}
                          onClick={assignBtn}
                        >
                          가입하기
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SignUp;
