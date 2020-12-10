import React, { useState, useMemo, useEffect } from "react";

function complexCompute(num) {
    let i = 0;
    while (i < 599999999) i++;
    return num * 42;
}

function HookUseMemo() {
    const [num, setNum] = useState(1);
    const [colored, setColored] = useState(false);

    const compNum = useMemo(() => {
        return complexCompute(num);
    }, [num]);

    const styles = useMemo(() => {
        return {
            color: colored ? "darkred" : "black",
        };
    }, [colored]);

    useEffect(() => {
        console.log(styles);
    }, [styles]);

    function increment() {
        setNum((preCount) => preCount + 1);
    }

    function decrement() {
        setNum((preCount) => preCount - 1);
    }

    return (
        <>
            <h6>useMemo</h6>
            <hr />

            <button onClick={increment} className="btn btn-success el">
                Increment
            </button>
            <button onClick={decrement} className="btn btn-danger el">
                Decrement
            </button>
            <button onClick={() => setColored((prev) => !prev)} className="btn btn-info el">
                Colored
            </button>
            <h1 className="text-center" style={styles}>
                Счетчик: {num}
            </h1>
        </>
    );
}

export default HookUseMemo;
