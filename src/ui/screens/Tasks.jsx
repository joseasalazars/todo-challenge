import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TaskList from "../components/TaskList";
import NewTask from "../components/NewTask";

const toDoTasks = [];
const doneTasks = [];

function Tasks() {
  const [toDoTasks, setTodos] = useState(["Learn Hooks", "l", "lo"]);
  const [doneTasks, setDones] = useState([]);

  useEffect(() => {
    console.log("HEY");
    var todoList =
      localStorage.getItem("toDoTasks") !== null
        ? JSON.parse(localStorage.getItem("toDoTasks"))
        : [];
    var doneList =
      localStorage.getItem("doneTasks") !== null
        ? JSON.parse(localStorage.getItem("doneTasks"))
        : [];
    setTodos(todoList);
    setDones(doneList);
  }, []);

  const addTask = (value) => {
    var array = [...toDoTasks, value];
    array.sort(function (a, b) {
      if (a.toLowerCase() > b.toLowerCase()) {
        return 1;
      }
      if (b.toLowerCase() > a.toLowerCase()) {
        return -1;
      }
      return 0;
    });
    localStorage.setItem("toDoTasks", JSON.stringify(array));
    setTodos(array);
  };

  const addDoneTask = (value) => {
    var toDoArr = toDoTasks;
    for (var i = 0; i < toDoArr.length; i++) {
      if (toDoArr[i] === value) {
        toDoArr.splice(i, 1);
        break;
      }
    }
    localStorage.setItem("toDoTasks", JSON.stringify(toDoArr));
    setTodos(toDoArr);

    var array = [...doneTasks, value];
    array.sort(function (a, b) {
      if (a.toLowerCase() > b.toLowerCase()) {
        return 1;
      }
      if (b.toLowerCase() > a.toLowerCase()) {
        return -1;
      }
      return 0;
    });
    localStorage.setItem("doneTasks", JSON.stringify(array));
    setDones(array);
  };

  return (
    <Container>
      <div className="task-container">
        <h1>To-Do List</h1>
        <NewTask addTask={addTask} />
      </div>

      <ul className="list-unstyled" id="todo"></ul>

      <TaskList
        title={"To Do Task List"}
        tasks={toDoTasks}
        done={false}
        addDoneTask={addDoneTask}
      />
      <TaskList title={"Done List"} tasks={doneTasks} done={true} />
    </Container>
  );
}

export default Tasks;
