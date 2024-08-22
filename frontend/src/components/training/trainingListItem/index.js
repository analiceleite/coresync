import React from 'react';
import * as S from './styles.js';
import { IoCheckmark } from 'react-icons/io5';

const TrainingListItem = ({bgColor, active, title, description, content, onClick}) => {
  return (
    <S.Container onClick={() => {onClick()}}>
        <S.ColorContainer color={bgColor} />
        <S.TrainingContent>
            <h3>{title}</h3>
            <p>{description}</p>
        </S.TrainingContent>
        { active && 
          <S.Check>
            <IoCheckmark/>
          </S.Check>
        }
    </S.Container>
  );
};

export default TrainingListItem;