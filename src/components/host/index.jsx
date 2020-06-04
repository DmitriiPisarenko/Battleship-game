import React, { useState, useEffect } from 'react';
import styles from './host.module.css';
import Field from '../field';
import Sidebar from '../sidebar';

export default function Host() {
  const [field, updateField] = useState([]);
  useEffect(() => {
    const newField = new Array(10).fill(undefined).map(() => new Array(10).fill(undefined));
    updateField(newField);
  }, []);

  function onCellClick(row, col) {
    const newField = field.slice();
    newField[row][col] = true;
    updateField(newField);
  }


  return (
    <div className={styles.container}>
      <div className={styles.fieldOne}>
        <Field field={field} onClick={onCellClick} />
        <Field field={field} onClick={onCellClick} />
        <Sidebar />
      </div>
      <div>
        <Field field={field} />
        <Field field={field} />
      </div>
    </div>
  );
}
