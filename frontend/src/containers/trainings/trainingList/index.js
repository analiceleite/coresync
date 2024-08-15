import React from 'react';
import './styles.css';

const trainingList = () => {
  return (
    <div>
      <nav className='navbarTraining'>
        <ul>
          <li className='navbarTraining-item active'>
            Ativos
          </li>
          <li className='navbarTraining-item'>
            Realizados
          </li>
          <div className='underline'></div> 
        </ul>
      </nav>
      <div>
      </div>
    </div>
  );
};

export default trainingList;