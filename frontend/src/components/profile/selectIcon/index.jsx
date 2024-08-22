import React, {useState} from 'react';
import { 
    ContainerSelectIcon, PositionSelectIcon
  } from './styles.js'
import { IoCameraOutline } from "react-icons/io5";
import { uploadImage } from '../../../api/api.js';



const SelectIcon = ({handleImageFile}) => {
    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        await uploadImage(file);
        handleImageFile(file);
    };

    return(
        <PositionSelectIcon>
            <label htmlFor="selectIcon">
            <ContainerSelectIcon>
                <IoCameraOutline/>
            </ContainerSelectIcon>
            </label>
            <input 
                type="file" 
                name="selectIcon" 
                id="selectIcon"
                onChange={handleFileChange}
            />
        </PositionSelectIcon>
    );
};

export default SelectIcon;