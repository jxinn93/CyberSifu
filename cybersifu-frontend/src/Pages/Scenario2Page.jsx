import React, { useState } from 'react';
import './Scenario2Page.css';

const Scenario2Page = () => {
    const [emailOpened, setEmailOpened] = useState(false);

    return (
        <div className="email-simulation-container">
            {!emailOpened ? (
                <div className="inbox-view">
                    <h2>📥 Inbox</h2>
                    <ul className="email-list">
                        <li className="email-item">
                            <span className="sender">LinkedIn</span>
                            <span className="subject">You have 3 new connection requests</span>
                            <span className="date">9:30 AM</span>
                        </li>
                        <li className="email-item clickable unread" onClick={() => setEmailOpened(true)}>
                            <span className="sender">Lucky Rewards</span>
                            <span className="subject">🎉 Congratulations! You’ve won RM5,000!</span>
                            <span className="tag">Unread</span>
                            <span className="date">9:42 AM</span>
                        </li>
                        <li className="email-item">
                            <span className="sender">Shopee</span>
                            <span className="subject">Flash Sale now live - 70% off</span>
                            <span className="date">8:15 AM</span>
                        </li>
                    </ul>
                </div>
            ) : (
                <div className="email-content">
                    <div className="email-header">
                        <div className="breadcrumbs"><strong>Inbox</strong> &gt; Lucky Draw Winner 🎉</div>
                        <div className="email-details">
                            <p><strong>From:</strong> lucky@rewards-center.win</p>
                            <p><strong>To:</strong> you@example.com</p>
                            <p><strong>Date:</strong> Tue, June 3, 2025, 9:42 AM</p>
                            <p><strong>Subject:</strong> 🎉 Congratulations! You’ve won RM5,000 in our Lucky Draw!</p>
                        </div>
                    </div>

                    <div className="email-body">
                        <p>Dear Winner,</p>
                        <p>Congratulations! 🎊</p>
                        <p>You have been selected as the grand prize winner in our nationwide lucky draw campaign.</p>
                        <p>To claim your RM5,000 prize, please verify your identity by filling out your details using the secure link below:</p>
                        <p className="phishing-link">👉 <a href="#">https://rewards-verify-prize.com/claim-now</a></p>
                        <p>Please provide your:</p>
                        <ul>
                            <li>Full Name</li>
                            <li>IC Number</li>
                            <li>Bank Name & Account Number</li>
                        </ul>
                        <p>Failure to respond within 24 hours will result in forfeiture of the prize.</p>
                        <p>Thank you,<br />Lucky Rewards Center Team</p>
                    </div>

                    <div className="hacker-reveal">
                        <div className="hacker-message">💀 [Phantom has intercepted your info]</div>
                        <p>“Nice IC and bank details you gave me. I’ll go shopping now. You… might wanna call your bank.”</p>
                    </div>

                    <div className="quiz-section">
                        <p><strong>🛡️ What should you have checked before clicking the link?</strong></p>
                        <div className="quiz-options">
                            <label><input type="radio" name="q2" /> The grammar of the email</label>
                            <label><input type="radio" name="q2" /> The email address and link destination</label>
                            <label><input type="radio" name="q2" /> Whether it looked exciting</label>
                        </div>
                        <button className="submit-button">Submit Answer</button>
                    </div>

                    <div className="security-tip">
                        ✅ <strong>Tip:</strong> Always verify the sender's email and avoid clicking unknown links. Real institutions won't ask for personal data through insecure websites.
                    </div>
                </div>
            )}
        </div>
    );
};

export default Scenario2Page;
