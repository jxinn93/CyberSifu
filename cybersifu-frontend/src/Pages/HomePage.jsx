import React from 'react';
import './HomePage.css'; // Specific CSS for HomePage

function HomePage({ onScenario1Click, onScenario2Click, onScenario3Click }) {
    return (
        <div className="homepage-content">
            <h1 className="cyber-heading">CYBERSIFU</h1>

            <button onClick={onScenario1Click}>Start Scenario 1</button>
            <button onClick={onScenario2Click}>Start Scenario 2</button>
            <button onClick={onScenario3Click}>Start Scenario 3</button>
        </div>
    );
}

export default HomePage;
