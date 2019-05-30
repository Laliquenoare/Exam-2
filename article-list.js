'use strict';

class ArticleList {
  constructor(container) {
    this.container = container;
    this.arr = [];
  }
  addArticle(article) {
    this.arr.push(article);
  }
  removeArticle(article) {
    const index = this.arr.indexOf(article);
    this.arr.splice(index, 1);
  }
  render(article) {
    const articlesBlock = document.createElement('div');
    const elTitle = document.createElement('h1');
    elTitle.textContent = article.title;
    const elAuthor = document.createElement('h3');
    elAuthor.textContent = article.author;
    const elText = document.createElement('p');
    elText.textContent = article.text.replace(/<\/?[^>]+>/g, '');
    const close = document.createElement('a');
    close.textContent = 'X';
    close.classList.add('close');

    articlesBlock.append(elTitle);
    articlesBlock.append(elAuthor);
    articlesBlock.append(elText);
    articlesBlock.append(close);

    this.container.append(articlesBlock);
    close.addEventListener('click', function() {
      console.log(this.target);
      // this.arr.splice(this.arr.indexOf(article), 1);
    });
  }
};
