'use strict';

class Article {
  constructor(title, author, text) {
    this.title = title;
    this.author = author;
    this.text = text;
  }
  matches(query) {
    if (this.title.indexOf(query) !== -1) {
      return true;
    }

    if (this.author.indexOf(query) !== -1) {
      return true;
    }

    if (this.text.indexOf(query) !== -1) {
      return true;
    }

    return false;
  }
};
