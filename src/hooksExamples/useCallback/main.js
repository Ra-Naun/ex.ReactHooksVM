import React, { useState, useMemo, useEffect, useCallback } from "react";
import ItemsList from "./itemsList";

function HookUseCallback() {
    const [num, setNum] = useState(5);
    const [colored, setColored] = useState(false);

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

    const generateItemsFromAPI = useCallback(() => {
        return new Array(num > 0 ? num : 0).fill("").map((_, i) => `Элемент: ${i + 1}`);
    }, [num]);

    return (
        <>
            <h6>useCallback</h6>
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
            <hr />
            <ItemsList getItems={generateItemsFromAPI} />
        </>
    );
}

export default HookUseCallback;
