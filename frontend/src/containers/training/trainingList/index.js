import React, { useState, useEffect, useContext } from 'react';
import { NavbarTraining, Underline, NavbarTrainingItem, ListTraining } from './styles';
import TrainingListItem from '../../../components/training/trainingListItem';
import { getTrainings, getTrainingStatus } from '../../../api/api';
import { TrainingContext } from '../../../contexts/viewTrainingContext';

const TrainingList = () => {
  const [underlineMove, setUnderlineMove] = useState("translateX(calc(100% / 4 * 0))");
  const [underlineSize, setUnderlineSize] = useState("48px");
  const [trainingList, setTrainingList] = useState([]);
  const { selectedTraining, setSelectedTraining } = useContext(TrainingContext);

  useEffect(() => {
    const fetchTrainingList = async () => {
      try {
        // const trainingList = await getTrainings();
        const trainingList = await getTrainingStatus();
      
        setTrainingList(trainingList);
        if (!selectedTraining && trainingList.length > 0) {
          const training = trainingList[0]
          // const training = {
          //   'title': trainingList[0]["training"].title, 
          //   'description': trainingList[0]["training"].description, 
          //   'content': trainingList[0]["training"].content,
          //   'status':trainingList[0].status,
          //   'id':trainingList[0].id
          // };
          setSelectedTraining(training);
        }
      } catch (error) {
        console.error('Erro ao obter os treinamentos:', error);
      }
    };

    fetchTrainingList();
  }, []);

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
                title={value["training"].title}
                description={value["training"].description}
                content={value["training"].content}
                onClick={() => {
                  setSelectedTraining(value);
                }}
              />
            ))
        }
      </ListTraining>
    </>
  );
};

export default TrainingList;
