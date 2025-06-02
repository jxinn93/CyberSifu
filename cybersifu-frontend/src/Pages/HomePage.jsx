// src/Pages/HomePage.jsx
import React from 'react';
import './HomePage.css'; // Specific CSS for HomePage

// *** CRITICAL: HomePage receives 'onButtonClick' as a prop ***
function HomePage({ onButtonClick }) {
  const handleClick = () => {
    // This calls the function passed from App.jsx
    // The console.error was added for debugging, it will now not be triggered
    // if the prop is correctly passed.
    onButtonClick();
  };

  return (
    <div className="homepage-content">
      <h1 className="cyber-heading">CYBERSIFU</h1>
      <button onClick={handleClick}>Start Scenario</button>
    </div>
  );
}

export default HomePage;