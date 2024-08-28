import React, { createContext, useState } from 'react';

export const PopupContext = createContext();

export const PopupProvider = ({ children }) => {
    const [popups, setPopups] = useState({});
    const [data, setData] = useState({});

    const togglePopup = (id, data) => {
        setPopups(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
        setData(data)
    };

    return (
        <PopupContext.Provider value={{ popups, togglePopup, data }}>
            {children}
        </PopupContext.Provider>
    );
};