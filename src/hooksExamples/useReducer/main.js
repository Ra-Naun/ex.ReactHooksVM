import React from "react";
import Alert from "./alert/alert.js";
import SomeBox from "./someBox.js";
import { AlertProvider } from "./alert/alertContext";

export const AlertContext = React.createContext();

function HookUseReducer() {
    return (
        <>
            <AlertProvider>
                <h6>useReducer</h6>
                <hr />
                <Alert />
                <SomeBox />
            </AlertProvider>
        </>
    );
}

export default HookUseReducer;
