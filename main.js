'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const requestURL = 'http://my-json-server.typicode.com/mate-academy/literary-blog/articles';
  const request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();

  request.onload = function() {
    const art = request.response;

  }
});
