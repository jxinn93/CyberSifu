// src/Pages/ChoiceResult1Page.jsx
import React, { useState } from 'react'; // Import useState
import './choice1.css'; // Assuming you renamed your CSS to match

function ChoiceResult1Page({navigate}) {
  const [currentDisplay, setCurrentDisplay] = useState('options'); // 'options', 'message1', 'rickroll'

  const handleOption1Click = () => {
    setCurrentDisplay('message1');
  };

  // For button 2, let's just show an alert for now, or you can expand this later
  const handleOption2Click = () => {
   if (navigate) {
    navigate('/choice-result2');
   }else {
    console.error("Naviaget prop is missing in ChoiceResult1Page!");
   }
  };

  const handleRewardLinkClick = (e) => {
    setCurrentDisplay('rickroll'); 
  };

  return (
    <div className="choice-result-page-container">
      <div className="big-green-rectangle">
        {currentDisplay === 'options' && (
          <>
            <h2>Welcome kids, I am the River God</h2>
            <div className="river-god">
              <pre> 
                {'      |\n'}
                {'      |\n'}
                {'    --+--\n'}
                {'      |\n'}
                {'    /   \\\n'}
                {'   |  o  |\n'}
                {'   \\   /\n'}
                {'    `---`\n'}
              </pre>
            </div>
            <p>River God asks</p>
            <p>How would you purchase the skin? </p>
            <div className="options">
              <button onClick={handleOption1Click}> [1] Banner in the Game Hompage [Limited Offer!!!]</button>
              <button onClick={handleOption2Click}> [2] A message in chat channel of the game [Purchase Skin with lower price, 100% Authentic, no extra fee!!!]</button>
            </div>
          </>
        )}

        {currentDisplay === 'message1' && (
          <div className="message-container">
            <p>Well done, you never try to take unfair advantage.</p>
            <p>But make sure you get your dad & mom permission and you are over 18.</p>
            <p>
              <a
                href="https://www.bilibili.com/video/BV1UT42167xb/?share_source=copy_web&vd_source=401cb64a04676b30865e15c9909a47b7" // Rickroll URL
                target="_blank" // Opens in a new tab
                rel="noopener noreferrer" // Security best practice for target="_blank"
                onClick={handleRewardLinkClick}
                className="reward-link" // Add a class for potential styling
              >
                Click the link to claim your reward
              </a>
            </p>
          </div>
        )}

        {currentDisplay === 'rickroll' && (
          <div className="rickroll-message-container">
            <p className="rickroll-text">Hah, you lose!</p>
            <p className="rickroll-text">Always Stay Alert!</p>
            <p className="rickroll-text">Don't click any link that looks suspicious, You never know what is behind it!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ChoiceResult1Page;