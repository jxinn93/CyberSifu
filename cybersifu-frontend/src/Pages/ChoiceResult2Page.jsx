// src/Pages/ChoiceResult2Page.jsx
import React, { useState } from 'react';
import './choice2.css';

function ChoiceResult2Page() {
  // State to manage which content to display
  const [currentChoice2Display, setCurrentChoice2Display] = useState('options'); 
  // State for the quiz answer
  const [selectedAnswers, setSelectedAnswers] = useState([]); 

  const handleOption1Click = () => {
    // This button will directly lead to the suspicious link.
    // We'll embed the link directly in the message for this option.
    // For simplicity, clicking this button *doesn't change the internal state here*,
    // it just implies the user is about to click the link provided by the hacker.
    // If you want a confirmation before navigating externally, you'd add another state.
    // For now, it just makes the link actionable, which is handled by the text below.
    alert("You clicked 'Wahhh, I want it!' Now proceed to click the hacker's link.");
    // No state change here, as the hacker's link is still displayed in the conversation.
    // If you want a specific outcome *after* this button but *before* clicking the external link,
    // you'd add a new state like setCurrentChoice2Display('confirmLinkClick');
  };

  const handleOption2Click = () => {
    setCurrentChoice2Display('option2Message');
  };

  const handleFinishQuizClick = () => {
    setCurrentChoice2Display('quiz');
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedAnswers((prevSelected) => [...prevSelected, value]);
    } else {
      setSelectedAnswers((prevSelected) =>
        prevSelected.filter((answer) => answer !== value)
      );
    }
  };

  const handleSubmitQuiz = () => {
    // The correct answer is only 'c'
    const isCorrect = selectedAnswers.length === 1 && selectedAnswers[0] === 'c';
    if (isCorrect) {
      setCurrentChoice2Display('correctAnswer');
    } else {
      setCurrentChoice2Display('incorrectAnswer');
    }
  };

  const handleTryAgain = () => {
    setCurrentChoice2Display('quiz'); // Go back to the quiz
    setSelectedAnswers([]); // Clear previous selections
  };


  return (
    <div className="hacker-scenario-container">
      <div className="character-section">
        {/* Kid's drawing */}
        <div className="kid-drawing-hacker-scenario">
          <pre>
            {' | --- |\n'}
            {' |     |\n'}
            {' | --- |\n'}
            {'  /|\\\n'}
            {'  / | \\\n'}
          </pre>
          <p className="character-name">Kid</p>
        </div>

        {/* Hacker drawing as just a hat */}
        <div className="hacker-drawing">
          <pre>
            {'    ___\n'}
            {'   /___\\\n'}
            {'  |-----|\n'}
            {'  |_____|\n'}
          </pre>
          <p className="character-name">Hacker</p>
        </div>
      </div>

      <div className="conversation-box">
        {currentChoice2Display === 'options' && (
          <>
            <p className="dialogue kid">Kid: Hi, wanna ask can I get the skin cheaper?</p>
            <p className="dialogue hacker">Hacker: Sure, I got friend that work in TAMI studio, he can directly give the skin to your game account.</p>
            <p className="dialogue kid">Kid: Really? Not a scam?</p>
            <p className="dialogue hacker">Hacker: Come on Bro, my friend just want to share his kindness, limited spot Tau? </p>
            <p className="dialogue kid">Kid: Such a good stuff?</p>
            <p className="dialogue hacker">Hacker: Don't believe me? Fine, I would just give this chance to others.</p>
            <p className="dialogue kid">Kid:Wait wait wait, How can I get it?</p>
            <p className="dialogue hacker">Hacker: Just click the link below</p>
            <p className="dialogue hacker link">
              <a href="https://bobtamifreeskin.com" target="_blank" rel="noopener noreferrer">
                https://bobtamifreeskin.com
              </a>
            </p>

            <div className="options">
              <button onClick={handleOption1Click}>[1] Wahhh, I want it [click the link]</button>
              <button onClick={handleOption2Click}>[2] Hmmm, look so weird [didn't click the link]</button>
            </div>
          </>
        )}

        {currentChoice2Display === 'option2Message' && (
          <div className="message-container">
            <p>Yeah, you save money for your lunch!</p>
            <p>Take care! You lose thousands while you click the suspicious link.</p>
            <p>Your mom said if you get first 10 in next examination, she will reward you the skin <span className="god-message">[believe me, I am god]</span>.</p>
            <button onClick={handleFinishQuizClick} className="next-button">Finish the quiz then I will cast a spell on your mom</button>
          </div>
        )}

        {currentChoice2Display === 'quiz' && (
          <div className="quiz-container">
            <h3>Which of the following is/are not the phishing link?</h3>
            <div className="quiz-options">
              <label>
                <input
                  type="checkbox"
                  name="phishing-quiz"
                  value="a"
                  checked={selectedAnswers.includes('a')}
                  onChange={handleCheckboxChange}
                />
                a. https://paypaI.com (Note: 'I' is lowercase L)
              </label>
              <label>
                <input
                  type="checkbox"
                  name="phishing-quiz"
                  value="b"
                  checked={selectedAnswers.includes('b')}
                  onChange={handleCheckboxChange}
                />
                b. https://tinyurl.com/maybank
              </label>
              <label>
                <input
                  type="checkbox"
                  name="phishing-quiz"
                  value="c"
                  checked={selectedAnswers.includes('c')}
                  onChange={handleCheckboxChange}
                />
                c. https://spectrum.um.edu.my
              </label>
            </div>
            <button onClick={handleSubmitQuiz} className="submit-button">Submit Answer</button>
          </div>
        )}

        {currentChoice2Display === 'correctAnswer' && (
          <div className="quiz-feedback correct">
            <p>Your win!</p>
            <p>Congratulations, you correctly identified the safe link!</p>
          </div>
        )}

        {currentChoice2Display === 'incorrectAnswer' && (
          <div className="quiz-feedback incorrect">
            <p>Try again!</p>
            <p>That's not quite right. Phishing links often look legitimate but have subtle differences or use URL shorteners to hide their true destination. Education domains (.edu.my) are generally trustworthy.</p>
            <button onClick={handleTryAgain} className="try-again-button">Back to Quiz</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ChoiceResult2Page;