import Login from './pages/login';
import Training from './pages/training';
import Profile from './pages/profile';
import Meet from './pages/meet';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PopupProvider } from './contexts/popupContext';

function App() {
  return (
    <div className='App'>
      <PopupProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/training" element={<Training />} />
            <Route path="/meeting" element={<Meet />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Router>
      </PopupProvider>
    </div>
  );
}

export default App;
