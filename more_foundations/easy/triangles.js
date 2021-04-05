"use strict";

class Triangle {
  constructor(side1, side2, side3) {
    this.sides = [side1, side2, side3].sort((a, b) => a - b);
  }

  isValidTriangle(side1, side2, side3) {
    if ((side1 === 0) || (side1 + side2) < side3) {
      throw new Error("Invalid triangle");
    }
  }
  
  kind() {
    let [ side1, side2, side3 ] = this.sides;
    this.isValidTriangle(side1, side2, side3);

    if (side1 === side2 && side2 === side3) {
      return 'equilateral'
    } else if (side1 === side2 || side2 === side3) {
      return 'isosceles';
    } else {
      return 'scalene';
    }
  }
}

module.exports = Triangle;