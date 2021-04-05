let staggerAll = function(text) {
  return text.split('')
              .map((char, idx) => {
                if (idx % 2 === 0) {
                  return char.toUpperCase();
                } else {
                  return char.toLowerCase();
                }
              })
              .join('');
};

let staggerAlphabeticOnly = function(text) {
  let toUpperCase = true;

  return text.split('')
              .map((char) => {
                if (/[^a-z]/i.test(char)) return char;
                if (toUpperCase) {
                  toUpperCase = !toUpperCase;
                  return char.toUpperCase();
                } else {
                  toUpperCase = !toUpperCase;
                  return char.toLowerCase();
                }
              })
              .join('');
};

let staggeredCase = function(text, nonAlphabeticCounts = true) {
  if (nonAlphabeticCounts) {
    return staggerAll(text);
  } else {
    return staggerAlphabeticOnly(text);
  }
};

console.log(staggeredCase("I Love Launch School!", false) === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS", false) === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers", false) === "IgNoRe 77 ThE 444 nUmBeRs"
);


console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 NuMbErS"