import { v4 as uuidv4 } from "uuid";

export const ACTIONS = {
  ADD_TODO: "addTodo",
  DELETE_TODO: "deleteTodo",
};

export const initialState = {
  todos: [],
};
function handleAddTodo(state, action) {
  const newTodosArray = [...state.todos];
  newTodosArray.unshift({ ...action.payload, id: uuidv4() });
  return {
    ...state,
    todos: newTodosArray,
  };
}
function handleDeleteTodo(state, action) {
  const newTodosArray = [...state.todos];

  // filter here
  const filteredTodo = newTodosArray.filter(
    (todo) => todo.id !== action.payload.id
  );

  return {
    ...state,
    todos: filteredTodo,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO: {
      return handleAddTodo(state, action);
    }
    case ACTIONS.DELETE_TODO: {
      return handleDeleteTodo(state, action);
    }
  }
}
