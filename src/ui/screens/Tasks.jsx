import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TaskList from "../components/TaskList";

const toDoTasks = [];
const doneTasks = [];

function Tasks() {
  const [toDoTasks, setTodos] = useState(["Learn Hooks"]);
  const [doneTasks, setDones] = useState(["Learn Hooks"]);

  return (
    <Container>
      <div className="form-group">
        <h1>
          To-Do <small>List</small>
        </h1>
        <form role="form">
          <input
            type="text"
            className="form-control"
            placeholder="New Task"
            name="task"
          />
        </form>
        <button type="button" className="btn btn btn-primary">
          Add
        </button>
      </div>
      <div></div>
      <ul className="list-unstyled" id="todo"></ul>

      <TaskList title={"To Do Task List"} tasks={toDoTasks} done={false} />
      <TaskList title={"Done List"} tasks={doneTasks} done={true} />
    </Container>
  );
}

export default Tasks;
