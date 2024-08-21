import React from 'react';

/**
 * Chess Game
 * knight, king, queen, pawn
 * 
*/

class ChessBoardItem {
  constructor() {
    this.active = true;
    this.positon = {};
  }
}

class Knights extends ChessBoardItem {
  constructor() {

  }

  canMove = (updatedPositon) => {
    // 
  }

  updatePosition = (updatedPosition) => {
    // ccheck can move 
    // this.position = updatedPosition
  }


}

// Pawn 
// Queen

class ChessPlayer {
  constructor(name) {
    this.name = name
    this.playerItems = {
      knight1: new Knights(),
      knight2: new Knights(),
      // pawn
    }
  }
}


class ChessGame {
  constructor(p1, p2) {
    this.player1 = new ChessPlayer(p1)
    this.player2 = new ChessPlayer(p2)
  }

  callWinner = (player) => {
    // 
  }

  isCheckMate = () => {
    // boolean
  }

  isCheck = (player, item) => {
    // boolean
  }

  move = (player = 1, item = 'knight1', nextPosition = { row: 4, col: 5 }) => {
    // p1 or p2
    this.player1.playerItems[item].updatePosition(nextPosition)
    if (this.isCheck(player, item)) {
      // call check
    } else if (this.isCheckMate(player, item)) {
      // call checkmate
      this.callWinner(player)
    }
  }
}

function App() {
  return ()
}

export default App;
