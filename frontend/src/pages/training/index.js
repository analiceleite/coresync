import React from 'react';
import Title from '../../components/global/title';
import BaseContainer from '../../containers/global/container';
import TrainingList from '../../containers/training/trainingList';
import { TitleContainer, Container, TrainingListContainer } from './styles.js';
import TrainingView from '../../containers/training/trainingView/index.js';

const Training = () => {
  return (
    <BaseContainer>
      <Container>
        <div>
          <TitleContainer>
            <Title text="Acompanhe aqui seus"/>
            <Title text="treinamentos!" color="dark-blue"/>
          </TitleContainer>
          <TrainingListContainer>
            <TrainingList/>
          </TrainingListContainer>
        </div>
        <div>
          <TrainingView/>  
        </div>
      </Container>
    </BaseContainer>
  );
};

export default Training;