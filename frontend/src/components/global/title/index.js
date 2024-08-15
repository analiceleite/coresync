import React from 'react';
import './styles.css';

const Title = ({text, color}) => {
    return <>
        <h2 className={`title ${color}`} >
            {text}
        </h2>
    </>
};

export default Title;