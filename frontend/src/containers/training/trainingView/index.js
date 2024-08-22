import React from 'react';
import * as S from './styles';
import './video.css';
import Status from '../../../components/training/trainingStatus';
import PolkaDots from '../../../components/global/dots';

const TrainingView = ({selectedTraining}) => {
  return (
    <S.Container>
      <S.Header>
        <div>
          <h2>{selectedTraining && selectedTraining.title}</h2>
          <p>{selectedTraining && selectedTraining.description}</p>
        </div>
        <div>
        <Status/>
        </div>
      </S.Header>
      <S.Content>
        {
          selectedTraining &&
          <div dangerouslySetInnerHTML={{ __html: selectedTraining.content }} />
        }
      </S.Content>
      <S.PolkaDotsContainer>
        <PolkaDots isSmall />  
      </S.PolkaDotsContainer>
    </S.Container>
  );
};

export default TrainingView;