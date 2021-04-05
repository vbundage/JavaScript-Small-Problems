function cleanUp(text) {
  let pattern = /[^a-z]+/gi;
  text = text.replace(pattern, ' ');
  return text;
}

console.log(cleanUp("---what's my +*& line?"));