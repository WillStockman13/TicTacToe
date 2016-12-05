var drawBoard = function() {
  this.Board = [[0,0,0],[0,0,0],[0,0,0]]
}

drawBoard.prototype = {
	submitMove: function(player, x, y) {
	  if(x < 4 && y < 4) {
	    if(player === 'x') {
          this.Board[y][x] = 'x';
          console.log("player o's turn")
          return this.Board;
	    } else {
	      this.Board[y][x] = 'o'
	      console.log("player x's turn")
	      return this.Board;
	    }
	  }
	},
    checkBoard: function() {
      return this.checkVertHorz(false)
    },
	checkVertHorz: function(state) {
	  var counterDiag1 = 0;
	  var counterDiag2 = 0;
	  for(var i = 0; i < this.Board.length; i++) {
	  	var countery = 0;
        var counterx = 0;
        if(this.Board[i][i] === this.Board[0][0] && this.Board[0][0] !== 0) {
          counterDiag1++;
          if(counterDiag1 === 3) {
          	state = true;
          	return state;
          }
        }
        if(this.Board[this.Board.length - i - 1][this.Board.length - i - 1] === this.Board[this.Board.length - 1][this.Board.length - 1] && this.Board[this.Board.length - 1][this.Board.length - 1] !== 0) {
          counterDiag2++;
          if(counterDiag2 === 3) {
          	state = true;
          	return state;
          }
        }
	  	for(var x = 0; x < this.Board.length; x++) {
          if(this.Board[x][i] === this.Board[0][i] && this.Board[i][0] != 0) {
          	countery++
          	if(countery === 3) {
              state = true;
              return state;
          	}
          }
          if(this.Board[i][x] === this.Board[i][0] && this.Board[i][0] != 0) {
            counterx++
            if(counterx === 3) {
              state = true;
              return state
            }
          }
	  	}
	  }
	  return state;
	},
	playX: function(x,y) {
      return this.submitMove('x', x, y)
	},
	playO: function(x,y) {
	  return this.submitMove('y', x, y)
	}
}

var Game = new drawBoard();