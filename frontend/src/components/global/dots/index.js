import React from 'react';
import './styles.css';

const PolkaDots = ({ isSmall }) => {
    return (
        <div className={`container-dots ${isSmall ? 'container-dots--small' : ''}`}>
            <div className={`blue-dots ${isSmall ? 'dots--small' : ''}`}></div>
            <div className={`light-blue-dots ${isSmall ? 'dots--small' : ''}`}></div>
            <div className={`yellow-dots ${isSmall ? 'dots--small' : ''}`}></div>
        </div>
    );
};

export default PolkaDots;
    