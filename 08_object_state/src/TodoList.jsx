import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [todos, setTodos] = useState([
    { task: "sample task", id: uuidv4(), isDone: true },
  ]);
  let [newTodo, setNewTodo] = useState("");

  let updateValue = (event) => {
    setNewTodo(event.target.value);
  };

  let addTask = () => {
    setTodos((preTodos) => {
      return [...preTodos, { task: newTodo, id: uuidv4() }];
    });
    setNewTodo("");
  };

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id != id));
  }

  let upperCaseAll = () => {
    setTodos((todos) => {
      return todos.map((todo) => {
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      });
    });
  };

  let upperCaseOne = (id) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, task: todo.task.toUpperCase() };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <div>
      <input
        style={{ height: "2rem", fontSize: "1.5rem" }}
        type='text'
        placeholder='add task...'
        onChange={updateValue}
        value={newTodo}
      />
      <button onClick={addTask}>Add To</button>
      <h3>TODO LIST</h3>
      <hr />
      <ul>
        {todos.map((todo) => (
          <>
            <li key={todo.id}>
              <span>{todo.task}</span>
              &nbsp;&nbsp;&nbsp;
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
              <button
                onClick={() => {
                  upperCaseOne(todo.id);
                }}>
                UpperCaseOne
              </button>
            </li>
          </>
        ))}
      </ul>

      <button onClick={upperCaseAll}>UpperCaseAll</button>
    </div>
  );
}
