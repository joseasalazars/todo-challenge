import React from "react";
import { Row, Col } from "react-bootstrap";

function NewTask(props) {
  const addNewTask = (value) => {
    if (value !== "") {
      props.addTask(value);
      document.getElementById("newTask").value = "";
    }
  };

  return (
    <Row className="justify-content-md-center">
      <Col xs={5}>
        <input
          type="text"
          className="form-control"
          placeholder="New Task"
          name="task"
          id="newTask"
        />
      </Col>
      <Col xs={1}>
        <button
          type="button"
          className="btn btn btn-primary"
          onClick={() => addNewTask(document.getElementById("newTask").value)}
        >
          Add
        </button>
      </Col>
    </Row>
  );
}

export default NewTask;
