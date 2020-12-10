import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import HookUseState from "./hooksExamples/useState/main.js";
import HookUseEffect from "./hooksExamples/useEffect/main.js";
import HookUseRef from "./hooksExamples/useRef/main.js";
import HookUseMemo from "./hooksExamples/useMemo/main.js";
import HookUseCallback from "./hooksExamples/useCallback/main.js";

function App() {
    return (
        <div className="App container">
            <div className="box">
                <HookUseState />
            </div>
            <div className="box">
                <HookUseEffect />
            </div>
            <div className="box">
                <HookUseRef />
            </div>
            <div className="box">
                <HookUseMemo />
            </div>
            <div className="box">
                <HookUseCallback />
            </div>
        </div>
    );
}

export default App;
