// src/Pages/Scenario3Page.jsx
import React, { useState } from 'react';
//import './Scenario3Page.css';

function Scenario3Page() {
    const [choice, setChoice] = useState(null);

    return (
        <div className="scenario-page">
            <h2>Scenario 3: High-Paying Job for Teens — Just Pay RM200 Deposit! (Scam)</h2>

            <section className="context">
                <p>A teenager sees a job offer post saying:</p>
                <p>💼 “Easy Data Entry Job! Earn RM1,200/week! Flexible hours, 1–2 hours/day. Limited slots for students! Pay RM200 deposit to secure your spot.”</p>
                <p>The account looks professional with fake testimonials.</p>
            </section>

            <section className="choices">
                <h3>What do you want to do?</h3>
                <button onClick={() => setChoice('transferMoney')}>
                    Transfer RM200 to secure the slot
                </button>
                <button onClick={() => setChoice('searchAndReport')}>
                    Search reviews and report the post/account as scam
                </button>
            </section>

            {choice === 'transferMoney' && (
                <div className="result">
                    <p>You send the RM200. They say they’ll contact you soon.</p>
                    <p>Hours turn to days. No response. The account is now deleted. You’ve been scammed.</p>
                    <p><strong>Lesson:</strong> Real jobs never ask for deposits. When money is requested up front, it’s likely a scam.</p>
                </div>
            )}

            {choice === 'searchAndReport' && (
                <div className="result">
                    <p>You Google the job name and find posts from others who were scammed.</p>
                    <p>You report the Instagram page and warn your friend.</p>
                    <p><strong>Lesson:</strong> Checking before trusting can save you from losing money.</p>
                </div>
            )}

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
        </div>
    );
}

export default Scenario3Page;
