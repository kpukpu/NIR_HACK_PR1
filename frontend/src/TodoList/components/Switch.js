import React from 'react';
import './Switch.css';

function Switch({ text, onClick, moveCompletedToTop }) {
    return (
        <div className="container">
            {text}
            <label className="switch">
            <input
                    type="checkbox"
                    checked={moveCompletedToTop}
                    onChange={onClick}
                />
                <span></span>
            </label>
        </div>
    );
}
export default Switch;
