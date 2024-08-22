import React, {useEffect, useState} from 'react';
import { 
    IconContainer
  } from './styles.js'

import { IoPersonOutline } from "react-icons/io5";
import { getProfileImage } from '../../../api/api.js';

const IconProfileItem = ({imageChange}) => {
    const [urlImage, setUrlImage] = useState() 
    const fetchImage = async () => {
        try {
            const imageUrl = await getProfileImage();
            setUrlImage(imageUrl);
        } catch (error) {
            console.error('Erro ao obter a imagem:', error);
        }
    };
    
    useEffect(() => {
        fetchImage();
    }, [imageChange])

    return (
            <IconContainer>
                {urlImage && 
                    <img 
                        src={urlImage} 
                        alt="IMAGEM"
                    />
                }
            </IconContainer>
    );
};

export default IconProfileItem;