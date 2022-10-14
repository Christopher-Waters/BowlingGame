import React, { Component } from 'react';
import BowlingGame from '../bowlingGame';
import { Controls } from './Controls';
import { Frame } from './Frame';


 export class ScoreBoard extends Component {
    constructor() {
      super();
      this.game = BowlingGame.create();
      this.state = {
        score: this.game.score()
      };
    }
  
    roll = () => {
      this.game.roll(this.randomNumberInRange(1,this.pinsUp()));
      this.setState({ score: this.game.score() });

    };
  
    reset = () => {
      this.game.reset();
      this.setState({ score: this.game.score() });
    };
  
    pinsUp = () => this.game.pinsUp();

    randomNumberInRange(min, max) {
    
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
  
    render() {
      const { score } = this.state;
  
      return (
        <div>
          <Controls handleRoll={this.roll} handleReset={this.reset} pinsUp={this.pinsUp()} />
  
          <div className="player-name">Chris</div>
  
          <div className="score-board">
            {[...Array(10)].map((o, i) => (
              <Frame
                key={i}
                frameNumber={i + 1}
                leftBox={score[i].leftBox}
                rightBox={score[i].rightBox}
                extraBox={score[i].extraBox}
                score={score[i].cumulativeScore}
              />
            ))}
          </div>
        </div>
      );
    }
  }