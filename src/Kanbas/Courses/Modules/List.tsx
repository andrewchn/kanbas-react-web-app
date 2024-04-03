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
        {
        modulesList
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li
              key={index}
              className="list-group-item"
              onClick={() => setSelectedModule(module)}
            >
              <div className="module-modifiers">
                <button
                  type="button"
                  className="module-mod-btn"
                  onClick={() => handleDeleteModule(module._id)}
                >
                  Delete
                </button>
                <button
                  type="button"
                  className="module-mod-btn"
                  onClick={() => dispatch(setModule(module))}
                >
                  Edit
                </button>
              </div>
              <div>
                <FaEllipsisV className="me-2" />
                {module.name}
                <span className="float-end">
                  <FaCheckCircle className="text-success" />
                  <FaPlusCircle className="ms-2" />
                  <FaEllipsisV className="ms-2" />
                </span>
              </div>
              {selectedModule._id === module._id && (
                <ul className="list-group">
                  {module.lessons?.map(
                    (
                      lesson: {
                        name:
                          | string
                          | number
                          | boolean
                          | React.ReactElement<
                              any,
                              string | React.JSXElementConstructor<any>
                            >
                          | Iterable<React.ReactNode>
                          | React.ReactPortal
                          | null
                          | undefined;
                      },
                      index: React.Key | null | undefined
                    ) => (
                      <li className="list-group-item" key={index}>
                        <FaEllipsisV className="me-2" />
                        {lesson.name}
                        <span className="float-end">
                          <FaCheckCircle className="text-success" />
                          <FaEllipsisV className="ms-2" />
                        </span>
                      </li>
                    )
                  )}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
}
export default ModuleList;
