// src/App.jsx
import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';

import HomePage from './Pages/HomePage';
import KidsThinkingPage from './Pages/KidsThinkingPage';
import ChoiceResult1Page from './Pages/ChoiceResult1Page'; 
import ChoiceResult2Page from './Pages/ChoiceResult2Page';

function App() {
  const navigate = useNavigate();

  const handleGoToScenario = () => {
    navigate('/scenario');
  };

  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<HomePage onButtonClick={handleGoToScenario} />} />

        <Route path="/scenario" element={<KidsThinkingPage navigate={navigate} />} />
        <Route path="/choice-result1" element={<ChoiceResult1Page navigate={navigate} />} />
        <Route path="/choice-result2" element={<ChoiceResult2Page />} />
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App;