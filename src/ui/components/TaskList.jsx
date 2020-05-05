import React from "react";
import Task from "./Task";

const tasks = [];

const TaskList = (props) => (
  <div className="row d-flex justify-content-center container task-container">
    <div className="col-md-8">
      <div className="card-hover-shadow-2x mb-3 card">
        <div className="card-header-tab card-header">
          <div className="card-header-title font-size-lg text-capitalize font-weight-normal">
            <i className="fa fa-tasks"></i>
            {props.title}
          </div>
        </div>
        <div className="ps ps--active-y">
          <div className="ps-content">
            <ul className=" list-group list-group-flush">
              {props.tasks.length > 0 ? (
                props.tasks.map((task, index) => (
                  <Task task={task} key={index} />
                ))
              ) : (
                <i>
                  {props.done
                    ? "No tasks have been done this week."
                    : "No tasks for this week."}
                </i>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TaskList;
