import React from "react";
import {
  FaCheckCircle,
  FaEllipsisV,
  FaOptinMonster,
  FaPlusCircle,
  FaStickyNote,
} from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import "./index.css";

function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  return (
    <>
      <div className="assignments-options">
        <input
          type="text"
          className="form-control assignment-button"
          placeholder="Search Assignments"
        />
        <button type="button" className="btn btn-secondary assignment-button">
          + Group
        </button>
        <button type="button" className="btn btn-danger assignment-button">
          + Assignment
        </button>
        <button type="button" className="btn btn-secondary assignment-button">
          <FaEllipsisV className="me-2" />
        </button>
      </div>
      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div>
            <FaEllipsisV className="me-2" /> ASSIGNMENTS
            <span className="float-end">
              <FaCheckCircle className="text-success" />
              <FaPlusCircle className="ms-2" />
              <FaEllipsisV className="ms-2" />
            </span>
          </div>
          <ul className="list-group">
            {assignmentList.map((assignment) => (
              <li className="list-group-item">
                <FaEllipsisV className="me-2" />
                <FaStickyNote className="assignment-icon"/>
                <Link
                  to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                  className="assignment-link"
                >
                  {assignment.title}
                </Link>
                <span className="float-end">
                  <FaCheckCircle className="text-success" />
                  <FaEllipsisV className="ms-2" />
                </span>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </>
  );
}
export default Assignments;
