import React, { useState, useEffect, useRef } from "react";

function HookUseRef() {
    const [value, setValue] = useState(0);
    const renderCount = useRef(1);
    const inputRef = useRef(null);
    const prevValue = useRef("");

    useEffect(() => {
        renderCount.current++;
    });

    useEffect(() => {
        prevValue.current = value;
    }, [value]);

    const focus = () => inputRef.current.focus();
    return (
        <>
            <h6>useRef</h6>
            <hr />

            <br />
            <h1 className="text-center">Кол-во рендеров: {renderCount.current}</h1>
            <br />
            <h4 className="text-center">Строка:{inputRef.current ? inputRef.current.value : ""}</h4>
            <h4 className="text-center inpForRef">Длина строки: {value}</h4>
            <h5 className="text-center inpForRef">Прошлое состояние: {prevValue.current}</h5>

            <input ref={inputRef} className="inpForRef" type="text" onChange={(e) => setValue(e.target.value.length)} />
            <button className="btn btn-success el" onClick={focus}>
                Фокус
            </button>
        </>
    );
}

export default HookUseRef;
