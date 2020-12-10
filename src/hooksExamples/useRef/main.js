import React, { useState, useEffect, useRef } from "react";

function Hook_useRef() {
    return (
        <>
            <h6>useState</h6>
            <button onClick={increment} className="btn btn-success el">
                Increment
            </button>

            <h1 className="text-center">Счетчик: {count}</h1>

            <pre>{JSON.stringify(title, null, 2)}</pre>
        </>
    );
}

export default Hook_useRef;
