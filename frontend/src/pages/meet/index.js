import React, { useState } from 'react';
import Title from '../../components/global/title';
import BaseContainer from '../../containers/global/baseContainer';
import { TitleContainer, Container, MeetListContainer } from './styles.js';
import MeetForm from '../../containers/meet/meetForm/index.js';
import MeetList from '../../containers/meet/meetList/index.jsx';
import PopupMeet from '../../components/meet/popupMeet/index.jsx';

const Meet = () => {
  

  return (
  <>
    <PopupMeet id={"1"} />
    <BaseContainer>
      <Container>
        <div>
          <TitleContainer>
            <Title text="Agende aqui sua"/>
            <Title text="reunião!" color="dark-blue"/>
          </TitleContainer>
          <MeetListContainer>
            <MeetList/>
          </MeetListContainer>
        </div>
        <div>
          <MeetForm/>  
        </div>
      </Container>
    </BaseContainer>
  </>
  );
};

export default Meet;