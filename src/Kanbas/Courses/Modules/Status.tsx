function ModuleStatus() {
  return (
    <>
      <div className="module-status">
        <h3>Course Status</h3>
        <button type="button" className="btn btn-secondary mb-1">Unpublish</button>
        <button type="button" className="btn btn-secondary mb-1">Published</button>
        <ul>
          <li>
            <a href="#">
              <button type="button" className="btn btn-secondary mb-1">Import Existing Content</button>
            </a>
          </li>
          <li>
            <a href="#">
              <button type="button" className="btn btn-secondary mb-1">Import From Commons</button>
            </a>
          </li>
          <li>
            <a href="#">
              <button type="button" className="btn btn-secondary mb-1">Choose Home Page</button>
            </a>
          </li>
          <li>
            <a href="#">
              <button type="button" className="btn btn-secondary mb-1">View Course Stream</button>
            </a>
          </li>
          <li>
            <a href="#">
              <button type="button" className="btn btn-secondary mb-1">New Announcement</button>
            </a>
          </li>
          <li>
            <a href="#">
              <button type="button" className="btn btn-secondary mb-1">New Analytics</button>
            </a>
          </li>
          <li>
            <a href="#">
              <button type="button" className="btn btn-secondary mb-1">View Course Notifications</button>
            </a>
          </li>
        </ul>
        <h2>Coming Up</h2>
        <a href="#">
          <button type="button" className="btn btn-secondary mb-1">View Calendar</button>
        </a>
        <ul>
          <li>
            <a href="#"> Lecture 1</a>
          </li>
          <li>
            <a href="#"> Lecture 2</a>
          </li>
          <li>
            <a href="#"> Lecture 3</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default ModuleStatus;