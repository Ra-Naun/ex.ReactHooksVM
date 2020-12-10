import React, { useState, useEffect } from "react";

function useLoger(value) {
    useEffect(() => {
        console.log("value changed", value);
    }, [value]);
}

function useInput(initialValue) {
    const [value, setValue] = useState(initialValue);
    const onChange = (e) => {
        setValue(e.target.value);
    };

    const clear = () => {
        setValue("");
    };

    return {
        bind: { value, onChange },
        value,
        clear,
    };
}

function CustomHook() {
    const input = useInput("");
    const inputLast = useInput("");

    //useLoger(input.value);удобно дебажить

    return (
        <>
            <h6>Custom hook</h6>
            <hr />
            <input className="el" type="text" {...input.bind} />
            <button
                className="btn btn-info el"
                onClick={() => {
                    input.clear();
                }}
            >
                Очистить
            </button>
            <input className="el" type="text" {...inputLast.bind} />
            <h2>
                {input.value} {inputLast.value}
            </h2>
        </>
    );
}

export default CustomHook;
