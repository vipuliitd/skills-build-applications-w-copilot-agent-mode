
function App() {
  return (
    <div className="App">
      {/* Bootstrap Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Octofit Tracker</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Activities</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Teams</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Leaderboard</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Workouts</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Bootstrap Heading */}
      <div className="container mt-5">
        <h1 className="display-4 mb-4">Welcome to Octofit Tracker</h1>
        {/* Bootstrap Card */}
        <div className="card mb-4">
          <div className="card-body">
            <h5 className="card-title">Track Your Fitness Journey</h5>
            <p className="card-text">Log activities, join teams, compete on leaderboards, and get personalized workout suggestions.</p>
            <a href="https://reactjs.org" className="btn btn-primary">Learn React</a>
          </div>
        </div>

        {/* Bootstrap Table Example */}
        <h2 className="mb-3">Sample Data Table</h2>
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Team</th>
              <th scope="col">Activity</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Ironman</td>
              <td>Marvel</td>
              <td>Running</td>
              <td><button className="btn btn-success btn-sm">View</button></td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Batman</td>
              <td>DC</td>
              <td>Cycling</td>
              <td><button className="btn btn-success btn-sm">View</button></td>
            </tr>
          </tbody>
        </table>

        {/* Bootstrap Modal Example */}
        <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#infoModal">
          Show Info Modal
        </button>
        <div className="modal fade" id="infoModal" tabIndex="-1" aria-labelledby="infoModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="infoModalLabel">Octofit Info</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                This is a sample Bootstrap modal for Octofit Tracker.
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>

        {/* Bootstrap Form Example */}
        <h2 className="mt-5 mb-3">Sample Form</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="nameInput" className="form-label">Name</label>
            <input type="text" className="form-control" id="nameInput" placeholder="Enter your name" />
          </div>
          <div className="mb-3">
            <label htmlFor="teamSelect" className="form-label">Team</label>
            <select className="form-select" id="teamSelect">
              <option>Marvel</option>
              <option>DC</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
