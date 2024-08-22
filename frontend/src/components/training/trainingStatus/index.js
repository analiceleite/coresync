import React, { useState, useEffect, useRef } from 'react';
import * as S from './styles';
import { IoChevronDownOutline } from "react-icons/io5";
import { updateStatusTraining } from '../../../api/api';

const Status = ({id, status}) => {
  console.log(`IDER: ${id}`)
  const [activeSelectStatus, setActiveSelectStatus] = useState(false);
  const [currentOption, setCurrentOption] = useState(status);
  const selectRef = useRef(null);
  const optionRef = useRef(null);

  const toggleSelect = () => { 
    setActiveSelectStatus(!activeSelectStatus);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        selectRef.current && !selectRef.current.contains(event.target) &&
        optionRef.current && !optionRef.current.contains(event.target)  
      ) {
        setActiveSelectStatus(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  
  const changeTrainingStatus = async (newStatus) => {
    try {
      const trainingList = await updateStatusTraining(id, newStatus);
      
    } catch (error) {
      console.error('Erro ao obter os treinamentos:', error);
    }
  };

  return (
    <S.Container>
      <S.StatusSelector>
          <div>{ status }</div>
          <div ref={optionRef} onClick={toggleSelect} >
              <span>Update</span>
              <IoChevronDownOutline/>
          </div>
      </S.StatusSelector>
      {
        activeSelectStatus && 
        <S.StatusOption ref={selectRef} >
          <li onClick={() => {changeTrainingStatus("pending")}}>Pending</li>
          <li onClick={() => {changeTrainingStatus("in progress")}}>In progress</li>
          <li onClick={() => {changeTrainingStatus("complete")}}>Complete</li>
        </S.StatusOption>
      }
    </S.Container>
  );
};

export default Status;