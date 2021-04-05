function capitalizeWords(text) {
  textArr = text.split(' ').map(word => word[0].toUpperCase() + word.substring(1));
  return textArr.join(' ');
}

console.log(capitalizeWords('launch school tech & talk'));
