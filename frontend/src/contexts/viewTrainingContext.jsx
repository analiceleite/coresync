import React, { createContext, useState, useEffect } from 'react';

export const TrainingContext = createContext();

export const TrainingProvider = ({ children }) => {
  const [selectedTraining, setSelectedTraining] = useState(null);

  useEffect(() => {
    const storedTraining = localStorage.getItem('selectedTraining');
    if (storedTraining && storedTraining !== 'undefined') {
      setSelectedTraining(JSON.parse(storedTraining));
    }
  }, []);

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
