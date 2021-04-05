function calculateBMI(height_cm, weight_kg) {
  let height_m = height_cm / 100;
  let bmi = weight_kg / (height_m**2);

  return bmi.toFixed(2);
}

console.log(calculateBMI(180, 80)); // 24.69
