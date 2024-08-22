import { createContext, useState } from 'react';

const TrainingContext = createContext();

const TrainingProvider = ({ children }) => {
  const [selectedTraining, setSelectedTraining] = useState();

  return (
    <TrainingContext.Provider value={{ selectedTraining, setSelectedTraining }}>
      {children}
    </TrainingContext.Provider>
  );
};

export { TrainingProvider, TrainingContext };