import React from 'react';
import propTypes from 'prop-types';
import styles from './cell.module.css';

export default function Cell(props) {
  const { row, col, onClick } = props;

  function handleClick() {
    onClick(row, col);
  }
  return (
    <div className={styles.cell} onClick={handleClick} />
  );
}

Cell.propTypes = {
  row: propTypes.number.isRequired,
  col: propTypes.number.isRequired,
  onClick: propTypes.func.isRequired,
};
