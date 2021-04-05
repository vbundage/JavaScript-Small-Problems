document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const ul = body.querySelector('ul');
  const main = body.querySelector('main');
  const articles = [...main.children].filter(child => child.tagName === 'ARTICLE');
  
  function highlight(element) {
    element.classList.add('highlight');
  }
  
  function unHighlight(element) {
    element.classList.remove('highlight');
  }
  
  function highlightElementOnly(element) {
    highlight(element);
    articles.forEach(article => {
      if (article !== element) unHighlight(article);
    });
  }
  
  ul.addEventListener('click', event => {
    event.stopPropagation();
    unHighlight(main);
    
    if (event.target.tagName === 'A') {
      let anchor = event.target;
      let article = document.querySelector(anchor.href.match(/#article-[0-9]+/)[0]);
      highlightElementOnly(article);
    }
  });

  document.addEventListener('click', () => {
    if (event.target.tagName === 'ARTICLE' || event.target.parentNode.tagName === 'ARTICLE') {
      let article = event.target.tagName === 'ARTICLE' ? event.target : event.target.parentNode;
      unHighlight(main);
      highlightElementOnly(article);
    } else {
      highlightElementOnly(main);
    }
  });
});