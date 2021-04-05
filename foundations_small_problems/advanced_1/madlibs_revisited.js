let madlibs = function(template) {
  const REPLACEMENTS = {
    adjective: ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'],
    noun: ['fox', 'dog', 'head', 'leg', 'tail', 'cat'],
    verb: ['jumps', 'lifts', 'bites', 'licks', 'pats'],
    adverb: ['easily', 'lazily', 'noisily', 'excitedly']
  };

  // LS solution
  return template.split(' ').map(word => {
    if (word.match(/\{\w+\}/)) {
      let wordType = RegExp(/\w+/).exec(word);
      let rndIndex = Math.floor(Math.random() * REPLACEMENTS[wordType].length);
      return REPLACEMENTS[wordType][rndIndex];
    }
      return word;
    }).join(' ');
};

// My solution
// return template.split(' ').map(word => {
//   if (word.match(/\{\w+\}/)) {
//     let wordType = RegExp(/\w+/).exec(word);
//     let rndIndex = Math.floor(Math.random() * REPLACEMENTS[wordType].length);
//     return REPLACEMENTS[wordType][rndIndex];
//   }
//     return word;
//   }).join(' ');

let template1 = "The %{adjective} brown %{noun} %{adverb} %{verb} the %{adjective}" +
            " yellow %{noun}, who %{adverb} %{verb} his %{noun} and looks around.";

let template2 = "The %{noun} %{verb} the %{noun}'s %{noun}.";

console.log(madlibs(template1));
console.log();
console.log(madlibs(template2));