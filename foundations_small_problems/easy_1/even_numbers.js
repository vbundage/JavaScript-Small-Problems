function isEven() {
  for (let counter = 1; counter <= 99; counter++) {
    if (counter % 2 === 1) continue;
    console.log(counter);
  }
}

isEven();