import React, { useState } from "react";

function computeInitialState() {
    console.log("Some calculations...");
    return Math.trunc(Math.random() * 20);
}

function HookUseState() {
    const [count, setCount] = useState(() => computeInitialState());

    function increment() {
        setCount((preCount) => preCount + 1);
    }

    function decrement() {
        setCount((preCount) => preCount - 1);
    }

    const [title, setTitle] = useState(() => {
        return { title: "Счётчик", date: Date.now() };
    });

    return (
        <>
            <h6>useState</h6>
            <hr />

            <button onClick={increment} className="btn btn-success el">
                Increment
            </button>
            <button onClick={decrement} className="btn btn-danger el">
                Decrement
            </button>
            <h1 className="text-center">Счетчик: {count}</h1>
            <br />
            <button onClick={() => setTitle({ ...title, date: Date.now() })} className="btn btn-info el">
                New time
            </button>
            <pre>{JSON.stringify(title, null, 2)}</pre>
        </>
    );
}

export default HookUseState;
