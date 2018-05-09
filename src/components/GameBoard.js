import React from 'react';
import GameSquare from '../components/GameSquare.js';

class GameBoard extends React.Component {
constructor(props) {
  super(props);
}

  render() {
    return(
      <div>
        <GameSquare className="button1" buttonId="1" handleClick={this.props.handleClick}/>
        <GameSquare className="button2" buttonId="2" handleClick={this.props.handleClick}/>
        <GameSquare className="button3" buttonId="3" handleClick={this.props.handleClick}/>
        <GameSquare className="button4" buttonId="4" handleClick={this.props.handleClick}/>
        <GameSquare className="button5" buttonId="5" handleClick={this.props.handleClick}/>
        <GameSquare className="button6" buttonId="6" handleClick={this.props.handleClick}/>
        <GameSquare className="button7" buttonId="7" handleClick={this.props.handleClick}/>
        <GameSquare className="button8" buttonId="8" handleClick={this.props.handleClick}/>
        <GameSquare className="button9" buttonId="9" handleClick={this.props.handleClick}/>
      </div>
    )
  }
}

export default GameBoard;
