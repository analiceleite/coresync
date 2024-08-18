import React from 'react';
import * as S from './styles';
import MeetListItem from '../../../components/meet/meetListItem';
import PolkaDots from '../../../components/global/dots';

const MeetList = () => {
  return (
    <>
        <S.Header>
            Reuniões agendadas<PolkaDots isSmall />
        </S.Header> 
        <S.List> 
            <div>
                <MeetListItem idPopup="1"/>
                <MeetListItem idPopup="1"/>
                <MeetListItem idPopup="1"/>
            </div>            
        </S.List>
    </>
  );
};

export default MeetList;