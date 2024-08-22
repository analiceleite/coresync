import React, { useState, useEffect } from 'react';
import {
  NavbarTraining,
  Underline,
  NavbarTrainingItem,
  ListTraining,
} from './styles';
import TrainingListItem from '../../../components/training/trainingListItem';
import { getTrainings } from '../../../api/api';

const TrainingList = ({selectTraining}) => {
  const [underlineMove, setUnderlineMove] = useState("translateX(calc(100% / 4 * 0))");
  const [underlineSize, setUnderlineSize] = useState("48px");
  const [trainingList, setTrainingList] = useState();

  const fetchTrainingList = async () => {
    try {
        const trainingList = await getTrainings();
        setTrainingList(trainingList);
    } catch (error) {
        console.error('Erro ao obter os treinamentos:', error);
    }
  };

  useEffect(() => {
    fetchTrainingList();
  }, [])

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
      </NavbarTraining> 
      <ListTraining> 
        { 
          trainingList &&
            trainingList.map((value, index) => (
              <TrainingListItem 
                key={index} 
                bgColor={'#72C8F3'} 
                active="true" 
                title={value.title}
                description={value.description}
                content={value.content}
                onClick={() => {
                  selectTraining({
                    'title': value.title, 
                    'description':value.description, 
                    'content':value.content}
                  )}}
              />
            ))
        }
      </ListTraining>
    </>
  );
};

export default TrainingList;