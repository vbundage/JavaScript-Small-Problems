"use strict";

class CustomSet {
  constructor(arr) {
    this.set = [];
    if (arr) {
      arr.forEach(elem => {
        if (!this.set.includes(elem)) this.set.push(elem);
      })
    }
  }

  getSet() {
    return this.set;
  }

  empty() {
    return this.set.length === 0;
  }

  contains(elem) {
    return this.set.includes(elem);
  }

  subset(otherSet) {
    let filtered = this.set.filter(elem => otherSet.contains(elem));
    return filtered.length === this.set.length;
  }

  disjoint(otherSet) {
    let filtered = this.set.filter(elem => otherSet.contains(elem));
    return filtered.length === 0;
  }

  eql(otherSet) {
    if (this.set.length !== otherSet.getSet().length) return false;
    for (let idx = 0; idx < this.set.length; idx += 1) {
      if (!(otherSet.getSet().indexOf(this.set[idx]) >= 0)) return false;
    }
    return true;
  }

  add(elem) {
    if (!this.set.includes(elem)) this.set.push(elem);
    return this;
  }

  intersection(otherSet) {
    let intersectedSet = new CustomSet();
    this.set.forEach(elem => {
      if (otherSet.contains(elem)) intersectedSet.add(elem);
    });
    return intersectedSet;
  }

  difference(otherSet) {
    let differenceSet = new CustomSet();
    this.set.forEach(elem => {
      if (!otherSet.contains(elem)) differenceSet.add(elem);
    });
    return differenceSet;
  }

  union(otherSet) {
    let unionSet = new CustomSet();
    this.set.forEach(elem => {
      unionSet.add(elem);
    });
    otherSet.getSet().forEach(elem => {
      unionSet.add(elem);
    });
    return unionSet;
  }
}

module.exports = CustomSet;