// Determine what the following code snippet logs. First solve it in your head or
// on paper, and only then run it in your JavaScript console to check the result.

// This will log true to the console
let speed = 0;
let acceleration = 24;
let brakingForce = 19;

let isMoving = brakingForce < acceleration && (speed > 0 || acceleration > 0);

console.log(isMoving);

// Bonus question: Do we need the parentheses in the boolean expression or could
// we also have written the following?

// The parantheses are needed. The logical && will evaluate before the logical ||
let isMoving = brakingForce < acceleration && speed > 0 || acceleration > 0;
