import React, { createContext, useState } from 'react';

export const PopupContext = createContext();

export const PopupProvider = ({ children }) => {
    const [popups, setPopups] = useState({});

    const togglePopup = (id) => {
        setPopups(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    return (
        <PopupContext.Provider value={{ popups, togglePopup }}>
            {children}
        </PopupContext.Provider>
    );
};