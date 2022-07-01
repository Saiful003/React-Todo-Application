import React from "react";
import Todo from "../Todo/Todo";
import styles from "./TodoArea.module.css";

function TodoArea({
  todos,
  deleteTodo,
  isAddedToast,
  todoMatcher,
  handleEdit,
  isUpdate,
}) {
  return (
    <>
      {isAddedToast && (
        <p className={styles.addedTodoMsg}>
          {isUpdate.current ? "Todo is Updated!" : "Todo is Added!"}
        </p>
      )}
      {todos.length === 0 && (
        <h2 style={{ color: "#fff", textAlign: "center", marginTop: "1em" }}>
          No more todo here!
        </h2>
      )}
      <div>
        {todos.map(({ todo, id, isDelete, hidden }) => (
          <Todo
            key={id}
            todo={todo}
            id={id}
            deleteTodo={deleteTodo}
            isDelete={isDelete}
            hidden={hidden}
            handleEdit={handleEdit}
            isUpdate={isUpdate}
          />
        ))}

        {todos.length !== 0 && todoMatcher() ? (
          <h2 style={{ color: "#fff" }}>Not found</h2>
        ) : null}
      </div>
    </>
  );
}

export default TodoArea;
