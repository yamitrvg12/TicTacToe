import React from 'react';
import PropTypes from 'prop-types';

const Square = ({ val, onClick }) => {
  return (
    <button className="square" onClick={onClick}>
      {val}
    </button>
  );
};

Square.propTypes = {
  val: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Square;
