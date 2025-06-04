// src/Pages/Scenario3Page.jsx
import React, { useState } from 'react';
import './Scenario3Page.css'; // Link to your CSS file

function Scenario3Page() {
    // New state to manage the progression of scenes
    const [currentScene, setCurrentScene] = useState('intro'); // 'intro', 'brochure', 'decision', 'transfer_step1', 'realization', 'awareness', 'result'
    
    // Existing state for user's choice outcome
    const [choice, setChoice] = useState(null); // 'transferMoney', 'searchAndReport', 'realizedScam'

    // Quiz states
    const [quizActive, setQuizActive] = useState(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null); // To highlight user's choice and disable buttons
    const [feedbackMessage, setFeedbackMessage] = useState(''); // For immediate feedback per question

    const quizQuestions = [
        {
            questionText: "What is a major red flag when a job offer seems 'too good to be true'?",
            options: [
                "Flexible hours",
                "Requesting an upfront deposit or fee",
                "Data entry tasks",
                "Online interviews"
            ],
            correctAnswerIndex: 1,
            feedback: "Correct! Legitimate jobs should never ask you to pay to apply or secure a spot."
        },
        {
            questionText: "How can you best verify if an online job offer is legitimate?",
            options: [
                "Look for flashy testimonials on their page",
                "Trust accounts with many followers",
                "Search for independent online reviews or scam reports",
                "Assume it's real if it's on a popular social media site"
            ],
            correctAnswerIndex: 2,
            feedback: "Excellent! Independent research is crucial, as testimonials and follower counts can be faked."
        },
        {
            questionText: "Which of these is NOT a characteristic of a legitimate job offer?",
            options: [
                "Clear job description",
                "Pressure to sign up immediately with 'limited slots'",
                "No upfront payment required",
                "Employer contactable via official channels"
            ],
            correctAnswerIndex: 1,
            feedback: "That's right! Urgency and pressure tactics are common scammer tricks."
        }
    ];

    const handleAnswerOptionClick = (isCorrect, optionIndex) => {
        setSelectedOption(optionIndex); // Store selected option for highlighting
        if (isCorrect) {
            setScore(score + 1);
            setFeedbackMessage("Correct! Well done.");
        } else {
            // Find correct answer text to display in feedback
            const correctAnswerText = quizQuestions[currentQuestionIndex].options[quizQuestions[currentQuestionIndex].correctAnswerIndex];
            setFeedbackMessage(`Incorrect. The correct answer was: "${correctAnswerText}".`);
        }

        // Delay moving to next question to show feedback
        setTimeout(() => {
            setFeedbackMessage(''); // Clear feedback
            setSelectedOption(null); // Clear selected option
            const nextQuestion = currentQuestionIndex + 1;
            if (nextQuestion < quizQuestions.length) {
                setCurrentQuestionIndex(nextQuestion);
            } else {
                setQuizCompleted(true);
            }
        }, 2000); // Show feedback for 2 seconds
    };

    const resetQuiz = () => {
        setQuizActive(false);
        setCurrentQuestionIndex(0);
        setScore(0);
        setQuizCompleted(false);
        setSelectedOption(null);
        setFeedbackMessage('');
    };

    return (
        <div className="scenario-page">
            {/* Disclaimer at the very top with scrolling effect */}
            <div className="disclaimer-wrapper">
                <div className="disclaimer-text">
                    <p>No racist, sincerely no racist, for example purpose only. Both racial types are scammers in this case.</p>
                </div>
            </div>

            {/* Introduction: Handsome's dialogue */}
            {currentScene === 'intro' && (
                <div className="intro-section">
                    <div className="handsome-character-display"> {/* New container for character and dialogue */}
                        <div className="handsome-box">
                            Handsome
                        </div>
                        <p className="handsome-dialogue">
                            Ahhh, the boring holiday has started, I want to get a part time job, so I can buy the skin in LUL, let's search on Facebook
                        </p>
                    </div>
                    <button onClick={() => setCurrentScene('brochure')} className="next-button">Next</button>
                </div>
            )}

            {/* Job Brochure Display */}
            {currentScene === 'brochure' && (
                <div className="brochure-section">
                    <div className="brochure-content">
                        <h3 className="brochure-title">Job Offer:</h3>
                        <p className="job-offer-text">
                            <strong>💼 “Easy Data Entry Job! Earn RM1,200/week! Flexible hours, 1–2 hours/day. Limited slots for students! Pay RM200 deposit to secure your spot.”</strong>
                        </p>
                        <p className="brochure-author">Author: DaMing</p> {/* ADDED: Author line */}

                        <div className="testimonials-container">
                            <h4>Testimonials:</h4>
                            {/* Testimonial 1 */}
                            <div className="testimonial-item">
                                <p><strong>Adam:</strong> Nice nice, 100% real</p>
                            </div>
                            {/* Testimonial 2 */}
                            <div className="testimonial-item">
                                <p><strong>Bob:</strong> I get paid within a week</p>
                            </div>
                            {/* Testimonial 3 */}
                            <div className="testimonial-item">
                                <p><strong>Cat123:</strong> Super easy work.</p>
                            </div>
                        </div>
                    </div>
                    <button onClick={() => setCurrentScene('decision')} className="next-button">Next</button>
                </div>
            )}

            {/* User Choices Section */}
            {currentScene === 'decision' && (
                <section className="choices">
                    <h3>What do you want to do?</h3>
                    {/* Leads to new 'transfer_step1' scene */}
                    <button onClick={() => { setChoice('transferMoney'); setCurrentScene('transfer_step1'); }}>
                        Now or Never! Quickly transfer RM200 to secure the slot! You quickly PM the account who post the job vaccancy.
                    </button>
                    {/* MODIFIED: Leads to new 'awareness' scene */}
                    <button onClick={() => { setChoice('searchAndReport'); setCurrentScene('awareness'); }}>
                        Hmmmm, why don't have any company's name? Let me search online first. 
                    </button>
                </section>
            )}

            {/* Intermediate step for 'transferMoney' choice */}
            {currentScene === 'transfer_step1' && (
                <div className="transfer-step1-section">
                    <p className="scammer-dialogue">Scammer said: "Transfer RM200 to this account through e-wallet and you can start your easy way to be millionaire soon."</p>
                    <p className="account-holder-info">You found that the account holder name is "Ali bin Abu"</p>
                    
                    <h4 className="last-chance-heading">Last chance!</h4>
                    <div className="transfer-options-buttons">
                        {/* Leads to final 'transferMoney' result (loss) */}
                        <button onClick={() => { setChoice('transferMoney'); setCurrentScene('result'); }} className="choices button">
                            Ka ching! Your money has been transferred to Ali bin Abu
                        </button>
                        {/* Leads to new 'realization' scene */}
                        <button onClick={() => { setChoice('realizedScam'); setCurrentScene('realization'); }} className="choices button">
                            Why the post seem like type-C's post but the account name is type-M
                        </button>
                    </div>
                </div>
            )}

            {/* NEW: Realization Scene (before quiz, for "Type-C/Type-M" path) */}
            {currentScene === 'realization' && (
                <div className="realization-section">
                    <p className="realization-message">You get the point! Always confirm the recipient before you send each transaction.</p>
                    <h4 className="challenge-text">Now, let's challenge your awareness more!</h4>
                    {/* Leads to the result scene and starts the quiz */}
                    <button onClick={() => { setCurrentScene('result'); setQuizActive(true); }} className="next-button">Proceed to Quiz</button>
                </div>
            )}

            {/* NEW: Awareness Scene (before quiz, for "search online first" path) */}
            {currentScene === 'awareness' && (
                <div className="awareness-section">
                    <p className="awareness-alert">Alert! Be cautious! Job offers for 'Data Entry,' 'Packaging,' or 'Typewriter' roles often turn out to be scams.</p>
                    <p className="awareness-advice">Do not easily trust job postings found on social media platforms!</p>
                    <p className="awareness-advice">Legitimate job opportunities will never require an upfront payment. This type of job is simply not real!</p>
                    <button onClick={() => { setCurrentScene('result'); setQuizActive(true); }} className="next-button awareness-quiz-button">
                        Excellent! Your awareness is commendable! Complete this quiz, and I will reveal a legitimate job offer to you. [Believe me, I am God]
                    </button>
                </div>
            )}

            {/* Final Results Display - Conditional based on 'choice' */}
            {currentScene === 'result' && choice === 'transferMoney' && (
                <div className="result">
                    <p>You send the RM200. They say they’ll contact you soon.</p>
                    <p>Hours turn to days. No response. The account is now deleted. You’ve been scammed. <strong className="lose-text">YOU LOSE!</strong></p>
                    <p className="comfort-message"><strong>Don't upset! You paid RM200 to gain learnt from the lesson.</strong></p>
                    <p><strong>Lesson:</strong> Real jobs never ask for deposits. When money is requested up front, it’s likely a scam.</p>
                </div>
            )}

            {/* If 'searchAndReport' was chosen, the result text still shows BEFORE the quiz */}
            {currentScene === 'result' && choice === 'searchAndReport' && (
                <div className="result">
                    <p>You Google the job name and find posts from others who were scammed.</p>
                    <p>You report the Instagram page and warn your friend.</p>
                    <p><strong>Lesson:</strong> Checking before trusting can save you from losing money.</p>
                </div>
            )}
            
            {/* Educational Outcome & Actionable Advice - Always show if in 'result' scene, and handles quiz */}
            {currentScene === 'result' && (
                <section className="education">
                    {/* Render static advice or quiz based on state */}
                    {!quizActive && !quizCompleted && (
                        <>
                            <h3>Educational Outcome</h3>
                            {/* Static advice */}
                            <ul>
                                <li>Scammers target teens with “too good to be true” job offers.</li>
                                <li>Paying upfront fees for a job is a red flag.</li>
                                <li>Even realistic accounts and testimonials can be faked.</li>
                            </ul>
                            <h3>Actionable Advice</h3>
                            <ul>
                                <li>A legit job will never ask you to pay to apply.</li>
                                <li>Look out for pressure words like “limited slots,” “urgent,” “deposit now.”</li>
                                <li>Report such scams to Google, Instagram, or MCMC (Malaysia).</li>
                            </ul>
                            <button onClick={() => setQuizActive(true)} className="next-button start-quiz-button">
                                Test Your Knowledge! Start Quiz
                            </button>
                        </>
                    )}

                    {/* Quiz Interface */}
                    {quizActive && !quizCompleted && (
                        <div className="quiz-container">
                            <div className="question-section">
                                <div className="question-count">
                                    <span>Question {currentQuestionIndex + 1}</span>/{quizQuestions.length}
                                </div>
                                <div className="question-text">
                                    {quizQuestions[currentQuestionIndex].questionText}
                                </div>
                            </div>
                            <div className="answer-section">
                                {quizQuestions[currentQuestionIndex].options.map((option, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleAnswerOptionClick(index === quizQuestions[currentQuestionIndex].correctAnswerIndex, index)}
                                        className={`quiz-option-button ${selectedOption === index ? (index === quizQuestions[currentQuestionIndex].correctAnswerIndex ? 'correct-option' : 'incorrect-option') : ''}`}
                                        disabled={selectedOption !== null} // Disable buttons after selection
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                            {feedbackMessage && <p className="feedback-message">{feedbackMessage}</p>}
                        </div>
                    )}

                    {/* Quiz Completion Result */}
                    {quizCompleted && (
                        <div className="quiz-result-section">
                            <h3>Quiz Complete!</h3>
                            <p>You scored {score} out of {quizQuestions.length} questions correctly!</p>
                            {score === quizQuestions.length ? (
                                <p className="win-message">You win!</p>
                            ) : (
                                <p>Keep reviewing the advice to protect yourself!</p>
                            )}
                            <button onClick={resetQuiz} className="next-button">Retake Quiz / Review Advice</button>
                        </div>
                    )}
                </section>
            )}
        </div>
    );
}

export default Scenario3Page;