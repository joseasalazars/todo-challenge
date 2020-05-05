import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TaskList from "../components/TaskList";
import NewTask from "../components/NewTask";

const toDoTasks = [];
const doneTasks = [];

function Tasks() {
  const [toDoTasks, setTodos] = useState(["Learn Hooks", "l", "lo"]);
  const [doneTasks, setDones] = useState(["Learn Hooks", "l", "lo"]);

  const addTask = (value) => {
    setTodos([...toDoTasks, value]);
  };

  return (
    <Container>
      <div className="task-container">
        <h1>To-Do List</h1>
        <NewTask addTask={addTask} />
      </div>

      <ul className="list-unstyled" id="todo"></ul>

      <TaskList title={"To Do Task List"} tasks={toDoTasks} done={false} />
      <TaskList title={"Done List"} tasks={doneTasks} done={true} />
    </Container>
  );
}

export default Tasks;
