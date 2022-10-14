import React from 'react';

export const Controls = ({ handleRoll, handleReset, pinsUp }) => (
    <div className="controls">
        <div className="controls-left">            
            <button className="roll" onClick={() => handleRoll()}>Bowl</button>
        </div>
        <div className="controls-right">
            <div className="roll reset" onClick={() => handleReset()}>
                Reset Game {pinsUp}
            </div>
        </div>
    </div>
);
