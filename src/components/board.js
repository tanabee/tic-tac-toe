import React from 'react';
import Square from './square.js'

export default class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  renderBoard() {
    const size = 3;
    return Array(size).fill(null).map((_, row) => {
      return (
        <div key={row} className="board-row">
          {
            Array(size).fill(null).map((_, col) => {
              return (<>{this.renderSquare(row * size + col)}</>);
            })
          }
        </div>
      );
    })
  }

  render() {
    return (
      <div>{this.renderBoard()}</div>
    );
  }
}
