import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [todoLast, settodoLast] = useState(
    JSON.parse(localStorage.getItem("todo-last")) || []
  );
  console.log(localStorage.getItem("todo-last"));
  const [task, setTask] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!task) {
      window.alert("pls enter your Task");
    }

    settodoLast((per) => [
      ...per,
      {
        id: Date.now(),
        mark: false,
        task,
      },
    ]);
    console.log(todoLast);
    localStorage.setItem("todo-last", JSON.stringify(todoLast));
    setTask("");
  };

  const update = (id) => {
    let data = todoLast.map((item) =>
      item.id === id
        ? { id: item.id, task: window.prompt(item.task), mark: item.mark }
        : item
    );
    localStorage.setItem("todo-last", JSON.stringify(data));
  };
  const Delete = (id) => {
    let data = todoLast.filter((item) => item.id !== id);
    localStorage.setItem("todo-last", data);
  };

  const markTask = (id, value) => {
    console.log(id, value);
    let data = todoLast.map((item) =>
      item.id === id ? { id: item.id, task: item.task, mark: value } : item
    );
    localStorage.setItem("todo-last", JSON.stringify(data));
  };

  return (
    <>
      <form onSubmit={submit}>
        <label htmlFor="task">enter your Task</label>
        <input
          type="text"
          name="task"
          id="task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      {todoLast.length > 0
        ? todoLast.map((item, index) => (
            <div>
              <input
                type="checkbox"
                name=""
                id=""
                checked={item.mark || false}
                onClick={(e) => markTask(item.id, e.target.checked)}
              />
              <p>{item?.task}</p>
              <button onClick={() => Delete(item.id)}>Deleted</button>
              <button onClick={() => update(item.id)}>update</button>
            </div>
          ))
        : "loading"}
    </>
  );
}

export default App;
