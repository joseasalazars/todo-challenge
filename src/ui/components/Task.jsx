import React from "react";

const Task = (props) => (
  <li className="list-group-item">
    <div className="widget-content p-0">
      <div className="widget-content-wrapper">
        <div className="widget-content-left mr-2">
          <div className="">
            <label>
              <input
                style={{ marginRight: 15 }}
                onChange={() => console.log()}
                checked={props.done}
                disable={props.done.toString()}
                type="checkbox"
                value={props.task}
              />
              {props.task}
            </label>
          </div>
        </div>
      </div>
    </div>
  </li>
);

export default Task;
