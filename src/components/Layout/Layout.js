import React from "react";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.todo__title}>TODO APP</h2>
      {children}
    </div>
  );
}

export default Layout;
