import React, { useState, useContext } from "react";

export const AlertContext = React.createContext();
//export const AlertToogleContext = React.createContext();

export const useAlert = () => {
    return useContext(AlertContext);
};

/*
export const useAlertToogle = () => {
    return useContext(AlertToogleContext);
};
*/

export const AlertProvider = ({ children }) => {
    const [alert, setAlert] = useState(false);
    const toogleAlert = () => setAlert((prev) => !prev);
    return (
        <AlertContext.Provider
            value={{
                visible: alert,
                toggle: toogleAlert,
            }}
        >
            {children}
        </AlertContext.Provider>
    );
};
