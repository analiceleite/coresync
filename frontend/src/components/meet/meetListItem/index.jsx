import React, { useContext, useEffect } from 'react';
import * as S from './styles';
import { IoChevronDownOutline } from "react-icons/io5";
import { PopupContext } from '../../../contexts/popupContext';

const MeetListItem = ({idPopup, participants, title, date, time, duration, description}) => {
    const { togglePopup } = useContext(PopupContext);
    
    const startTime = time.slice(0, 5);
    
    const month = () => {
        const month = date.split('-')[1];
        const monthNumber = parseInt(month);
        const monthsList = ['jan', 'fev', 'mar', 'apr', 
                            'mai', 'jun', 'jul', 'ago', 
                            'set', 'out', 'nov', 'dez']
        
        return [monthsList[monthNumber-1], month]
    }

    return (
        <S.Container>
            <S.Header>
                <S.DateView>
                    <p><b>{month()[1]}</b></p>
                    <p>{month()[0]}</p>
                </S.DateView>
            </S.Header>
            <S.Content>
                <h3>{title}</h3>
                <p>João Pinott Leite</p>
                <p>
                    Hour: {startTime} - {duration}
                </p>
                <S.SeeMore onClick={
                    () => togglePopup(
                        idPopup, {
                            'participants':participants,
                            'title':title,
                            'date':date,
                            'monthNumber':month()[1],
                            'monthText':month()[0],
                            'time':time,
                            'duration':duration,
                            'description':description
                        }
                    )}>
                    Veja mais
                    <IoChevronDownOutline/>
                </S.SeeMore>
            </S.Content>
        </S.Container>
    );
};

export default MeetListItem;