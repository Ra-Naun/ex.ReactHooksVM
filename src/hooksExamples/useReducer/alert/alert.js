import React from "react";
import { useAlert } from "./alertContext.js";

function Alert() {
    const alert = useAlert();

    if (!alert.visible) return null;
    return (
        <>
            <div className="alert alert-danger pt-3" onClick={alert.hide}>
                {alert.text}
            </div>
        </>
    );
}

export default Alert;
