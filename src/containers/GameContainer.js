import React from 'react';
import GameBoard from '../components/GameBoard.js';

class GameContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: ['x', 'o'],
      noughts: [],
      crosses: []
    }
  }

  handleClick(buttonId) {
    const playersArray = this.state.players;
    console.log(playersArray);
    const pop = playersArray.pop();
    playersArray.unshift(pop);
    this.setState({players: playersArray});
    console.log(playersArray);
  }

  render() {
    return(
      <GameBoard handleClick={this.handleClick}/>
    )
  }
}

export default GameContainer;
