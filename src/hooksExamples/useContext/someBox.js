import React from "react";
import { useAlert } from "./alert/alertContext";

function SomeBox() {
    const { toggle } = useAlert();
    console.log("toogle", toggle);
    return (
        <>
            <button className="btn btn-info el" onClick={toggle}>
                Показать alert
            </button>
        </>
    );
}

export default SomeBox;
