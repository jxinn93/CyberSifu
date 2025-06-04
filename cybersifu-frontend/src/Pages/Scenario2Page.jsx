import React, { useState } from "react";
import "./choice2.css";

export default function Scenario2Page() {
    //const [selectedOption, setSelectedOption] = useState(null);
    const [currentScene, setCurrentScene] = useState("choice");
    const [formData, setFormData] = useState({
        name: "",
        ic: "",
        bank: "",
    });

    const handleOptionClick = (option) => {
        //setSelectedOption(option);
        if (option === 1) setCurrentScene("form");
        else if (option === 2) setCurrentScene("search");
        else if (option === 3) setCurrentScene("delete");
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("Phished data:", formData);
        setCurrentScene("thankyou");
    };
    const [quizFeedback, setQuizFeedback] = useState("");


    return (
        <div className="scenario-container">
            <h1 className="section-title">TikTok Lucky Draw?</h1>

            {currentScene === "choice" && (
                <>
                    <p className="quiz-question">
                        You receive a DM claiming you’ve won a TikTok Lucky Draw. What will you do?
                    </p>
                    <div className="quiz-options">
                        <div onClick={() => handleOptionClick(1)} className="quiz-option">Fill in the form</div>
                        <div onClick={() => handleOptionClick(2)} className="quiz-option">Search online</div>
                        <div onClick={() => handleOptionClick(3)} className="quiz-option">Delete message</div>
                    </div>
                </>
            )}

            {currentScene === "form" && (
                <form className="phishing-form" onSubmit={handleFormSubmit}>
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="e.g. Alex Tan"
                        value={formData.name}
                        onChange={handleFormChange}
                        required
                    />

                    <label>IC Number</label>
                    <input
                        type="text"
                        name="ic"
                        placeholder="e.g. 010101-01-0101"
                        value={formData.ic}
                        onChange={handleFormChange}
                        required
                    />

                    <label>Bank Account Number</label>
                    <input
                        type="text"
                        name="bank"
                        placeholder="e.g. 1234567890"
                        value={formData.bank}
                        onChange={handleFormChange}
                        required
                    />

                    <button type="submit">Submit</button>
                </form>
            )}

            {currentScene === "thankyou" && (
                <div className="thankyou-section">
                    <p>Thank you for submitting the form. You’ll receive your reward soon!</p>
                    <p className="ring-ring">Days later... RING RING 📞</p>

                    <div className="split-screen-call">
                        <div className="caller-side">
                            <p className="label">ABC Bank</p>
                            <div className="speech-bubble left">
                                Hi, I am from ABC Bank. You have apply a RM50K loan from us.
                            </div>
                        </div>

                        <div className="receiver-side">
                            <p className="label">You</p>
                            <div className="speech-bubble right">
                                What?! No!!
                            </div>
                        </div>
                    </div>

                    <div className="scam-realization">
                        You realize your identity was stolen using the info you submitted.
                    </div>
                    <p className="lesson">
                        ⚠️ Lesson: Never submit personal info through suspicious links. Always verify legitimacy first.
                    </p>
                    <div className="quiz-section">
                        <h3 className="quiz-question">🧠 What should you do after you fill in a form and realize it was a scam?</h3>
                        <form
                            className="quiz-form"
                            onSubmit={(e) => {
                                e.preventDefault();
                                const answer = e.target.elements.postScamAction.value;
                                if (answer === "all_correct") {
                                    setQuizFeedback("✅ Correct! You should stop contact, change passwords, report, and monitor accounts.");
                                } else {
                                    setQuizFeedback("❌ Not quite. You should take all necessary steps to protect yourself and report the scam.");
                                }
                            }}
                        >
                            <label>
                                <input type="radio" name="postScamAction" value="ignore" /> Ignore and hope for the best
                            </label>
                            <br />
                            <label>
                                <input type="radio" name="postScamAction" value="contact_scammer" /> Contact the scammer to ask for a refund
                            </label>
                            <br />
                            <label>
                                <input type="radio" name="postScamAction" value="all_correct" /> Stop contact, change passwords, report scam, and monitor accounts
                            </label>
                            <br />
                            <button type="submit" className="quiz-submit">
                                Submit Answer
                            </button>
                        </form>

                        {quizFeedback && <p className="quiz-feedback">{quizFeedback}</p>}
                    </div>

                </div>
            )}


            {currentScene === "search" && (
                <div className="search-scene">
                    <div className="fake-search-bar">
                        <span className="search-icon">🔍</span>
                        <span className="search-query">tiktok lucky draw message real or scam</span>
                    </div>

                    <div className="search-results">
                        <div className="result-item">
                            ❗Kini News: "Aware of latest TikTok Lucky Draw".
                        </div>
                        <div className="result-item">
                            ❗ Forum Post: “I filled in the form and my identity was stolen.”
                        </div>
                        <div className="result-item">
                            ⚠️ TikTok: “We do not offer lucky draw rewards via DM.”
                        </div>
                    </div>
                    <div className="scam-realization">
                        You realize that this email was a scam.
                        ✅ Good job! A quick search revealed this was a <strong>common TikTok scam</strong>.
                    </div>
                    <p className="lesson">
                        🧠 Lesson: Always search online or verify with trusted sources before responding to messages.
                    </p>

                    <div className="quiz-section">
                        <h3 className="quiz-question">
                            🧠 Quick Quiz: What should you NEVER do when you receive a suspicious message?
                        </h3>
                        <form
                            className="quiz-form"
                            onSubmit={(e) => {
                                e.preventDefault();
                                const answer = e.target.elements.verification.value;
                                if (answer === "click") {
                                    setQuizFeedback(
                                        "❌ Incorrect. Clicking unknown links can compromise your info."
                                    );
                                } else if (answer === "ignore") {
                                    setQuizFeedback(
                                        "✅ Correct! Ignoring or deleting suspicious messages helps keep you safe."
                                    );
                                } else if (answer === "share") {
                                    setQuizFeedback(
                                        "❌ Incorrect. Sharing suspicious messages may spread scams."
                                    );
                                } else {
                                    setQuizFeedback("Please select an answer before submitting.");
                                }
                            }}
                        >
                            <label>
                                <input type="radio" name="verification" value="click" /> Click the link immediately
                            </label>
                            <br />
                            <label>
                                <input type="radio" name="verification" value="ignore" /> Ignore or delete the message
                            </label>
                            <br />
                            <label>
                                <input type="radio" name="verification" value="share" /> Forward it to friends or groups
                            </label>
                            <br />
                            <button type="submit" className="quiz-submit">
                                Submit Answer
                            </button>
                        </form>

                        {quizFeedback && <p className="quiz-feedback">{quizFeedback}</p>}
                    </div>
                </div>
            )}

            {currentScene === "delete" && (
                <div className="delete-scene">
                    <div className="result-message">
                        👍 Smart move. You deleted the suspicious message and avoided risk.
                    </div>

                    <div className="quiz-section">
                        <h3 className="quiz-question">🧠 Quick Quiz: What is the best way to verify a suspicious message?</h3>
                        <form className="quiz-form" onSubmit={(e) => {
                            e.preventDefault();
                            const answer = e.target.elements.verification.value;
                            if (answer === "search") {
                                setQuizFeedback("✅ Correct! Always verify via official sources or search online.");
                            } else {
                                setQuizFeedback("❌ Not quite. Clicking links or asking strangers can be risky.");
                            }
                        }}>
                            <label>
                                <input type="radio" name="verification" value="click" /> Click the link and see what happens
                            </label><br />
                            <label>
                                <input type="radio" name="verification" value="askrandom" /> Ask a random person online
                            </label><br />
                            <label>
                                <input type="radio" name="verification" value="search" /> Search online or check official sources
                            </label><br />
                            <button type="submit" className="quiz-submit">Submit Answer</button>
                        </form>

                        {quizFeedback && <p className="quiz-feedback">{quizFeedback}</p>}
                    </div>
                </div>
            )}

        </div>
    );
}
