import React, { useState, useEffect, useContext } from 'react';
import {
  NavbarTraining,
  Underline,
  NavbarTrainingItem,
  ListTraining,
} from './styles';
import TrainingListItem from '../../../components/training/trainingListItem';
import { getTrainings } from '../../../api/api';
import { TrainingContext } from '../../../contexts/viewTrainingContext';

const TrainingList = () => {
  const [underlineMove, setUnderlineMove] = useState("translateX(calc(100% / 4 * 0))");
  const [underlineSize, setUnderlineSize] = useState("48px");
  const [trainingList, setTrainingList] = useState();
  const { selectedTraining, setSelectedTraining  } = useContext(TrainingContext);

  useEffect(() => {
    console.log("BBBBBBBBBBBBBBBBBB")
    console.log(localStorage.getItem('selectedTraining'))
    console.log("BBBBBBBBBBBBBBBBBB")
    
    if(localStorage.getItem('selectedTraining') && localStorage.getItem('selectedTraining') !== 'undefined'){
      localStorage.setItem('selectedTraining', JSON.stringify(selectedTraining)); 
    }else{ 
      if(trainingList && trainingList !== "undefined"){
        const training = {
          'title': trainingList[0].title, 
          'description':trainingList[0].description, 
          'content':trainingList[0].content
        }
        localStorage.setItem('selectedTraining', JSON.stringify(training));
      }
    }
  }, [selectedTraining, trainingList])

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
                  setSelectedTraining({
                    'title': value.title, 
                    'description':value.description, 
                    'content':value.content}
                  )
                }}
              />
            ))
        }
      </ListTraining>
    </>
  );
};

export default TrainingList;