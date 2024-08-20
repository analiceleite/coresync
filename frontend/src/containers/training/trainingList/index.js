import React, { useState } from 'react';
import {
  NavbarTraining,
  Underline,
  NavbarTrainingItem,
  ListTraining,
} from './styles';
import TrainingListItem from '../../../components/training/trainingListItem';

const TrainingList = () => {
  const [underlineMove, setUnderlineMove] = useState("translateX(calc(100% / 4 * 0))");
  const [underlineSize, setUnderlineSize] = useState("48px");

  return (
    <>
      <NavbarTraining>
        <ul>
          <NavbarTrainingItem 
            onClick={() => {
              setUnderlineMove("translateX(calc(100% / 4 * 0))");
              setUnderlineSize("48px");
            }}
          >
            Ativos
          </NavbarTrainingItem>
          <NavbarTrainingItem 
            onClick={() => {
              setUnderlineMove("translateX(calc(100% / 4 * 4.4))");
              setUnderlineSize("82px");
            }}
          >
            Realizados
          </NavbarTrainingItem>
          <Underline move={underlineMove} size={underlineSize} scenario="default"></Underline> 
        </ul>
<<<<<<< HEAD
      </NavbarTraining> 
      <ListTraining> 
        <TrainingListItem bgColor={'#72C8F3'} active="true" />
        <TrainingListItem bgColor={'#FFBA08'} active="true" />
=======
      </NavbarTraining>
      <ListTraining>
        <TrainingListItem bgColor={'#72C8F3'} active />
        <TrainingListItem bgColor={'#FFBA08'} />
>>>>>>> 0782ce847ba6573b81e9b668ed6319cd63d78df7
        <TrainingListItem bgColor={'#32589B'} />
        <TrainingListItem bgColor={'#72C8F3'} />
        <TrainingListItem bgColor={'#FFBA08'} />
        <TrainingListItem bgColor={'#FFBA08'} />
      </ListTraining>
    </>
  );
};

export default TrainingList;