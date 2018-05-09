import React from 'react';

const GameSquare = (props) => {

  let button = document.querySelector('button');
  button.addEventListener('click', props.handleClick(`${this.props.buttonId}`));

    return(
      <button id="button">{props.buttonId}</button>
    )
  }


export default GameSquare;
