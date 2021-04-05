function getAverageScore(scores) {
  return scores.reduce((acc, curr) => acc + curr) / scores.length;
}

function getGrade(...scores) {
  let mean = getAverageScore(scores);

  switch (true) {
    case mean >= 90:
      return "A";
    case mean >= 80:
      return "B";
    case mean >= 70:
      return "C";
    case mean >= 60:
      return "D";
    default:
      return "F";
  }
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"