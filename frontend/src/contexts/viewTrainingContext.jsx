import React, { createContext, useState, useEffect } from 'react';

export const TrainingContext = createContext();

export const TrainingProvider = ({ children }) => {
  const [selectedTraining, setSelectedTraining] = useState(() => {
    // Usando uma função para obter o valor inicial
    const storedTraining = localStorage.getItem('selectedTraining');
    return storedTraining && storedTraining !== 'undefined'
      ? JSON.parse(storedTraining)
      : null;
  });
  
  useEffect(() => {
    if (selectedTraining) {
      localStorage.setItem('selectedTraining', JSON.stringify(selectedTraining));
    }
  }, [selectedTraining]);

  return (
    <TrainingContext.Provider value={{ selectedTraining, setSelectedTraining }}>
      {children}
    </TrainingContext.Provider>
  );
};
