import React from 'react';
import * as S from './styles.js';
import { IoCheckmark } from 'react-icons/io5';

const TrainingListItem = ({bgColor, active}) => {
  return (
    <S.Container>
        <S.ColorContainer color={bgColor} />
        <S.TrainingContent>
            <h3>UI/UX</h3>
            <p>Esse treinamento envolve a área de design e experiência de usuário.</p>
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