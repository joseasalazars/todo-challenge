import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TaskList from "../components/TaskList";
import NewTask from "../components/NewTask";

const toDoTasks = [];
const doneTasks = [];

function Tasks() {
  const [toDoTasks, setTodos] = useState(["Learn Hooks", "l", "lo"]);
  const [doneTasks, setDones] = useState([]);

  const addTask = (value) => {
    setTodos([...toDoTasks, value]);
  };

  const addDoneTask = (value) => {
    setDones([...doneTasks, value]);
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
