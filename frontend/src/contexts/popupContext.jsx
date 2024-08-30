import React, { createContext, useState } from 'react';

export const PopupContext = createContext();

export const PopupProvider = ({ children }) => {
    const [popups, setPopups] = useState({});
    const [data, setData] = useState({});
    const [idPopup, setIdPopup] = useState("1");

    const togglePopup = (id, data) => {
        setPopups(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
        setData(data)
        setIdPopup(id)
    };

    return (
        <PopupContext.Provider value={{ popups, togglePopup, data, idPopup }}>
            {children}
        </PopupContext.Provider>
    );
};