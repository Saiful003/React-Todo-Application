import React from "react";
import styles from "./Input.module.css";

function Input({ type, value, onChange, placeholder }, ref) {
  return (
    <input
      ref={ref}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      className={styles.getTodo}
    />
  );
}

export default React.forwardRef(Input);
