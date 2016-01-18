var React = require('react'),
    ReactDOM = require('react-dom'),
    Tile = require('./tile');

var Board = React.createClass({
  render: function () {

    var self = this;
    var board = this.props.board.grid.map(function (row, rowIdx) {
      var newRow = row.map(function (tile, tileIdx) {

        return (<Tile updateGame={self.props.update}
                      tile={tile}
                      key={tileIdx}/>
        );
      });
      return <div className="row group" key={rowIdx}>{newRow}</div>;
    });

    if (this.props.board.won()) {
      alert("YOU WON!");
    } else if (this.props.board.lost()) {
      alert("YOU LOST! LOSER!");
    }
    return (
      <div className="board">{board}</div>
    );
  }
});

module.exports = Board;
