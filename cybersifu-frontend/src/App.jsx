import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';

import HomePage from './Pages/HomePage';
import KidsThinkingPage from './Pages/KidsThinkingPage';
import ChoiceResult1Page from './Pages/ChoiceResult1Page';
import ChoiceResult2Page from './Pages/ChoiceResult2Page';

import Scenario2Page from './Pages/Scenario2Page';  // import Scenario 2 page
import Scenario3Page from './Pages/Scenario3Page';  // import Scenario 3 page

function App() {
  const navigate = useNavigate();

  const goToScenario1 = () => {
    navigate('/scenario');
  };

  const goToScenario2 = () => {
    navigate('/scenario2');
  };

  const goToScenario3 = () => {
    navigate('/scenario3');
  };

  return (
      <div className="app-container">
        <Routes>
          <Route
              path="/"
              element={
                <HomePage
                    onScenario1Click={goToScenario1}
                    onScenario2Click={goToScenario2}
                    onScenario3Click={goToScenario3}
                />
              }
          />

          <Route path="/scenario" element={<KidsThinkingPage navigate={navigate} />} />
          <Route path="/scenario2" element={<Scenario2Page />} />
          <Route path="/scenario3" element={<Scenario3Page />} />
          <Route path="/choice-result1" element={<ChoiceResult1Page navigate={navigate} />} />
          <Route path="/choice-result2" element={<ChoiceResult2Page />} />
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
      </div>
  );
}

export default App;
