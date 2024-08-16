import React from 'react';
import { 
    ContainerSelectIcon, PositionSelectIcon
  } from './styles.js'
import { IoCameraOutline } from "react-icons/io5";

const SelectIcon = () => {
    return(
        <PositionSelectIcon>
        <ContainerSelectIcon>
            <IoCameraOutline />
        </ContainerSelectIcon>
        </PositionSelectIcon>
    );
};

export default SelectIcon;