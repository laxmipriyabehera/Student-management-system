import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <aside className="sidebar">
      <ul>
        <li><Link to="/">🏠 Dashboard</Link></li>
        <li><Link to="/students">👨‍🎓 Students</Link></li>
        <li><Link to="/add-student">➕ Add Student</Link></li>
        <li>📚 Courses</li>
        <li>⚙️ Settings</li>
      </ul>
    </aside>
  );
}

export default Sidebar;