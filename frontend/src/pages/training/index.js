import React, { useState } from 'react';
import Title from '../../components/global/title';
import BaseContainer from '../../containers/global/baseContainer';
import TrainingList from '../../containers/training/trainingList';
import { TitleContainer, TrainingListContainer } from './styles.js';
import TrainingView from '../../containers/training/trainingView/index.js';
import { TrainingProvider } from '../../contexts/viewTrainingContext.jsx';

const Training = () => {

  return (
    <TrainingProvider>
      <BaseContainer>
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
      </BaseContainer>
    </TrainingProvider>
  );
};

export default Training;