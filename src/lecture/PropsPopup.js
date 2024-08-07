import { useCallback, useState } from "react";

const PropsPopup = ({ title, close }) => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const emailOnChangeHandler = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  const pwOnChangeHandler = useCallback((e) => {
    setPw(e.target.value);
  }, []);

  const goLogin = () => {
    close({ close: true, email: email, pw: pw });
  };
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://unpkg.com/@themesberg/flowbite@1.2.0/dist/flowbite.min.css"
      />

      <div className="max-w-2xl mx-auto">
        <div
          id="authentication-modal"
          className="overflow-x-hidden overflow-y-auto fixed h-modal md:h-full top-4 left-0 right-0 md:inset-0 z-50 justify-center items-center"
        >
          <div className="relative w-full max-w-md px-4 h-full md:h-auto">
            <div className="bg-white rounded-lg shadow relative dark:bg-gray-700">
              <div className="flex justify-end p-2">
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                  data-modal-toggle="authentication-modal"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => close(true)}
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                  {title}
                </h3>
                <div>
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    onChange={emailOnChangeHandler}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">
                    Your password
                  </label>
                  <input
                    type="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    onChange={pwOnChangeHandler}
                  />
                </div>

                <button
                  onClick={goLogin}
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Login to your account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <script src="https://unpkg.com/@themesberg/flowbite@1.2.0/dist/flowbite.bundle.js"></script>
    </div>
  );
};
export default PropsPopup;
