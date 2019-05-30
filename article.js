'use strict';

class Article {
  constructor(title, author, text) {
    this.title = title;
    this.author = author;
    this.text = text;
    this.createArt = function(jsonObj) {
      const container = document.createElement('div');
      const titlh1 = document.createElement('h1');
      titlh1.textContent = `title: ${this.title}`;
      container.appendChild(titlh1);

      const authorSpan = document.createElement('span');
      authorSpan.textContent = `author: ${this.author}`;
      container.appendChild(authorSpan);

      const textP = document.createElement('p');
      textP.textContent = `text: ${this.text}`;
      container.appendChild(textP);
    };
  }

  // matches(query){

  // }
}

const article = new Article();

console.log(article);
