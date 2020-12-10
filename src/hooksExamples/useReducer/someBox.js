import React from "react";
import { useAlert } from "./alert/alertContext";

function SomeBox() {
    const { show } = useAlert();
    console.log("toogle", show);
    return (
        <>
            <button className="btn btn-info el" onClick={() => show("Это текст из someBox.js!")}>
                Показать alert
            </button>
        </>
    );
}

export default SomeBox;
