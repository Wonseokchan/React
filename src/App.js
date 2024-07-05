import "./App.css";
import HookUserState from "./lecture/HookUserState";
import Javascript from "./lecture/Javascript";
// import JsxRules from "./lecture/JsxRules";
import JsxRules from "./mission/JsxRules";
import HookUseState from "./mission/HookUseState";
// import HookUseEffect from "./lecture/HookUseEffect";
import HookUseEffect from "./mission/HookUseEffect";
import HookUseEffect_v2 from "./mission/HookUseEffect_v2";

function App() {
  return (
    <div className="App" style={{ textAlign: "left", margin: "10px" }}>
      {/* <Javascript /> */}
      {/* <JsxRules /> */}
      {/* <HookUserState /> */}
      {/* <HookUseEffect /> */}

      {/* 미션 */}
      {/* <JsxRules /> */}
      {/* <HookUseState /> */}
      <HookUseEffect />
      <HookUseEffect_v2 />
    </div>
  );
}

export default App;
