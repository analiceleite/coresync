import './App.css';
import Login from './pages/login'
import Training from './pages/training';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/training" element={<Training/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
