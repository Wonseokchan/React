import { useEffect, useState } from "react";

function HookUseEffect_v2() {
  const list = [
    { type: "admin", menu: "회원전체관리화면" },
    { type: "user", menu: "개인정보관리화면" },
    { type: "user", menu: "알림설정화면" },
    { type: "admin", menu: "배너관리화면" },
    { type: "admin", menu: "회사정보관리화면" },
  ];

  const [mode, setMode] = useState(false);
  const [menus, setMenus] = useState({ user: [], admin: [] });

  useEffect(() => {
    setMenus({
      user: list.filter((item) => item.type == "user"),
      admin: list.filter((item) => item.type == "admin"),
    });
  }, []);

  return (
    <div className="p-8 space-y-8">
      <div className="p-8 rounded-lg">
        <div style={{ display: "flex" }}>
          <p className="text-indigo-600 font-bold my-3">
            {mode ? "관리자모드" : "사용자모드"}
          </p>
          <button
            className="bg-indigo-600 text-indigo-100 font-bold my-3 mx-3"
            onClick={() => setMode(!mode)}
          >
            모드 변경
          </button>
        </div>
        <ul className="pl-4 border-l-2 border-indigo-100 text-indigo-900">
          {mode
            ? menus.admin.map((v, i) => {
                return (
                  <li
                    key={i}
                    className="px-4 py-2 hover:bg-indigo-900  hover:text-white rounded-lg"
                  >
                    {v.menu}
                  </li>
                );
              })
            : menus.user.map((v, i) => {
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
export default HookUseEffect_v2;
