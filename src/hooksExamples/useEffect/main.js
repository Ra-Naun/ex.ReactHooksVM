import React, { useState, useEffect } from "react";

function HookUseEffect() {
    const [type, setType] = useState("users");
    const [data, setData] = useState([]);
    const [pos, setPos] = useState({ x: 0, y: 0 });

    console.log("component render");
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}/1`)
            .then((response) => response.json())
            .then((json) => setData(json));
        console.log("render useEffect");
    }, [type]);

    useEffect(() => {
        let handleNextSetPos = true;
        const time = 0.1;

        function setHandleNextKeypressTrue() {
            handleNextSetPos = true;
        }
        function setHandleNextKeypressTrueAfterDelay(delay) {
            setTimeout(setHandleNextKeypressTrue, delay);
        }

        const mouseMoveHandler = (e) => {
            if (handleNextSetPos) {
                setPos({
                    x: e.clientX,
                    y: e.clientY,
                });
                handleNextSetPos = false;
                setHandleNextKeypressTrueAfterDelay(time * 1000);
            }
        };
        window.addEventListener("mousemove", mouseMoveHandler);
        return () => {
            window.removeEventListener("mousemove", mouseMoveHandler);
            console.log("componentDidUnmount");
        };
    }, []);

    useEffect(() => {
        console.log("componentDidMount");
        return () => console.log("componentDidUnmount");
    }, []);

    return (
        <>
            <h6>useEffect</h6>
            <hr />

            <pre>{JSON.stringify(pos, null, 2)}</pre>
            <h1>Ресурс: {type}</h1>
            <button className="btn btn-info el" onClick={() => setType("users")}>
                Пользователи
            </button>

            <button className="btn btn-info el" onClick={() => setType("todos")}>
                Todo
            </button>

            <button className="btn btn-info el" onClick={() => setType("posts")}>
                Посты
            </button>

            <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
    );
}

export default HookUseEffect;
