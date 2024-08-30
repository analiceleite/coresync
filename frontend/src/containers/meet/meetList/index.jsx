import React, { useEffect, useState } from 'react';
import * as S from './styles';
import MeetListItem from '../../../components/meet/meetListItem';
import PolkaDots from '../../../components/global/dots';
import { getMeet } from '../../../api/meet_api';

const MeetList = ({renderList}) => {
  const [ meetListInfo, setMeetListInfo ] = useState([]);
  
  const fetchMeetList = async () => {
    try {
      const meetList = await getMeet();
      console.log(`Reuniões retornadas:`, meetList);
      setMeetListInfo(meetList);

    } catch (error) {
      console.error('Erro ao carregar as reuniões:', error);
    }
  };

  useEffect(() => {
    fetchMeetList();
  }, []);

  useEffect(() => {
    fetchMeetList();
  }, [renderList]);

  return (
    <>
        <S.Header>
            Reuniões agendadas<PolkaDots isSmall />
        </S.Header> 
        <S.List> 
            <div>  
              { 
                meetListInfo && 
                  meetListInfo.map((value, map) => (
                    <MeetListItem 
                      key={value.id}
                      idPopup={value.id} 
                      participants={value.participantes} 
                      title={value.titulo}
                      date={value.data}
                      time={value.hora}
                      duration={value.duracao}
                      description={value.descricao}
                      organizer={value.user.username}
                    />
                  ))
              }
            </div>             
        </S.List>
    </>
  );
};

export default MeetList;