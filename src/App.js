import React, { Component } from 'react';
import './App.css';

import Announcement from'./Announcement';
import ResetButton  from './ResetButton';
import Tile from './Tile';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      gameBoard: [
        ' ',' ',' ',
        ' ',' ',' ',
        ' ',' ',' '
      ],
      turn: 'x'
    }
  }

  updateBoard(loc, player) {

  }

  render() {
    return(
      <div className="container">
        <div className="menu">
          <h1>Tic-Tac_toe</h1>
          <Announcement/>
          <ResetButton/>          
        </div>
        {this.state.gameBoard.map(function(value, idx) {
          return (
            <Tile
              key={idx}
              loc={idx}
              value={value}
              updateBoard={this.updateBoard.bind(this)}
              turn={this.state.turn}/>
          )
        }.bind(this))}
      </div>
    );
  }
}

export default App;
