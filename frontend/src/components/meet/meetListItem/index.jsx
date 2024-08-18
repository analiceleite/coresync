import React, { useContext } from 'react';
import * as S from './styles';
import { IoChevronDownOutline } from "react-icons/io5";
import { PopupContext } from '../../../contexts/popupContext';

const MeetListItem = ({idPopup}) => {
    const { togglePopup } = useContext(PopupContext);

    return (
        <S.Container>
            <S.Header>
                <S.DateView>
                    <p><b>08</b></p>
                    <p>mai</p>
                </S.DateView>
            </S.Header>
            <S.Content>
                <h3>Alinhamento do conteúdo</h3>
                <p>João Pinott Leite</p>
                <p>00AM - 00PM</p>
                <S.SeeMore onClick={() => togglePopup(idPopup)}>
                    Veja mais
                    <IoChevronDownOutline/>
                </S.SeeMore>
            </S.Content>
        </S.Container>
    );
};

export default MeetListItem;