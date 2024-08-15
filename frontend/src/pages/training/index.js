import React from 'react';
import './styles.css';
import Title from '../../components/global/title';
import Container from '../../containers/global/container';
import TrainingList from '../../containers/trainings/trainingList';

const Training = () => {
  return (
    <Container>
      <section className='training-container'>
        <div>
          <div>
            <Title text="Bem-vindo aos"/>
            <Title text="Treinamentos!" color="dark-blue"/>
          </div>
          <TrainingList/>
        </div>
        <div></div>
      </section>
    </Container>
  );
};

export default Training;