import { useState } from "react";
import styles from './input.module.css'

export default function InputReact({ label }) {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={styles.field}>
      <label className={styles.label}>{label}</label>
      <input className={styles.input} type="text" value={value} onChange={handleChange} />
      <p className={styles.text}>Value: {value}</p>
    </div>
  );
}
