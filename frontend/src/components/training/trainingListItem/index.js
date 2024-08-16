import React from 'react';
import { 
  Container, 
  ColorContainer, 
  TrainingContent
} from './styles.js'

const TrainingListItem = ({bgColor}) => {
  return (
    <Container>
        <ColorContainer color={bgColor} />
        <TrainingContent>
            <h3>UI/UX</h3>
            <p>Esse treinamento envolve a área de design e experiência de usuário.</p>
        </TrainingContent>
    </Container>
  );
};

export default TrainingListItem;