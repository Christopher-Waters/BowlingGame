import React from 'react';

export const Frame = ({ frameNumber, leftBox, rightBox, extraBox, score }) => (
    <div className="frame">
        <div className="frame-number">{frameNumber}</div>
        <div className="frame-score">
            <div className="box left">{leftBox}</div>
            <div className="box right">{rightBox}</div>
            <div className="box extra">{extraBox}</div>
        </div>
        <div className="running-score">{!isNaN(score) && score}</div>
    </div>
);
