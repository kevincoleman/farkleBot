function PlayerTurn() {
  this.score = 0;
  this.changeScore = function(amount){
    return this.score += amount;
  }
  this.scratched = false;
}

module.exports = PlayerTurn;
