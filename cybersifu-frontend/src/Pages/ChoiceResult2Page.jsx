// src/Pages/ChoiceResult2Page.jsx
import React, { useState, useEffect, useRef } from 'react';
import './choice2.css'; // Corrected import path (assuming this is the correct filename now)

function ChoiceResult2Page() {
  const [currentChoice2Display, setCurrentChoice2Display] = useState('options'); 
  const [selectedPhishingAnswers, setSelectedPhishingAnswers] = useState([]);
  const [selectedPostDownloadAnswers, setSelectedPostDownloadAnswers] = useState([]);
  
  // States for the phishing form inputs
  const [bankAccount, setBankAccount] = useState('');
  const [cvv, setCvv] = useState('');
  const [eWalletPin, setEWalletPin] = useState('');

  // State to manage sub-states within the phishing form (form, warningPrompt, reportOutcome)
  const [currentPhishingFormSubState, setCurrentPhishingFormSubState] = useState('form');
  const [reportOutcomeMessage, setReportOutcomeMessage] = useState(''); // To store "You win!" or "At least..."
  
  const [countdown, setCountdown] = useState(5);
  const countdownRef = useRef(null);

  // --- Handlers for initial options ---
  const handleOption1Click = () => {
    setCurrentChoice2Display('downloading');
    setCountdown(5); // Reset countdown for new download
    setCurrentPhishingFormSubState('form'); // Ensure sub-state is 'form' when starting download flow
  };

  const handleOption2Click = () => {
    setCurrentChoice2Display('option2Message');
  };

  // --- Handlers for option2Message (didn't click phishing link initially) ---
  const handleFinishPhishingQuizClick = () => {
    setCurrentChoice2Display('quiz');
    setSelectedPhishingAnswers([]); // Clear previous selections for phishing quiz
  };

  // --- Handlers for phishing quiz (from Option 2 path) ---
  const handlePhishingCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedPhishingAnswers((prevSelected) => [...prevSelected, value]);
    } else {
      setSelectedPhishingAnswers((prevSelected) =>
        prevSelected.filter((answer) => answer !== value)
      );
    }
  };

  const handleSubmitPhishingQuiz = () => {
    // The correct answer is only 'c'
    const isCorrect = selectedPhishingAnswers.length === 1 && selectedPhishingAnswers[0] === 'c';
    if (isCorrect) {
      setCurrentChoice2Display('correctAnswer');
    } else {
      setCurrentChoice2Display('incorrectAnswer');
    }
  };

  const handlePhishingTryAgain = () => {
    setCurrentChoice2Display('quiz'); // Go back to the phishing quiz
    setSelectedPhishingAnswers([]); // Clear previous selections
  };

  // --- Handlers for downloading phase ---
  useEffect(() => {
    if (currentChoice2Display === 'downloading') {
      countdownRef.current = setInterval(() => {
        setCountdown((prevCount) => {
          if (prevCount <= 1) {
            clearInterval(countdownRef.current);
            // If countdown finishes (no button clicked) -> You lose (inaction)
            setCurrentChoice2Display('downloadLoss'); 
            return 0;
          }
          return prevCount - 1;
        });
      }, 1000);
    }
    // Cleanup function: clear interval when component unmounts or display changes
    return () => {
      if (countdownRef.current) {
        clearInterval(countdownRef.current);
      }
    };
  }, [currentChoice2Display]);

  // **FIXED LOGIC HERE**
  const handleContinueDownload = () => {
    // User explicitly chose to continue -> Navigate to Phishing Form (as intended)
    clearInterval(countdownRef.current); // Stop countdown immediately
    setCurrentChoice2Display('phishingForm'); 
    setCurrentPhishingFormSubState('form'); // Make sure the form inputs are shown initially
  };

  const handleStopDownload = () => {
    clearInterval(countdownRef.current); // Stop countdown
    setCurrentChoice2Display('downloadStopped');
  };

  // Handler to move from downloadLoss/downloadStopped screen to postDownloadQuiz
  const handleProceedToPostDownloadQuiz = () => {
    setCurrentChoice2Display('postDownloadQuiz');
    setSelectedPostDownloadAnswers([]); // Clear selections for next quiz attempt
  };

  // --- Handlers for post-download quiz ---
  const handlePostDownloadCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedPostDownloadAnswers((prevSelected) => [...prevSelected, value]);
    } else {
      setSelectedPostDownloadAnswers((prevSelected) =>
        prevSelected.filter((answer) => answer !== value)
      );
    }
  };

  const handleSubmitPostDownloadQuiz = () => {
    // Correct answers: 'a', 'c', 'd'
    const correctOptions = ['a', 'c', 'd'];
    
    // Check if all correct options are selected and NO incorrect options are selected
    const isCorrect = 
      correctOptions.every(option => selectedPostDownloadAnswers.includes(option)) &&
      selectedPostDownloadAnswers.length === correctOptions.length;

    if (isCorrect) {
      setCurrentChoice2Display('postDownloadQuizWin');
    } else {
      setCurrentChoice2Display('postDownloadQuizFail');
    }
  };

  const handlePostDownloadTryAgain = () => {
    setCurrentChoice2Display('postDownloadQuiz'); // Go back to the post-download quiz
    setSelectedPostDownloadAnswers([]); // Clear previous selections
  };

  // --- Handlers for phishing form (added back) ---
  const handleSubmitPhishingForm = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    // In a real scenario, this would send data to a malicious server.
    // Here, it just leads to the "hacked" message.
    setCurrentChoice2Display('hackedMessage');
  };

  // Handlers for warning prompt options
  const handleReportScamLink = () => {
    // This will open the new Google Safe Browse report URL in a new tab
    window.open("https://safebrowsing.google.com/safebrowsing/report-url", "_blank"); 
    setReportOutcomeMessage("You win!");
    setCurrentPhishingFormSubState('reportOutcome');
  };

  // **MODIFIED LOGIC HERE**
  const handleShareExperience = () => {
    setReportOutcomeMessage("You win, Be careful next time, CyberSifu always be with you");
    setCurrentPhishingFormSubState('reportOutcome');
  };

  return (
    <div className="hacker-scenario-container">
      <div className="character-section">
        {/* Kid's drawing */}
        <div className="kid-drawing-hacker-scenario">
          <pre>
            {' |   --- |\n'}
            {' |       |\n'}
            {' |   --- |\n'}
            {'    /|\\\n'}
            {'   / | \\\n'}
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
        {/* Initial options phase */}
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

        {/* Message for Option 2 (didn't click link) */}
        {currentChoice2Display === 'option2Message' && (
          <div className="message-container">
            <p>Yeah, you save money for your lunch!</p>
            <p>Take care! You lose thousands while you click the suspicious link.</p>
            <p>Your mom said if you get first 10 in next examination, she will reward you the skin <span className="god-message">[believe me, I am god]</span>.</p>
            <button onClick={handleFinishPhishingQuizClick} className="next-button">Finish the quiz then I will cast a spell on your mom</button>
          </div>
        )}

        {/* Phishing Quiz */}
        {currentChoice2Display === 'quiz' && (
          <div className="quiz-container">
            <h3>Which of the following is/are not the phishing link?</h3>
            <div className="quiz-options">
              <label>
                <input
                  type="checkbox"
                  name="phishing-quiz"
                  value="a"
                  checked={selectedPhishingAnswers.includes('a')}
                  onChange={handlePhishingCheckboxChange}
                />
                a. https://paypaI.com (Note: 'I' is lowercase L)
              </label>
              <label>
                <input
                  type="checkbox"
                  name="phishing-quiz"
                  value="b"
                  checked={selectedPhishingAnswers.includes('b')}
                  onChange={handlePhishingCheckboxChange}
                />
                b. https://tinyurl.com/maybank
              </label>
              <label>
                <input
                  type="checkbox"
                  name="phishing-quiz"
                  value="c"
                  checked={selectedPhishingAnswers.includes('c')}
                  onChange={handlePhishingCheckboxChange}
                />
                c. https://spectrum.um.edu.my
              </label>
            </div>
            <button onClick={handleSubmitPhishingQuiz} className="submit-button">Submit Answer</button>
          </div>
        )}

        {/* Phishing Quiz Feedback */}
        {currentChoice2Display === 'correctAnswer' && (
          <div className="quiz-feedback correct">
            <p>Your win!</p>
            <p>Congratulations, you correctly identified the safe link!</p>
            <button onClick={() => setCurrentChoice2Display('options')} className="next-button">Back to conversation</button>
          </div>
        )}

        {currentChoice2Display === 'incorrectAnswer' && (
          <div className="quiz-feedback incorrect">
            <p>Try again!</p>
            <p>That's not quite right. Phishing links often look legitimate but have subtle differences or use URL shorteners to hide their true destination. Education domains (.edu.my) are generally trustworthy.</p>
            <button onClick={handlePhishingTryAgain} className="try-again-button">Back to Quiz</button>
          </div>
        )}

        {/* Downloading phase */}
        {currentChoice2Display === 'downloading' && (
          <div className="download-container">
            <p className="download-text">Downloading deckaheraouy.apk</p>
            <p className="countdown">Remaining: {countdown} seconds</p>
            <div className="options">
              <button onClick={handleContinueDownload}>[1] Continue download</button>
              <button onClick={handleStopDownload}>[2] Stop it</button>
            </div>
          </div>
        )}

        {/* Download stopped message (from Option 2 during download) */}
        {currentChoice2Display === 'downloadStopped' && (
          <div className="message-container">
            <p className="correct-feedback-text">hu~ Luckily you Stop it</p>
            <p>Look at the name, reverse it then you get "you are hacked", such a cocky guy</p>
            <p className="warning-text">Take note! Do not even download anything especially apk file from unauthorized platform</p>
            <button onClick={handleProceedToPostDownloadQuiz} className="next-button">Proceed to next lesson</button>
          </div>
        )}

        {/* Download Loss message (if countdown finishes or continue is clicked) */}
        {currentChoice2Display === 'downloadLoss' && (
          <div className="message-container loss-message">
            <p className="lose-text">You Lose!</p>
            <p>The suspicious download completed or you chose to continue it.</p>
            <p>Look at the name, reverse it then you get "you are hacked", such a cocky guy</p>
            <p className="warning-text">Always be extremely cautious with unexpected downloads, especially `.apk` files from unknown sources!</p>
            <button onClick={handleProceedToPostDownloadQuiz} className="next-button">Understand the risks (Proceed to Quiz)</button>
          </div>
        )}
        
        {/* Post-Download Quiz (also reached if download finishes) */}
        {currentChoice2Display === 'postDownloadQuiz' && (
          <div className="quiz-container">
            <h3>How would you do if the download already started and finished?</h3>
            <div className="quiz-options">
              <label>
                <input
                  type="checkbox"
                  name="post-download-quiz"
                  value="a"
                  checked={selectedPostDownloadAnswers.includes('a')}
                  onChange={handlePostDownloadCheckboxChange}
                />
                a. Turn On Airplane Mode
              </label>
              <label>
                <input
                  type="checkbox"
                  name="post-download-quiz"
                  value="b"
                  checked={selectedPostDownloadAnswers.includes('b')}
                  onChange={handlePostDownloadCheckboxChange}
                />
                b. Forcibly remove the battery
              </label>
              <label>
                <input
                  type="checkbox"
                  name="post-download-quiz"
                  value="c"
                  checked={selectedPostDownloadAnswers.includes('c')}
                  onChange={handlePostDownloadCheckboxChange}
                />
                c. Do not open the downloaded file
              </label>
              <label>
                <input
                  type="checkbox"
                  name="post-download-quiz"
                  value="d"
                  checked={selectedPostDownloadAnswers.includes('d')}
                  onChange={handlePostDownloadCheckboxChange}
                />
                d. Change the password of important apps quickly
              </label>
            </div>
            <button onClick={handleSubmitPostDownloadQuiz} className="submit-button">Submit Answer</button>
          </div>
        )}

        {/* Post-Download Quiz Feedback */}
        {currentChoice2Display === 'postDownloadQuizWin' && (
          <div className="quiz-feedback correct">
            <p>You Win!</p>
            <p>Excellent! These are indeed crucial steps to take. Act fast to minimize damage!</p>
            <button onClick={() => setCurrentChoice2Display('options')} className="next-button">Back to conversation</button>
          </div>
        )}

        {currentChoice2Display === 'postDownloadQuizFail' && (
          <div className="quiz-feedback incorrect">
            <p>Try again!</p>
            <p>Not quite. Forcibly removing the battery might damage the device. Focus on containing the threat and protecting your data.</p>
            <button onClick={handlePostDownloadTryAgain} className="try-again-button">Back to Quiz</button>
          </div>
        )}

        {/* Phishing Form Page (triggered by Continue Download) */}
        {currentChoice2Display === 'phishingForm' && (
          <div className="phishing-form-container">
            {currentPhishingFormSubState === 'form' && (
              <>
                {/* Warning Icon - positioned absolutely */}
                <div 
                  className="warning-icon" 
                  onClick={() => setCurrentPhishingFormSubState('warningPrompt')}
                  title="Click for a hint!"
                >
                  !
                </div>

                <p className="dialogue hacker form-intro">Hacker: The skin credit system is experiencing an issue. Don't worry, we'll compensate you directly with money.</p>
                <p className="dialogue hacker form-intro">Please fill in your details below for a quick refund.</p>
                
                <form onSubmit={handleSubmitPhishingForm} className="phishing-form">
                  <div className="form-group">
                    <label htmlFor="bankAccount">Bank Account Number:</label>
                    <input 
                      type="text" 
                      id="bankAccount" 
                      value={bankAccount}
                      onChange={(e) => setBankAccount(e.target.value)}
                      placeholder="e.g., 1234567890" 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cvv">CVV (on back of card):</label>
                    <input 
                      type="password"
                      id="cvv" 
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value)}
                      placeholder="e.g., 123" 
                      maxLength="4"
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="eWalletPin">E-wallet PIN:</label>
                    <input 
                      type="password"
                      id="eWalletPin" 
                      value={eWalletPin}
                      onChange={(e) => setEWalletPin(e.target.value)}
                      placeholder="e.g., 4-6 digits" 
                      maxLength="6"
                      required 
                    />
                  </div>
                  <button type="submit" className="submit-button">Submit for Compensation</button>
                </form>
              </>
            )}

            {currentPhishingFormSubState === 'warningPrompt' && (
              <div className="warning-prompt-box">
                <p className="prompt-text">
                  That was really a close call!
                  <br/>Very Obvious already right? He asks for your important information.
                  <br/>Don't ever share your financial information!
                </p>
                <div className="prompt-options">
                  {/* Updated "Report to Google" section */}
                  <button onClick={handleReportScamLink} className="prompt-button report-button">
                    Do you know ? You can even report the phishing link to let more people know.
                    <br/>
                    You can report it to Google 
                    <br/>
                    <a href="https://safebrowsing.google.com/safebrowsing/report-url" target="_blank" rel="noopener noreferrer">
                      [Click here]
                    </a>
                  </button>
                  {/* "Share Experience" button (outcome message modified in handleShareExperience) */}
                  <button onClick={handleShareExperience} className="prompt-button share-button">
                    Share your experience to your friend.
                  </button>
                </div>
              </div>
            )}

            {currentPhishingFormSubState === 'reportOutcome' && (
              <div className="report-outcome-box">
                <p className="outcome-text">{reportOutcomeMessage}</p>
                <button onClick={() => setCurrentChoice2Display('options')} className="next-button">Back to conversation</button>
              </div>
            )}
          </div>
        )}

        {/* Hacked Message after form submission */}
        {currentChoice2Display === 'hackedMessage' && (
          <div className="message-container loss-message hacked-final-message">
            <p className="lose-text">You Lose!</p>
            <p>You've fallen victim to a sophisticated phishing scam. Your confidential information has been compromised.</p>
            <p className="warning-text">**CRITICAL ACTION REQUIRED:**</p>
            <ul>
              <li>Change all your passwords immediately, especially for bank accounts and e-wallets.</li>
              <li>Report this incident to your bank and e-wallet providers.</li>
              <li>Monitor your accounts closely for any suspicious activity.</li>
            </ul>
            <button onClick={() => setCurrentChoice2Display('options')} className="next-button">Back to conversation</button>
          </div>
        )}

      </div> {/* end conversation-box */}
    </div> 
  );
}

export default ChoiceResult2Page;