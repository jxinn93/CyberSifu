// src/Pages/KidsThinkingPage.jsx
import React, { useState } from 'react';
import './KidsThinkingPage.css';
import AladdinLampDisplay from './AladdinLampDisplay'; // Ensure this path is correct

// --- VERY IMPORTANT: KidsThinkingPage MUST receive 'navigate' as a prop ---
function KidsThinkingPage({ navigate }) { // <--- MAKE SURE 'navigate' is here
  const [showAladdin, setShowAladdin] = useState(false);

  const handleNextClick = () => {
    setShowAladdin(true);
  };

  return (
    <div className="kids-thinking-page-container">
      <div className="left-section">
        <div className="kid-drawing">
          <div className="kid-head">
            <span>|</span><span>-</span><span>-</span><span>-</span><span>|</span><br/>
            <span>|</span><span> </span><span> </span><span> </span><span>|</span><br/>
            <span>|</span><span>-</span><span>-</span><span>-</span><span>|</span>
          </div>
          <div className="kid-body">
            <br/>
            <span>/</span><span>|</span><span>\</span><br/>
            <span>/</span> <span>\</span>
          </div>
        </div>
        <div className="thinking-frame">
          <p>Wahh, XiaoMing's have the super awesome skin for the hero! I wish I can have it too!</p>
        </div>
        {!showAladdin && (
          <button onClick={handleNextClick}>Next</button>
        )}
      </div>
      <div className={`right-section ${showAladdin ? 'visible' : 'hidden'}`}>
        {/* --- VERY IMPORTANT: KidsThinkingPage MUST pass 'navigate' down to AladdinLampDisplay --- */}
        <AladdinLampDisplay navigate={navigate} /> {/* <--- MAKE SURE 'navigate={navigate}' is here */}
      </div>
    </div>
  );
}

export default KidsThinkingPage;