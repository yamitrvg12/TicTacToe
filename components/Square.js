import React from 'react';

const Square = ({ val, onClick }) => {
  return (
    <button className="square" onClick={onClick}>
      {val}
    </button>
  );
};

export default Square;
