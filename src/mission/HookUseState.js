import { useState } from "react";

function HookUserState() {
  // const [title, setTitle] = useState("");
  // const [content, setContent] = useState("");

  const [info, setInfo] = useState({ title: "", content: "" });

  const [list, setList] = useState([]);

  const titleOnChangeHandler = (e) => {
    // setTitle(e.target.value);
    setInfo({ title: e.target.value, content: info.content });
  };
  const contentOnChangeHandler = (e) => {
    // setContent(e.target.value);
    setInfo({ title: info.title, content: e.target.value });
  };

  const add = () => {
    setList([...list, info]);
    // setTitle("");
    // setContent("");
    setInfo({ title: "", content: "" });
  };
  return (
    <>
      <div className="w-full max-w-screen-xl mx-auto p-6">
        <div className="relative rounded overflow-hidden border border-grey-light mb-8 bg-white">
          <div className="border-b border-grey-light p-4 bg-grey-lighter py-8">
            <div className="bg-white mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden">
              <div className="sm:flex sm:items-center px-2 py-4">
                <div className="flex-grow">
                  <h3 className="font-normal px-2 py-3 leading-tight">
                    할 일 입력
                  </h3>
                  <input
                    type="text"
                    value={info.title}
                    placeholder="할 일 제목 입력"
                    className="my-2 w-full text-sm bg-grey-light text-grey-darkest rounded h-10 p-3"
                    onChange={titleOnChangeHandler}
                  />
                  <input
                    type="text"
                    value={info.content}
                    placeholder="할 일 내용 입력"
                    className="my-2 w-full text-sm bg-grey-light text-grey-darkest rounded h-10 p-3"
                    onChange={contentOnChangeHandler}
                  />
                  <div className="sm:flex bg-grey-light sm:items-center px-2 py-4">
                    <div className="flex-grow text-right">
                      <button
                        className="text-grey-darkest hover:text-grey-dark py-2 px-4 rounded"
                        onClick={add}
                      >
                        저장
                      </button>
                    </div>
                  </div>
                  <div className="w-full">
                    <h3 className="font-normal px-2 py-3 leading-tight">
                      할 일 목록
                    </h3>
                    {list.map((v, i) => {
                      return (
                        <div
                          key={i}
                          className="flex cursor-pointer my-1 hover:bg-blue-lightest rounded"
                        >
                          <div className="w-8 h-10 text-center py-1">
                            <p className="text-3xl p-0 text-green-dark">
                              &bull;
                            </p>
                          </div>
                          <div className="w-4/5 h-10 py-3 px-1">
                            <p className="hover:text-blue-dark">{v.title}</p>
                          </div>
                          <div className="w-1/5 h-10 text-right p-3">
                            <p className="text-sm text-grey-dark">
                              {v.content}
                            </p>
                          </div>
                        </div>
                      );
                    })}
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
export default HookUserState;
