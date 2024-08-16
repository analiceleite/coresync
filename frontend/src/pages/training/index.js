import React from 'react';
import Title from '../../components/global/title';
import BaseContainer from '../../containers/global/container';
import TrainingList from '../../containers/trainings/trainingList';
import { TitleContainer, Container } from './styles.js';

const Training = () => {
  return (
    <BaseContainer>
      <Container>
        <div>
          <TitleContainer>
            <Title text="Bem-vindo aos"/>
            <Title text="Treinamentos!" color="dark-blue"/>
          </TitleContainer>
          <TrainingList/>
        </div>
        <div></div>
      </Container>
    </BaseContainer>
  );
};

export default Training;