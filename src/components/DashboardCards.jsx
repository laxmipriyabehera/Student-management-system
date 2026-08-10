function DashboardCards({ totalStudents, activeStudents, inactiveStudents, totalCourses }) {
  return (
    <div className="dashboard-cards">

      <div className="card">
        <div className="card-icon">👨‍🎓</div>
        <div>
          <h3>Total Students</h3>
          <p>{totalStudents}</p>
        </div>
      </div>

      <div className="card">
        <div className="card-icon">📚</div>
        <div>
          <h3>Total Courses</h3>
          <p>{totalCourses}</p>
        </div>
      </div>

      <div className="card">
        <div className="card-icon">✅</div>
        <div>
          <h3>Active Students</h3>
          <p>{activeStudents}</p>
        </div>
      </div>

      <div className="card">
        <div className="card-icon">❌</div>
        <div>
          <h3>Inactive Students</h3>
          <p>{inactiveStudents}</p>
        </div>
      </div>

    </div>
  );
}

export default DashboardCards;