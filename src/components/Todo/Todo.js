import React from "react";
import styles from "./Todo.module.css";
import { AiFillDelete } from "react-icons/ai";
import { RiEdit2Fill } from "react-icons/ri";
import { motion } from "framer-motion";

function Todo({ todo, id, deleteTodo, isDelete, hidden, handleEdit }) {
  function handleClick() {
    deleteTodo(id);
  }

  return (
    <>
      {isDelete ? (
        <div>
          <p className={styles.deletedTodoMsg}>Todo is Deleted</p>
        </div>
      ) : (
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -20 }}
          style={{ display: hidden && "none" }}
          className={styles.paragraph}
        >
          <p>{todo}</p>
          <div className={styles.delete__icon}>
            <RiEdit2Fill
              size={22}
              cursor="pointer"
              onClick={() => handleEdit(todo, id)}
            />
            <AiFillDelete size={22} cursor="pointer" onClick={handleClick} />
          </div>
        </motion.div>
      )}
    </>
  );
}

export default Todo;
