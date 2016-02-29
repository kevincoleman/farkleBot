function Die() {

  this.sides = 6;
  this.value = null;
  this.quantity = null;

  this.setSides = function(sides) {
    this.sides = sides;
  }

  this.getSides = function() {
    console.log(this.sides);
  }

  this.setValue = function(value) {
    this.value = value;
  }

  this.getValue = function() {
    console.log(this.value);
  }

  this.roll = function() {
    this.value = Math.floor(Math.random() * this.sides +1);
  }

}

module.exports = Die;
