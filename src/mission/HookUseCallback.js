import { useCallback, useState } from "react";

function HookUseCallback() {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [userPwConfirm, setUserPwConfirm] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userName, setUserName] = useState("");
  const [userBirth, setUserBirth] = useState("");
  const [isConfirm, setIsConfirm] = useState(false);
  const IdOnChangeHandler = useCallback((e) => {
    setUserId(e.target.value);
  }, []);
  const pwOnChangeHandler = useCallback((e) => {
    setUserPw(e.target.value);
  }, []);
  const pwConfirmOnChangeHandler = useCallback((e) => {
    setUserPwConfirm(e.target.value);
  }, []);
  const telOnChangeHandler = useCallback((e) => {
    setUserPhone(e.target.value);
  }, []);
  const nameOnChangeHandler = useCallback((e) => {
    setUserName(e.target.value);
  }, []);
  const birthOnChangeHandler = useCallback((e) => {
    setUserBirth(e.target.value);
  }, []);
  const goPwConfirm = () => {
    console.log("??");
    if (!userPw) {
      alert("비밀번호입력하세요.");
      return;
    }
    if (!userPwConfirm) {
      alert("비밀번호확인입력하세요");
      return;
    }
    if (userPw != userPwConfirm) {
      alert("비밀번호가 일치하지않습니다");
    } else {
      alert("비밀번호일치");
      setIsConfirm(true);
    }
  };

  const validationCheck = () => {
    if (!userId) {
      alert("아이디입력하세요");
      return false;
    }
    if (!userPw) {
      alert("비밀번호입력하세요");
      return false;
    }
    if (!userPwConfirm) {
      alert("비밀번호확인입력하세요");
      return false;
    }
    if (!userPhone) {
      alert("휴대폰번호입력하세요");
      return false;
    }
    if (!userName) {
      alert("이름입력하세요");
      return false;
    }
    if (!userBirth) {
      alert("생년월일입력하세요");
      return false;
    }
    return true;
  };

  const goSign = () => {
    const res = validationCheck();
    if (res) {
      if (isConfirm) {
        if (userPw != userPwConfirm) {
          alert("비밀번호 확인하세요");
          setIsConfirm(false);
          return;
        }
      } else {
        alert("비밀번호 확인부터 하세요");
        return;
      }
      alert("회원가입완료");
      const info = {
        id: userId,
        pw: userPw,
        name: userName,
        phone: userPhone,
        birth: userBirth,
      };
      console.log(info);
    }
  };
  return (
    <div>
      <div className="demo-page">
        <main className="demo-page-content">
          <section>
            <div className="href-target"></div>
            <h1>회원가입</h1>
            <p>회원가입을 위한 정보를 입력해주세요</p>

            <div className="nice-form-group">
              <label>아이디</label>
              <input
                type="text"
                placeholder="Your id"
                onChange={IdOnChangeHandler}
                value={userId}
              />
            </div>

            <div className="nice-form-group">
              <label>비밀번호</label>
              <input
                type="password"
                placeholder="Your Pw"
                onChange={pwOnChangeHandler}
                value={userPw}
              />
            </div>

            <div className="nice-form-group">
              <label>비밀번호 확인</label>
              <input
                type="password"
                placeholder="Your Pw Confirm"
                onChange={pwConfirmOnChangeHandler}
                value={userPwConfirm}
                style={{
                  width: "70%",
                }}
              />
              <button
                onClick={goPwConfirm}
                style={{
                  width: "30%",
                  padding: "1em",
                  backgroundColor: "#3b4ce2",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  fontWeight: "500",
                  cursor: "pointer",
                }}
              >
                비밀번호확인
              </button>
            </div>

            <div className="nice-form-group">
              <label>전화번호</label>
              <input
                type="tel"
                placeholder="Your Phone"
                onChange={telOnChangeHandler}
                value={userPhone}
              />
            </div>

            <div className="nice-form-group">
              <label>이름</label>
              <input
                type="text"
                placeholder="Your name"
                onChange={nameOnChangeHandler}
                value={userName}
              />
            </div>

            <div className="nice-form-group">
              <label>생년월일8자리</label>
              <input
                type="text"
                placeholder="Your birth"
                maxLength="8"
                onChange={birthOnChangeHandler}
                value={userBirth}
              />
            </div>
          </section>
          <br />
          <button
            onClick={goSign}
            style={{
              backgroundColor: "#10b981",
              color: "#fff",
              marginLeft: "5%",
              padding: "1em",
              border: "none",
              borderRadius: "5px",
            }}
          >
            회원가입요청
          </button>
        </main>
      </div>
    </div>
  );
}
export default HookUseCallback;
