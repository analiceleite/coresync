import React from 'react';
import './styles.css';

const SubTitle = ({text}) => {
    return <>
        <h2 className={`subTitle`} >
            {text}
        </h2>
    </>
};

export default SubTitle;