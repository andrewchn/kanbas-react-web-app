import React, { useEffect, useState } from "react";
import "./index.css";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { addModule, deleteModule, updateModule, setModule, setModules } from "./reducer";
import { KanbasState } from "../../store";
import { findModulesForCourse, createModule  } from "./client";
import * as client from "./client";

function ModuleList() {
  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };

  const handleDeleteModule = (moduleId: string) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

  const { courseId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [courseId]);

  const handleAddModule = () => {
    createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };

  const modulesList = useSelector(
    (state: KanbasState) => state.modulesReducer.modules
  );
  const module = useSelector(
    (state: KanbasState) => state.modulesReducer.module
  );

  const [selectedModule, setSelectedModule] = useState(modulesList[0]);
  return (
    <div className="module-list">
      <div className="assignments-options">
        <button type="button" className="btn btn-secondary module-button">
          Collapse All
        </button>
        <button type="button" className="btn btn-secondary module-button">
          View Progress
        </button>
        <button
          className="btn btn-secondary dropdown-toggle module-button"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Publish All
        </button>
        <button type="button" className="btn btn-secondary module-button">
          <FaEllipsisV className="me-2" />
        </button>

        <div className="">
          <button
            className="btn btn-danger module-button"
            onClick={handleAddModule}
          >
            Add
          </button>
          <button
            className="btn btn-danger module-button"
            onClick={handleUpdateModule}
          >
            Update
          </button>

          <input
            className="form-control"
            value={module.name}
            onChange={(e) =>
              dispatch(setModule({ ...module, name: e.target.value }))
            }
          />
          <textarea
            className="form-control"
            value={module.description}
            onChange={(e) =>
              dispatch(setModule({ ...module, description: e.target.value }))
            }
          />
        </div>
      </div>{" "}
      <ul className="list-group wd-modules">
      {modulesList
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li key={index} className="list-group-item">
            <button
              onClick={() => dispatch(setModule(module))}>
              Edit
            </button>
            <button
              onClick={() => dispatch(deleteModule(module._id))}>
              Delete
            </button>
            <h3>{module.name}</h3>
            <p>{module.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ModuleList;
