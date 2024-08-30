import React, { useContext } from 'react';
import * as S from './styles';
import { DateView } from '../../../components/meet/meetListItem/styles';
import PopupContainer from '../../../containers/meet/popupContainer';
import { PopupContext } from '../../../contexts/popupContext';
import { IoPersonCircleSharp } from "react-icons/io5";

const PopupMeet = ({id}) => {
    const { popups, data } = useContext(PopupContext);
    return (
        <>
            { popups[id] &&
                <PopupContainer idPopup={id} >
                    <S.Header>
                        <DateView big>
                            <p><b>{data && data.monthNumber}</b></p>
                            <p>{data && data.monthText}</p>
                        </DateView>
                    </S.Header>
                    <S.Content>
                        <S.TitleContainer>
                            <div>
                                <h3>
                                    {data && data.title}
                                </h3>
                                <p>
                                    <b>Organizador(a)</b>: {data.organizer}
                                </p>
                            </div>
                        </S.TitleContainer>
                        <S.DescriptionContainer>
                            <p>
                                {data && data.description}
                            </p>
                        </S.DescriptionContainer>
                        <S.ParticipantsContainer>
                            <h4>
                                <b>Participantes</b> 
                            </h4>
                            <div>
                                <IoPersonCircleSharp title="pessoa1@gmail.com"/>
                                <IoPersonCircleSharp title="pessoa2@gmail.com"/>
                                <IoPersonCircleSharp title="pessoa3@gmail.com"/>
                                <IoPersonCircleSharp title="pessoa4@gmail.com"/>
                                <IoPersonCircleSharp title="pessoa5@gmail.com"/>
                            </div>
                        </S.ParticipantsContainer>
                    </S.Content>
                </PopupContainer>
            }    
        </>    
    );
};

export default PopupMeet;
