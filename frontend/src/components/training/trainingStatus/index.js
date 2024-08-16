import React, { useState, useEffect, useRef } from 'react';
import * as S from './styles';
import { IoChevronDownOutline } from "react-icons/io5";

const Status = () => {
  const [activeSelectStatus, setActiveSelectStatus] = useState(false);
  const [currentOption, setCurrentOption] = useState('Pending');
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

  return (
    <S.Container>
      <S.StatusSelector>
          <div>{ currentOption }</div>
          <div ref={optionRef} onClick={toggleSelect} >
              <span>Update</span>
              <IoChevronDownOutline/>
          </div>
      </S.StatusSelector>
      {
        activeSelectStatus && 
        <S.StatusOption ref={selectRef} >
          <li onClick={() => {setCurrentOption('Pending')}}>Pending</li>
          <li onClick={() => {setCurrentOption('In progress')}}>In progress</li>
          <li onClick={() => {setCurrentOption('Complete')}}>Complete</li>
        </S.StatusOption>
      }
    </S.Container>
  );
};

export default Status;