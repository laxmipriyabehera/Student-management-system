function DashboardCards() {
  return (
    <div className="dashboard-cards">

      <div className="card">
        <div className="card-icon">👨‍🎓</div>
        <div>
          <h3>Total Students</h3>
          <p>120</p>
        </div>
      </div>

      <div className="card">
        <div className="card-icon">📚</div>
        <div>
          <h3>Total Courses</h3>
          <p>8</p>
        </div>
      </div>

      <div className="card">
        <div className="card-icon">✅</div>
        <div>
          <h3>Active Students</h3>
          <p>100</p>
        </div>
      </div>

      <div className="card">
        <div className="card-icon">❌</div>
        <div>
          <h3>Inactive Students</h3>
          <p>20</p>
        </div>
      </div>

    </div>
  );
}

export default DashboardCards;