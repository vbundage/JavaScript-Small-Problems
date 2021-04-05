function triangle(stars) {
  for (let counter = 1; counter <= stars; counter++) {
    console.log(`${' '.repeat(stars - counter)}${'*'.repeat(counter)}`);
  }
}

triangle(5);
triangle(9);
