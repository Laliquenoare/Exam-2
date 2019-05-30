'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const xhr = new XMLHttpRequest();
  xhr.open(`GET`, 'http://my-json-server.typicode.com/mate-academy/literary-blog/articles');
  xhr.responseType = 'json';
  xhr.send();
  xhr.onload = function() {
    const container = document.querySelector('#article-list');
    const articleList = new ArticleList(container);
    const art = xhr.response;
    const close = document.querySelector('.close');
    for (let i = 0; i < art.length; i++) {
      articleList.addArticle(new Article(art[i].title, art[i].author, art[i].text));
      articleList.render(new Article(art[i].title, art[i].author, art[i].text));

    }
  };
});
