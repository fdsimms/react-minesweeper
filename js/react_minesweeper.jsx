var React = require('react'),
    ReactDOM = require('react-dom'),
    Minesweeper = require('./minesweeper-core');
    Game = require('./components/game');


document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Game />, document.getElementById('main'));
});
