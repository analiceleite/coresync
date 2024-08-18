import React, { useContext } from 'react';
import * as S from './styles';
import { DateView } from '../../../components/meet/meetListItem/styles';
import PopupContainer from '../../../containers/meet/popupContainer';
import { PopupContext } from '../../../contexts/popupContext';
import { IoPersonCircleSharp } from "react-icons/io5";

const PopupMeet = ({id}) => {
    const { popups } = useContext(PopupContext);

    return (
        <>
            { popups[id] &&
                <PopupContainer idPopup="1" >
                    <S.Header>
                        <DateView big>
                            <p><b>08</b></p>
                            <p>maio</p>
                        </DateView>
                    </S.Header>
                    <S.Content>
                        <S.TitleContainer>
                            <div>
                                <h3>
                                    Alinhamentos do conteúdo
                                </h3>
                                <p>
                                    <b>Organizador(a)</b>: João Pinott Leite
                                </p>
                            </div>
                        </S.TitleContainer>
                        <S.DescriptionContainer>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                Ad accusantium itaque vel cupiditate dicta, illo corporis perferendis illum eaque ea doloremque 
                                facilis animi nobis, asperiores consequatur vero eius numquam nulla.
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
