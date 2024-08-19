import React from 'react';
import { 
    ContainerSelectIcon, PositionSelectIcon
  } from './styles.js'
import { IoCameraOutline } from "react-icons/io5";

const SelectIcon = () => {
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
            />
        </PositionSelectIcon>
    );
};

export default SelectIcon;