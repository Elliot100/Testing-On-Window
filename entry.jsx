import React from 'react';
import ReactDOM from 'react-dom';
import TestIndex from './frontend/test_index';


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  let image = <img src="https://i.imgur.com/Z4LmjYu.jpg" />;


  ReactDOM.render(<TestIndex/>, root);
});