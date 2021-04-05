let letterPercentages = function(string) {

  let calculatePercentage = function(regex) { // lexical scope(inner function)
    let result = string.match(regex) || [];
    return (result.length / string.length * 100).toFixed(2);;
  }

  let percentages = {
    lowercase: calculatePercentage(/[a-z]/g),
    uppercase: calculatePercentage(/[A-Z]/g),
    neither: calculatePercentage(/[^a-z]/gi)
  };

  return percentages;
};



console.log(letterPercentages('abCdef 123'));
console.log(letterPercentages('AbCd +Ef'));
console.log(letterPercentages('123'));
