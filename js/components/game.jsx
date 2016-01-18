var React = require('react'),
    ReactDOM = require('react-dom');
    Minesweeper = require('../minesweeper-core');
    Board = require('./board');

    var Game = React.createClass({
      getInitialState: function () {
        var board = new Minesweeper.Board(10, 15);
        return { board: board };
      },

      updateGame: function (tile, isFlagging) {

        if (isFlagging) {
          tile.toggleFlag();
        } else {
          tile.explore();
        }

        this.setState({ board: this.state.board });
      },

      render: function () {

        return(
          <Board board={this.state.board} update={this.updateGame}/>
        );
      }
    });

module.exports = Game;
