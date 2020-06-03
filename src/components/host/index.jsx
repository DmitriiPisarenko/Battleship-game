import React, { useState, useEffect } from 'react';
import styles from './host.module.css';
import Field from '../field';

export default function Host() {
  const [field, updateField] = useState([]);
  useEffect(() => {
    const newField = new Array(11).fill(undefined).map(() => new Array(11).fill(undefined));
    updateField(newField);
  }, []);

  return (
    <div className={styles.container}>
      <div>
        <Field field={field} />
        <Field field={field} />
      </div>
      <div>
        <Field field={field} />
        <Field field={field} />
      </div>
    </div>
  );
}
