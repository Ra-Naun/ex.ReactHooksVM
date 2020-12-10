import React from "react";
import Alert from "./alert/alert.js";
import SomeBox from "./someBox.js";
import { AlertProvider } from "./alert/alertContext";

export const AlertContext = React.createContext();

function HookUseContext() {
    return (
        <>
            <AlertProvider>
                <h6>useContext</h6>
                <hr />
                <Alert />
                <SomeBox />
            </AlertProvider>
        </>
    );
}

export default HookUseContext;
