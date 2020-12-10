import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Hook_useState from "./hooksExamples/useState/main.js";
import Hook_useEffect from "./hooksExamples/useEffect/main.js";

function App() {
    return (
        <div className="App container">
            <div className="box">
                <Hook_useState />
            </div>
            <div className="box">
                <Hook_useEffect />
            </div>
        </div>
    );
}

export default App;
