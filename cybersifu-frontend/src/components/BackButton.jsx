// src/components/BackButton.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BackButton.css'; // Style it as needed

function BackButton({ to = -1 }) {
    const navigate = useNavigate();
    return (
        <button className="back-button" onClick={() => navigate(to)}>
            ⬅ Back
        </button>
    );
}

export default BackButton;
