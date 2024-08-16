import React from 'react';
import './styles.css';

const Title = ({text, color}) => {
    return <>
        <h1 className={`title ${color}`} >
            {text}
        </h1>
    </>
};

export default Title;