import React, { useContext } from 'react';
import * as S from './styles';
import { PopupContext } from '../../../contexts/popupContext';
import { IoClose } from "react-icons/io5";

const PopupContainer = ({children, idPopup}) => {
  const { togglePopup } = useContext(PopupContext);

  const handlePopupClick = (e) => {
    e.stopPropagation();
  };

  return (
    <S.Background onClick={() => togglePopup(idPopup)} >
        <S.PopupContainer onClick={handlePopupClick} >
            <IoClose onClick={() => togglePopup(idPopup)}/>
            {children}
        </S.PopupContainer>
    </S.Background>
  );
};

export default PopupContainer;