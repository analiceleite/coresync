import React, { useEffect, useState, useContext } from 'react';
import * as S from './styles';
import './video.css';
import Status from '../../../components/training/trainingStatus';
import PolkaDots from '../../../components/global/dots';
import { TrainingContext } from '../../../contexts/viewTrainingContext';

const TrainingView = () => {
  const { selectedTraining } = useContext(TrainingContext);
  const [training, setTraining] = useState(selectedTraining);

  useEffect(() => {
    setTraining(selectedTraining);
  }, [selectedTraining]);

  return (
    <S.Container>
      <S.Header>
        <div>
          <h2>{training && training.title}</h2>
          <p>{training && training.description}</p>
        </div>
        <div>
          <Status/>
        </div>
      </S.Header>
      <S.Content>
        {training && <div dangerouslySetInnerHTML={{ __html: training.content }} />}
      </S.Content>
      <S.PolkaDotsContainer>
        <PolkaDots isSmall />  
      </S.PolkaDotsContainer>
    </S.Container>
  );
};

export default TrainingView;
