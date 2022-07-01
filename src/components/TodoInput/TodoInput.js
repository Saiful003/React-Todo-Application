import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import Form from "../Form/Form";
import Input from "../Input/Input";
import styles from "./TodoInput.module.css";

function TodoInput(
  { addTodo, todoInputValue, setTodoInputValue, buttonRef },
  ref
) {
  function handleSubmit(e) {
    e.preventDefault();
    addTodo({ todo: todoInputValue });
  }

  function handleChange(value) {
    setTodoInputValue(value);
  }

  return (
    <div>
      <Form handleSubmit={handleSubmit}>
        <Input
          value={todoInputValue}
          type="text"
          onChange={handleChange}
          placeholder="Write down your todo here!"
          ref={ref}
        />
        <Button type="submit">{buttonRef.current} </Button>
      </Form>
    </div>
  );
}

export default React.forwardRef(TodoInput);
