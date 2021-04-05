/* eslint-disable max-lines-per-function */
"use strict";

const languages = [
  {
    name: 'Ruby',
    description: 'Ruby is a dynamic, reflective, object-oriented, ' +
    'general-purpose programming language. It was designed and developed in the mid-1990s ' +
    'by Yukihiro Matsumoto in Japan. According to its creator, Ruby was influenced by Perl, ' +
    'Smalltalk, Eiffel, Ada, and Lisp. It supports multiple programming paradigms, ' +
    'including functional, object-oriented, and imperative. It also has a dynamic type ' +
    'system and automatic memory management.'
  },

  {
    name: 'JavaScript',
    description: 'JavaScript is a high-level, dynamic, untyped, and interpreted ' +
    'programming language. It has been standardized in the ECMAScript language ' +
    'specification. Alongside HTML and CSS, JavaScript is one of the three core ' +
    'technologies of World Wide Web content production; the majority of websites employ ' +
    'it, and all modern Web browsers support it without the need for plug-ins. JavaScript ' +
    'is prototype-based with first-class functions, making it a multi-paradigm language, ' +
    'supporting object-oriented, imperative, and functional programming styles.'
  },

  {
    name: 'Lisp',
    description: 'Lisp (historically, LISP) is a family of computer programming languages ' +
    'with a long history and a distinctive, fully parenthesized prefix notation. ' +
    'Originally specified in 1958, Lisp is the second-oldest high-level programming ' +
    'language in widespread use today. Only Fortran is older, by one year. Lisp has changed ' +
    'since its early days, and many dialects have existed over its history. Today, the best '+
    'known general-purpose Lisp dialects are Common Lisp and Scheme.'
  },

  {
    name: "Python",
    description: 'Python is a programming language that lets you work quickly and integrate systems more effectively.'
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const shortDescription = text => {
    const shortText = text.slice(0, 120);
    return text.length > 120 ? shortText.concat(' ...') : shortText;
  };

  const getLanguageDescription = textName => {
    return languages.filter(obj => obj.name === textName)[0].description;
  };

  const languagesTemplate = Handlebars
    .compile(document.getElementById('languages-template').innerHTML);

  Handlebars.registerHelper('short', shortDescription);
  Handlebars.registerHelper('isLong', text => {
    return text.length > 120;
  });

  document.getElementById('languages')
    .insertAdjacentHTML('beforeend', languagesTemplate({ languages }));

  document.getElementById('languages').addEventListener('click', event => {
    if (event.target.tagName === 'A') {
      const anchor = event.target;
      const article = anchor.closest('article');
      const paragraph = article.querySelector('p');
      const languageName = article.dataset.name;

      if (anchor.classList.contains('show-less')) {
        anchor.textContent = 'Show Less';
        paragraph.textContent = getLanguageDescription(languageName);
      } else {
        anchor.textContent = 'Show More';
        paragraph.textContent = shortDescription(
          getLanguageDescription(languageName));
      }

      anchor.classList.toggle('show-less');
    }
  });
});