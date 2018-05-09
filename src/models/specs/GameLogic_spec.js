const assert = require('assert');
const GameLogic = require('../GameLogic.js');

describe('GameLogic', function (){

  let game;

  beforeEach(function () {
    game = new GameLogic();
  });

  it('should have an empty noughts array', function(){
    const result = game.numberOfNoughts();
    assert.strictEqual(result, 0);
  });

  it('should have an empty crosses array', function(){
    const result = game.numberOfCrosses();
    assert.strictEqual(result, 0);
  });

  it('should be able to add a nought to noughts array', function() {
    game.addNought(1);
    const result = game.numberOfNoughts();
    assert.strictEqual(result, 1);
  });

  it('should be able to add a cross to crosses array', function() {
    game.addCross(1);
    const result = game.numberOfCrosses();
    assert.strictEqual(result, 1);
  });

  it('should be able to win game', function() {
    game.addCross(3);
    game.addCross(5);
    game.addCross(7);
    const result = game.checkWin();
    assert.strictEqual(result, 'crosses wins');
  });

  it('should be able to draw game', function() {
    game.addCross(1);
    game.addNought(5);
    game.addCross(2);
    game.addNought(3);
    game.addCross(7);
    game.addNought(4);
    game.addCross(6);
    game.addNought(9);
    game.addCross(8);
    const result = game.checkWin();
    assert.strictEqual(result, 'draw');
  });

});
