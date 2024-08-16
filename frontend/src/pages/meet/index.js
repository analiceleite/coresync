import React from 'react';
import Title from '../../components/global/title';
import BaseContainer from '../../containers/global/container';
import { TitleContainer, Container } from './styles.js';
import MeetForm from '../../containers/meet/meetForm/index.js';

const Meet = () => {
  return (
    <BaseContainer>
      <Container>
        <div>
          <TitleContainer>
            <Title text="Agente aqui sua"/>
            <Title text="reunião !" color="dark-blue"/>
          </TitleContainer>
          <MeetForm/>  
        </div>
        <div>
          {/* <MeetForm/>   */}
        </div>
      </Container>
    </BaseContainer>
  );
};

export default Meet;