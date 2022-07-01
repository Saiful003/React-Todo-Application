import React from "react";
import styles from "./Form.module.css";

function Form({ children, handleSubmit }) {
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {children}
    </form>
  );
}

export default Form;
