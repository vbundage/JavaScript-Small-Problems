"use strict";

const MAIN_CLASS = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Fred', 'Ginny',
  'Harriet', 'Ileana', 'Joseph', 'Kincaid', 'Larry'];

const PLANT_TYPES = {
  R: "radishes",
  C: "clover",
  G: "grass",
  V: "violets"
};

class Garden {
  constructor(diagram, newClass) {
    if (newClass) newClass.sort();
    let rows = diagram.split('\n');

    let rowIdx = 0;
    (newClass || MAIN_CLASS).forEach(student => {
      this[student.toLowerCase()] = rows[0].slice(rowIdx, rowIdx + 2)
        .concat(rows[1].slice(rowIdx, rowIdx + 2))
        .split('')
        .map(plant => PLANT_TYPES[plant]);
      rowIdx += 2;
    });
  }
}

module.exports = Garden;