import React, { useContext, useReducer } from "react";
import { ACTIONS, initialState, reducer } from "../reducer/TodoReducer";

const todoContext = React.createContext();

export function useTodoContext() {
  return useContext(todoContext);
}
export function TodoContextProvider({ children }) {
  const [{ todos }, dispatch] = useReducer(reducer, initialState);

  //helper function
  function handleSetState(stateChanger) {
    stateChanger(true);
    setTimeout(() => {
      stateChanger(false);
    }, 1000);
  }
  // forwarded function just call dispatch function with parameter
  function forwardedAddTodo(todo, setTodoInputValue, setIsAddedToast) {
    if (todo === "") return;
    handleSetState(setIsAddedToast);
    setTodoInputValue("");
    dispatch({ type: ACTIONS.ADD_TODO, payload: { todo } });
  }
  function forwardedDeleteTodo(id, setIsOpen) {
    handleSetState(setIsOpen);
    dispatch({ type: ACTIONS.DELETE_TODO, payload: { id } });
  }
  const value = { forwardedAddTodo, todos, forwardedDeleteTodo };
  return <todoContext.Provider value={value}>{children}</todoContext.Provider>;
}
