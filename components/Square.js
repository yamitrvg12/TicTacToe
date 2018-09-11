import React from 'react';
import PropTypes from 'prop-types';

const Square = ({ val, onClick }) => {
  return (
    <button className="square" onClick={onClick}>
      {val}
    </button>
  );
};

Square.defaultProps = {
  val: '',
};

Square.propTypes = {
  val: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Square;
