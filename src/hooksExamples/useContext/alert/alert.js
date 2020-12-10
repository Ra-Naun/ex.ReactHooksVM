import React from "react";
import { useAlert } from "./alertContext.js";

function Alert() {
    //const context = useAlert();
    const alert = useAlert();

    if (!alert.visible) return null;
    return (
        <>
            <div className={"alert alert-danger pt-3"} onClick={alert.toggle}>
                Это очень и очень важное сообщение!
            </div>
        </>
    );
}

export default Alert;
