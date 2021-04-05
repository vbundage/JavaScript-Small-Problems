function logInBox(text, maxWidth = text.length) {
  let borderLine = `+-${'-'.repeat(maxWidth)}-+`;
  let insideLine = `| ${' '.repeat(maxWidth)} |`;

  console.log(borderLine);
  console.log(insideLine);
  console.log(`| ${text.slice(0, maxWidth)} |`);
  console.log(insideLine);
  console.log(borderLine);
}

logInBox('a');
logInBox('');
logInBox('To boldly go where no one has gone before.');
logInBox('To boldly go where no one has gone before.', 15);
