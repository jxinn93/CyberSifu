import React, { useState, useEffect } from 'react';
import './Scenario2Page.css';

const Scenario2Page = () => {
    const [stage, setStage] = useState('inbox');
    const [formData, setFormData] = useState({
        fullName: '',
        icNumber: '',
        schoolName: '',
        phone: '',
        parentContact: '',
        address: ''
    });

    const [showThankYou, setShowThankYou] = useState(true);
    const [showLesson, setShowLesson] = useState(false);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setStage('consequence');
        setShowThankYou(true);
        setShowLesson(false);
        setTimeout(() => {
            setShowThankYou(false);
        }, 3000);
    };

    // For Option 2 and 3: show lesson after 3 seconds
    useEffect(() => {
        if(stage === 'searchOnline' || stage === 'ignoreDelete') {
            setShowLesson(false);
            const timer = setTimeout(() => {
                setShowLesson(true);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [stage]);

    return (
        <div className="email-simulation-container">
            {stage === 'inbox' && (
                <div className="inbox-view">
                    <h2>📥 Inbox</h2>
                    <ul className="email-list">
                        <li className="email-item clickable unread" onClick={() => setStage('emailOpened')}>
                            <span className="sender">Lucky Rewards</span>
                            <span className="subject">🎉 Congratulations! You’ve won RM5,000!</span>
                            <span className="tag">Unread</span>
                            <span className="date">9:42 AM</span>
                        </li>
                        <li className="email-item">
                            <span className="sender">LinkedIn</span>
                            <span className="subject">You have 3 new connection requests</span>
                            <span className="date">9:30 AM</span>
                        </li>
                        <li className="email-item">
                            <span className="sender">Shopee</span>
                            <span className="subject">Flash Sale now live - 70% off</span>
                            <span className="date">8:15 AM</span>
                        </li>
                    </ul>
                </div>
            )}

            {stage === 'emailOpened' && (
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
                        <p className="phishing-link">
                            👉 <a href="#" onClick={(e) => { e.preventDefault(); setStage('form'); }}>https://rewards-verify-prize.com/claim-now</a>
                        </p>
                        <p>Failure to respond within 24 hours will result in forfeiture of the prize.</p>
                        <p>Thank you,<br />Lucky Rewards Center Team</p>

                        <hr />

                        <h3>What do you want to do?</h3>
                        <ul className="user-choices">
                            <li>
                                <button onClick={() => setStage('form')}>
                                    📝 Fill in the form
                                </button>
                            </li>
                            <li>
                                <button onClick={() => setStage('searchOnline')}>
                                    🔍 Search online for the campaign's legitimacy
                                </button>
                            </li>
                            <li>
                                <button onClick={() => setStage('ignoreDelete')}>
                                    🚫 Ignore and delete the message
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            )}

            {/* Option 1: Form submission and consequence (already done) */}
            {stage === 'form' && (
                <div className="phishing-form">
                    <h2>Claim Your RM5,000 Prize 🎁</h2>
                    <p>Please fill in the following details to verify your identity:</p>
                    <form onSubmit={handleFormSubmit}>
                        <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleInputChange} required />
                        <input type="text" name="icNumber" placeholder="IC Number" value={formData.icNumber} onChange={handleInputChange} required />
                        <input type="text" name="schoolName" placeholder="School Name" value={formData.schoolName} onChange={handleInputChange} required />
                        <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleInputChange} required />
                        <input type="text" name="parentContact" placeholder="Parent’s Contact" value={formData.parentContact} onChange={handleInputChange} required />
                        <input type="text" name="address" placeholder="Home Address" value={formData.address} onChange={handleInputChange} required />
                        <button type="submit" className="submit-button">Submit</button>
                    </form>
                </div>
            )}

            {stage === 'consequence' && (
                <div className="identity-theft-simulation">
                    {showThankYou ? (
                        <div className="thank-you-screen">
                            <h2>✅ Thank you for submitting your details!</h2>
                            <p>Your prize will be processed within 24 hours...</p>
                        </div>
                    ) : (
                        <div className="consequence-scene">

                            <h3 className="fade-in delay-1">Days later....</h3>

                            <div className="split-screen fade-in delay-2">
                                <div className="caller-side">
                                    <div className="avatar">👩‍👧</div>
                                    <div className="conversation-bubble conversation-bubble parent animate-bubble delay-3">
                                        “Hello? You said my child applied for a loan?!”
                                    </div>
                                </div>
                                <div className="receiver-side">
                                    <div className="avatar">🎭</div>
                                    <div className="conversation-bubble conversation-bubble scammer animate-bubble delay-4">
                                        “Yes, with full IC and address. It's already under processing.”
                                    </div>
                                </div>
                            </div>

                            <div className="character-emoji fade-in delay-5">😱</div>

                            <p className="narration-text fade-in delay-6">
                                Your parents receive a call about a loan application... you never made.
                            </p>

                            <div className="lesson-box fade-in delay-7">
                                <h3>📘 Lesson: This was identity theft.</h3>
                                <p>
                                    Scammers collected your real personal data to impersonate you and apply for loans. Real contests will never ask for sensitive personal info like your IC number or home address.
                                </p>
                                <ul className="tips">
                                    <li>🚫 Never share IC, address, or parent contacts with unknown links.</li>
                                    <li>🔎 Always verify campaigns on official websites.</li>
                                    <li>🧠 Ask a trusted adult if you're unsure.</li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            )}

            {/* Option 2: Search online - warning posts found */}
            {stage === 'searchOnline' && (
                <div className="search-online-simulation">

                    {/* Simulated search bar + result area */}
                    <div className="search-bubble-container fade-in delay-1">
                        <div className="search-browser-bar">
                            🔍 <span className="typed-query">TikTok Lucky Draw RM500</span>
                        </div>
                        <div className="search-results">
                            <p className="result-line fade-in delay-2">📌 Reddit Post: "Beware – TikTok RM500 draw is a SCAM!"</p>
                            <p className="result-line fade-in delay-3">⚠️ ScamAlert.my: "New phishing campaign targeting teens via DM!"</p>
                            <p className="result-line fade-in delay-4">📰 Blog: "How I nearly lost my IC to a fake TikTok prize"</p>
                        </div>
                    </div>

                    {/* Separate user reaction/story bubble */}
                    <div className="reaction-bubble fade-in delay-5">
                        <p>🚨 After reading the search results, you realize it’s clearly a scam.</p>
                        <p>🗑️ You delete the message and feel relieved that you didn’t fall for it.</p>
                    </div>

                    {/* Lesson appears after delay */}
                    {showLesson && (
                        <div className="lesson-box fade-in delay-6">
                            <h3>📘 Lesson: Verifying before clicking protected your identity.</h3>
                            <p>
                                Always double-check suspicious campaigns by searching online or checking official sources. It helps you avoid scams and keeps your personal data safe.
                            </p>
                            <ul className="tips">
                                <li>🔍 Search before you trust.</li>
                                <li>📱 Be cautious with links sent via DMs or emails.</li>
                                <li>🧠 Use your instincts + information!</li>
                            </ul>
                        </div>
                    )}
                </div>
            )}

            {/* Option 3: Ignore and delete message */}
            {/* Option 3: Ignore and delete message */}
            {stage === 'ignoreDelete' && (
                <div className="ignore-delete-simulation">

                    {/* Intuition reaction bubble */}
                    <div className="reaction-bubble fade-in delay-1">
                        <p>🤔 Something felt off… You trusted your instincts and deleted the message without clicking anything.</p>
                    </div>

                    {/* Time passes bubble */}
                    <p className="fade-in delay-2">⏳ A few days later…</p>

                    {/* Friend chat bubble */}
                    <div className="chat-bubble friend fade-in delay-3">
                        <p>💬 Friend: “Hey… I filled in some lucky draw form… now I keep getting spammy messages 😓”</p>
                    </div>

                    {/* Your reply bubble */}
                    <div className="chat-bubble you fade-in delay-4">
                        <p>💬 You: “I got that too — but it looked sus, so I deleted it. It’s probably a scam!”</p>
                    </div>

                    {/* Gratitude bubble */}
                    <div className="reaction-bubble fade-in delay-5">
                        <p>🙏 Your friend thanks you for the heads-up. You feel good for helping them avoid trouble.</p>
                    </div>

                    {/* Lesson appears */}
                    {showLesson && (
                        <div className="lesson-box fade-in delay-6">
                            <h3>📘 Lesson: Trust your instincts. Ignoring suspicious messages can protect your privacy.</h3>
                            <p>
                                You avoided giving away your personal data — and helped someone else too. Sometimes doing nothing is the smartest move.
                            </p>
                            <ul className="tips">
                                <li>🧠 If something feels sketchy, don’t engage.</li>
                                <li>🤝 Talk to friends and family about online risks.</li>
                                <li>🔐 Stay alert, stay safe.</li>
                            </ul>
                        </div>
                    )}
                </div>
            )}

        </div>
    );
};

export default Scenario2Page;
