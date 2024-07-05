import { useEffect, useState } from "react";

function HookUseEffect() {
  const list = [
    { type: "admin", menu: "회원전체관리화면" },
    { type: "user", menu: "개인정보관리화면" },
    { type: "user", menu: "알림설정화면" },
    { type: "admin", menu: "배너관리화면" },
    { type: "admin", menu: "회사정보관리화면" },
  ];
  const [newlist, setNewList] = useState(
    list.filter((item) => item.type === "user")
  );

  const [mode, setMode] = useState("사용자모드");

  const changeMode = () => {
    if (mode == "사용자모드") {
      setMode("관리자모드");
    } else {
      setMode("사용자모드");
    }
  };

  useEffect(() => {
    // eslint-disable-next-line eqeqeq
    if (mode == "관리자모드") {
      setNewList(list.filter((item) => item.type === "admin"));
    } else {
      setNewList(list.filter((item) => item.type === "user"));
    }
  }, [mode]);

  return (
    <div className="p-8 space-y-8">
      <div className="p-8 rounded-lg">
        <div style={{ display: "flex" }}>
          <p className="text-indigo-600 font-bold my-3">{mode}</p>
          <button
            className="bg-indigo-600 text-indigo-100 font-bold my-3 mx-3"
            onClick={changeMode}
          >
            모드 변경
          </button>
        </div>
        <ul className="pl-4 border-l-2 border-indigo-100 text-indigo-900">
          {newlist.map((v, i) => {
            return (
              <li
                key={i}
                className="px-4 py-2 hover:bg-indigo-900  hover:text-white rounded-lg"
              >
                {v.menu}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
export default HookUseEffect;
