// src/Pages/Scenario3Page.jsx
import React, { useState } from 'react';
import './Scenario3Page.css'; // Link to your new CSS file

function Scenario3Page() {
    // New state to manage the progression of scenes
    const [currentScene, setCurrentScene] = useState('intro'); // 'intro', 'brochure', 'decision', 'result'
    
    // Existing state for user's choice outcome
    const [choice, setChoice] = useState(null); // 'transferMoney', 'searchAndReport'

    return (
        <div className="scenario-page">
            {/* Removed: <h2>Scenario 3: High-Paying Job for Teens — Just Pay RM200 Deposit! (Scam)</h2> */}

            {/* Introduction: Handsome's dialogue */}
            {currentScene === 'intro' && (
                <div className="intro-section">
                    <div className="handsome-box">
                        Handsome
                    </div>
                    <p className="handsome-dialogue">
                        Ahhh, the boring holiday had started, I should find a super easy part-time job to earn some money.
                    </p>
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
                        <p className="professional-account-note">
                            The account looks professional with fake testimonials.
                        </p>

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
                    <button onClick={() => { setChoice('transferMoney'); setCurrentScene('result'); }}>
                        Transfer RM200 to secure the slot
                    </button>
                    <button onClick={() => { setChoice('searchAndReport'); setCurrentScene('result'); }}>
                        Search reviews and report the post/account as scam
                    </button>
                </section>
            )}

            {/* Results Display */}
            {currentScene === 'result' && choice === 'transferMoney' && (
                <div className="result">
                    <p>You send the RM200. They say they’ll contact you soon.</p>
                    <p>Hours turn to days. No response. The account is now deleted. You’ve been scammed.</p>
                    <p><strong>Lesson:</strong> Real jobs never ask for deposits. When money is requested up front, it’s likely a scam.</p>
                </div>
            )}

            {currentScene === 'result' && choice === 'searchAndReport' && (
                <div className="result">
                    <p>You Google the job name and find posts from others who were scammed.</p>
                    <p>You report the Instagram page and warn your friend.</p>
                    <p><strong>Lesson:</strong> Checking before trusting can save you from losing money.</p>
                </div>
            )}

            {/* Educational Outcome & Actionable Advice (only shown after a choice is made) */}
            {currentScene === 'result' && (
                <section className="education">
                    <h3>Educational Outcome</h3>
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
                </section>
            )}
        </div>
    );
}

export default Scenario3Page;