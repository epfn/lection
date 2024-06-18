import { useState } from "react";
import styles from './input.module.css'

export default function InputReact({ label }) {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <label className={styles.label}>{label}</label>
      <input type="text" value={value} onChange={handleChange} />
      <p>Value: {value}</p>
    </div>
  );
}
