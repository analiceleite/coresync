import React, { useState, useEffect, useContext } from 'react';
import { NavbarTraining, Underline, NavbarTrainingItem, ListTraining } from './styles';
import TrainingListItem from '../../../components/training/trainingListItem';
import { getTrainings, getTrainingStatus } from '../../../api/api';
import { TrainingContext } from '../../../contexts/viewTrainingContext';

const TrainingList = () => {
  const [underlineMove, setUnderlineMove] = useState("translateX(calc(100% / 4 * 0.1))");
  const [underlineSize, setUnderlineSize] = useState("46px");
  const [trainingList, setTrainingList] = useState([]);
  const { selectedTraining, setSelectedTraining } = useContext(TrainingContext);

  const fetchTrainingList = async (status) => {
    try {
      const trainingList = await getTrainingStatus(status);
    
      setTrainingList(trainingList);
      if (!selectedTraining && trainingList.length > 0) {
        const training = trainingList[0]
        setSelectedTraining(training);
      }
    } catch (error) {
      console.error('Erro ao obter os treinamentos:', error);
    }
  };

  useEffect(() => {
    fetchTrainingList("");
  }, []);

  return (
    <>
      <NavbarTraining>
        <ul>
          <NavbarTrainingItem 
            onClick={() => {
              setUnderlineMove("translateX(calc(100% / 4 * 0.1))");
              setUnderlineSize("46px");
              fetchTrainingList("");
            }}
          >
            Todos
          </NavbarTrainingItem>
          <NavbarTrainingItem 
            onClick={() => {
              setUnderlineMove("translateX(calc(100% / 4 * 4.4))");
              setUnderlineSize("80px");
              fetchTrainingList("pending");
            }}
          >
            Pendentes
          </NavbarTrainingItem>
          <NavbarTrainingItem 
            onClick={() => {
              setUnderlineMove("translateX(calc(100% / 4 * 9.8))");
              setUnderlineSize("86px");
              fetchTrainingList("in progress");
            }}
          >
            andamento
          </NavbarTrainingItem>
          <NavbarTrainingItem 
            onClick={() => {
              setUnderlineMove("translateX(calc(100% / 4 * 16.6))");
              setUnderlineSize("82px");
              fetchTrainingList("complete");
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
                active={value.status === "complete" && "true"} 
                title={value["training"].title}
                description={value["training"].description}
                content={value["training"].content}
                onClick={() => {
                  setSelectedTraining(value);
                }}
              />
            )
          )
        }
      </ListTraining>
    </>
  );
};

export default TrainingList;
