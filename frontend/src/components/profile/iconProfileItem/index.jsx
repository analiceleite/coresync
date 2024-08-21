import React, {useEffect, useState} from 'react';
import { 
    IconContainer
  } from './styles.js'

import { IoPersonOutline } from "react-icons/io5";
import { getProfileImage } from '../../../api/api.js';

const IconProfileItem = () => {
    const [urlImage, setUrlImage] = useState() 
    useEffect(() => {
        setUrlImage(getProfileImage());
    }, [])
    return (
            <IconContainer>
                <IoPersonOutline/>
                <img src={urlImage} alt="IMAGEM" />
            </IconContainer>
    );
};

export default IconProfileItem;