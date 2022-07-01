import { useEffect, useRef, useState } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import TodoArea from "./components/TodoArea/TodoArea";
import TodoInput from "./components/TodoInput/TodoInput";
import { v4 as uuidv4 } from "uuid";
import TodoSearch from "./components/TodoSearch/TodoSearch";
import Button from "./components/Button/Button";

function getLocalStroageData() {
  const localTodos = localStorage.getItem("todos");
  return localTodos ? JSON.parse(localTodos) : [];
}

function App() {
  //application state
  const [isAddedToast, setIsAddedToast] = useState(false);
  const [todoInputValue, setTodoInputValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [todos, setTodos] = useState(getLocalStroageData());

  const currentIdRef = useRef();
  const inputRef = useRef();
  const buttonRef = useRef("Add");
  const isUpdate = useRef(false);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // add todo function
  function addTodo(mytodo) {
    const currentTodosArray = [...todos];
    if (todoInputValue === "") return alert("Please insert your todo first.");

    const result = currentTodosArray.findIndex(({ id }) => {
      return id === currentIdRef.current;
    });

    if (result >= 0) {
      const item = { ...currentTodosArray[result] };
      item.todo = mytodo.todo;
      currentTodosArray[result] = item;
      currentIdRef.current = "";
      buttonRef.current = "Add";
      isUpdate.current = true;
    }

    if (result < 0) {
      currentTodosArray.unshift({ ...mytodo, id: uuidv4() });
      isUpdate.current = false;
    }

    setTodos(currentTodosArray);
    setTodoInputValue("");
    setIsAddedToast(true);
    setTimeout(() => {
      setIsAddedToast(false);
    }, 1000);
  }
  // delete todo function
  function deleteTodo(id) {
    const currentTodosArray = [...todos];
    const currentIndex = currentTodosArray.findIndex((todo) => todo.id === id);
    const currentItem = {
      ...currentTodosArray[currentIndex],
      isDelete: true,
    };
    currentItem.todo = "Your Todo is Deleted";
    currentTodosArray[currentIndex] = currentItem;
    setTodos(currentTodosArray);

    setTimeout(() => {
      const filterdTodo = currentTodosArray.filter((todo) => todo.id !== id);
      setTodos(filterdTodo);
    }, 1000);
  }

  // search functionallity
  function serachTodo(value) {
    const workingTodos = [...todos];

    const searchResult = workingTodos.map((todo) => {
      if (todo.todo.startsWith(value) || todo.todo.includes(value)) {
        return { ...todo, hidden: false };
      }
      return {
        ...todo,
        hidden: true,
      };
    });

    if (todos.length === 0)
      return alert("Your todo list is empty.Please insert at least one todo");
    //must do it
    // change the state to show the effect in the browser
    setSearchValue(value);
    setTodos(searchResult);
  }
  function todoMatcher() {
    return todos.every(({ hidden }) => hidden === true);
  }
  //edit functionality
  function handleEdit(todo, id) {
    currentIdRef.current = id;
    buttonRef.current = "Save";
    setTodoInputValue(todo);
    inputRef.current.focus();
  }
  // delete all todos
  function delelteAll() {
    setTodos([]);
  }

  // side effect
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="App">
      <>
        <Layout>
          <TodoInput
            ref={inputRef}
            buttonRef={buttonRef}
            addTodo={addTodo}
            todoInputValue={todoInputValue}
            setTodoInputValue={setTodoInputValue}
          />
          <TodoSearch searchValue={searchValue} serachTodo={serachTodo} />
          <Button onClick={delelteAll}> Delete all </Button>
          <TodoArea
            todos={todos}
            deleteTodo={deleteTodo}
            isAddedToast={isAddedToast}
            todoMatcher={todoMatcher}
            handleEdit={handleEdit}
            isUpdate={isUpdate}
          />
        </Layout>
      </>
    </div>
  );
}

export default App;
