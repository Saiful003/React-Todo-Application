import React from "react";
import styles from "./Button.module.css";
import { motion } from "framer-motion";

function Button({ children, type, ...rest }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      className={styles.addTodo}
      type={type}
      {...rest}
    >
      {children}
    </motion.button>
  );
}

export default Button;
