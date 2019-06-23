import React from 'react';

export default function Square(props) {
  let className = "square";
  if (props.highlighted) {
    className += " highlighted";
  }
  return (
    <button
      className={className}
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}
