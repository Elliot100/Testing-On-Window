import React from 'react';
import ReactDOM from 'react-dom';
import {testMe} from './frontend/utility';


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  let image = <img src="https://i.imgur.com/Z4LmjYu.jpg" />;

  window.testMe = testMe;

  ReactDOM.render(image, root);
});