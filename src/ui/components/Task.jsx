import React from "react";

const Task = (props) => (
  <li className="list-group-item">
    <div className="widget-content p-0">
      <div className="widget-content-wrapper">
        <div className="widget-content-left mr-2">
          <div className="custom-checkbox custom-control">
            <input
              className="custom-control-input"
              id="exampleCustomCheckbox12"
              type="checkbox"
            />
            <label
              className="custom-control-label"
              for="exampleCustomCheckbox12"
            ></label>
          </div>
        </div>
        <div className="widget-content-left">
          <div className="widget-heading">{props.task}</div>
        </div>
      </div>
    </div>
  </li>
);

export default Task;
