import React, { useRef, useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css'; // Make sure you have this CSS file

// Import your page components
import HomePage from './Pages/HomePage';
import KidsThinkingPage from './Pages/KidsThinkingPage';
import ChoiceResult1Page from './Pages/ChoiceResult1Page';
import ChoiceResult2Page from './Pages/ChoiceResult2Page';
import Scenario2Page from './Pages/Scenario2Page';
import Scenario3Page from './Pages/Scenario3Page';

function App() {
  const navigate = useNavigate();
  const audioRef = useRef(null); // Create a ref to directly access the <audio> element
  const [isPlaying, setIsPlaying] = useState(false); // State to track if music is playing

  // Function to handle playing and pausing the background music
  const togglePlayPauseBGM = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        // Try to play the music
        audioRef.current.play()
          .then(() => {
            // If playback is successful, unmute and update state
            audioRef.current.muted = false;
            setIsPlaying(true);
            console.log("Background music started by button click.");
          })
          .catch(error => {
            // Catch errors, e.g., if autoplay is blocked by the browser
            console.error("Playback prevented:", error);
            alert("Your browser needs a user action to play sound. Please click the button again!");
          });
      } else {
        // If music is playing, pause it and update state
        audioRef.current.pause();
        setIsPlaying(false);
        console.log("Background music paused by button click.");
      }
    }
  };

  // useEffect hook to handle initial autoplay attempt on first user interaction
  // This is crucial for modern browser autoplay policies.
  useEffect(() => {
    const handleInitialUserInteraction = () => {
      // Only attempt to play if the audio is paused and still muted
      // (meaning it hasn't successfully played with sound yet)
      if (audioRef.current && audioRef.current.paused && audioRef.current.muted) {
        audioRef.current.play()
          .then(() => {
            audioRef.current.muted = false; // Unmute once played successfully
            setIsPlaying(true);
            console.log("Background music started on initial user interaction!");
            // Remove listeners after the first successful interaction to prevent multiple triggers
            document.removeEventListener('click', handleInitialUserInteraction);
            document.removeEventListener('keydown', handleInitialUserInteraction);
            document.removeEventListener('touchend', handleInitialUserInteraction);
          })
          .catch(error => {
            // Log if the initial autoplay attempt fails (e.g., still blocked by browser)
            console.warn("Initial autoplay attempt failed (likely blocked by browser):", error);
            // The user will then need to use the explicit 'Play Music' button.
          });
      }
    };

    // Attach event listeners to the document to detect the first user interaction
    document.addEventListener('click', handleInitialUserInteraction, { once: true }); // { once: true } ensures it runs only once
    document.addEventListener('keydown', handleInitialUserInteraction, { once: true });
    document.addEventListener('touchend', handleInitialUserInteraction, { once: true });

    // Cleanup function: remove event listeners when the component unmounts
    return () => {
      document.removeEventListener('click', handleInitialUserInteraction);
      document.removeEventListener('keydown', handleInitialUserInteraction);
      document.removeEventListener('touchend', handleInitialUserInteraction);
    };
  }, []); // Empty dependency array means this effect runs only once when the component mounts

  // Navigation functions for your simulator's pages
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
      {/* The HTML <audio> element for background music */}
      {/* 'ref' connects it to our audioRef, 'loop' makes it repeat, 'muted' starts it silently */}
      <audio ref={audioRef} loop muted>
        {/*
          Source for your BGM.
          Make sure your 'pvz-bgm.mp3' (and '.ogg' for wider compatibility)
          are in the 'public/audio/' folder of your React project.
        */}
        <source src="/audio/pvz-bgm.mp3" type="audio/mpeg" />
        <source src="/audio/pvz-bgm.ogg" type="audio/ogg" />
        Your browser does not support the audio element.
      </audio>

      {/* Music Control Button */}
      {/* This button will trigger the togglePlayPauseBGM function */}
      <button
        onClick={togglePlayPauseBGM}
        style={{ // Inline styles for quick placement. Consider moving these to App.css for larger projects.
          position: 'fixed', // Keeps the button in place when scrolling
          top: '15px',       // Distance from the top
          right: '15px',     // Distance from the right
          zIndex: 1000,      // Ensures the button is on top of other content
          padding: '8px 12px',
          backgroundColor: 'rgb(0, 255, 156)', /* A friendly blue */
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: 'bold',
          boxShadow: '0 2px 4px rgba(0,0,0,0.2)' /* Subtle shadow */
        }}
      >
        {/* Dynamically change button text based on music state */}
        {isPlaying ? 'Pause Music' : 'Play Music'}
      </button>

      {/* Your existing Routes for navigation within the simulator */}
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