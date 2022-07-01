import React, { useState } from "react";
import Input from "../Input/Input";

function TodoSearch({ searchValue, serachTodo }) {
  return (
    <Input
      type="text"
      value={searchValue}
      placeholder="Search your existing todo.."
      onChange={serachTodo}
    />
  );
}

export default TodoSearch;
