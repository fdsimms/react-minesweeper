var React = require('react'),
    ReactDOM = require('react-dom');

var Tile = React.createClass({
  handleClick: function (e) {
    var isFlagging;

    if (e.altKey) {
      isFlagging = true;
    } else {
      isFlagging = false;
    }


    this.props.updateGame(this.props.tile, isFlagging);
  },

  render: function () {

    var className,
        content;

    if (this.props.tile.bombed && this.props.tile.explored) {
      content = "💣";
      className = "explored bombed tile";
    } else if (this.props.tile.explored) {
      content = this.props.tile.adjacentBombCount();
      className = "explored tile";
    } else if (this.props.tile.flagged) {
      content = "⚑";
      className = "flagged unexplored tile";
    } else {
      content = "";
      className = "unexplored tile";
    }
    return(<div onClick={this.handleClick} className={className}>{content}</div>);
  }
});

module.exports = Tile;
