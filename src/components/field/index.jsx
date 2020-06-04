import React from 'react';
import propTypes from 'prop-types';
import styles from './field.module.css';
import Cell from '../cell';

export default function Field(props) {
  const { field, onClick } = props;
  return (
    <div className={styles.field}>
      <div className={styles.cells}>
        {field.map((row, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={i} className={styles.row}>
            {row.map((cell, j) => (
              // eslint-disable-next-line react/no-array-index-key
              <Cell key={j} row={i} col={j} onClick={onClick} data={cell} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

Field.propTypes = {
  field: propTypes.arrayOf(
    propTypes.arrayOf(
      propTypes.string,
    ),
  ).isRequired,
  onClick: propTypes.func.isRequired,
};
