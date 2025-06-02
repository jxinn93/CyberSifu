// src/components/AladdinLampDisplay.jsx
import React from 'react';
import './AladdinLampPage.css'; // Specific styles for AladdinLampDisplay

// --- CRITICAL: Receive navigate as a prop ---
function AladdinLampDisplay({ navigate }) { // <--- Ensure navigate is destructured here

   const handleNextClick = () => {
    if (navigate) {
      // --- FIX: Change the navigation path to match the route in App.jsx ---
      navigate('/choice-result1'); // This must match exactly: /choice-result1
    } else {
      console.error("Navigate prop is missing in AladdinLampDisplay!");
    }
  };
  
  return (
    <div className="aladdin-lamp-display-container">
      <div className="aladdin-lamp-drawing">
        <pre>
          {'      ___\n'}
          {'     / _ \\ \n'}
          {'  .-| (o) |-.\n'}
          {' ( ( \\___/ ) )\n'}
          {'  `-\\_____/-`\n'}
          {'     `---`\n'}
        </pre>
      </div>
      {/* Changed class name here */}
      <div className="aladdin-dialogue-frame">
        <p> Bling Bling ✨ I can help you ~</p>
      </div>
      {/*Single "Next" button to naviagte */}
      <button onClick = {handleNextClick}>Next</button>
    </div>
  );
}

export default AladdinLampDisplay;