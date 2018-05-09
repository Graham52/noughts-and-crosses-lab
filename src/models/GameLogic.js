const GameLogic = function () {
  this.noughts = [];
  this.crosses = [];
}

GameLogic.prototype.numberOfNoughts = function () {
  return this.noughts.length;
};

GameLogic.prototype.numberOfCrosses = function () {
  return this.crosses.length;
};

GameLogic.prototype.addNought = function (index) {
  this.noughts.push(index);
};

GameLogic.prototype.addCross = function (index) {
  this.crosses.push(index);
};

GameLogic.prototype.checkWin = function () {
  if (checkArrayForWinningCombinations(this.crosses)) {
    return `crosses wins`;
  }
  else if (checkArrayForWinningCombinations(this.noughts)) {
    return `noughts wins`;
  }
  else {
    return 'draw';
  }
};

const checkArrayForWinningCombinations = function (array) {
  const winningIndexCombinations = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];
  let gameIsWon = false;
  let count;
  winningIndexCombinations.forEach((winningArray) => {
    count = 0;
    winningArray.forEach((index) => {
      if (array.includes(index)) {
        count++
        if (count === 3) {
          gameIsWon = true;
        };
      };
    });
  });
  return gameIsWon;
};

module.exports = GameLogic;
