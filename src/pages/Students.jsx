import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Students({students, setStudents, setEditingStudent}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [courseFilter, setCourseFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const navigate = useNavigate();
  const handleDelete = (id) => {
  const updatedStudents = students.filter(
    (student) => student.id !== id
  );

  setStudents(updatedStudents);
};

const handleEdit = (student) => {
  setEditingStudent(student);
  navigate("/add-student");
};

 const filteredStudents = students.filter((student) => {
  const search = searchTerm.toLowerCase();

  const matchesSearch =
    student.name.toLowerCase().includes(search) ||
    student.email.toLowerCase().includes(search);

  const matchesCourse =
    courseFilter === "All" ||
    student.course === courseFilter;

  const matchesStatus =
  statusFilter === "All" ||
  student.status === statusFilter; 

  return matchesSearch && matchesCourse;
});
  return (
    <div className="students-page">

      <div className="page-header">
        <div>
          <h1>Students</h1>
          <p>Manage all students</p>
        </div>

        <button className="add-btn">
          + Add Student
        </button>
      </div>
      <div className="student-filters">
  <input
    type="text"
    placeholder="Search student by name or email..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />

  <select
    value={courseFilter}
    onChange={(e) => setCourseFilter(e.target.value)}
  >
    <option value="All">All Courses</option>
    <option value="MCA">MCA</option>
    <option value="BCA">BCA</option>
    <option value="B.Tech">B.Tech</option>
    <option value="M.Tech">M.Tech</option>
  </select>

  <select
  value={statusFilter}
  onChange={(e) => setStatusFilter(e.target.value)}
>
  <option value="All">All Status</option>
  <option value="Active">Active</option>
  <option value="Inactive">Inactive</option>
</select>
</div>

      <div className="student-table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Course</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredStudents.length === 0 ? (
            <tr>
              <td colSpan="6" className="no-students">No students added yet.
              </td>
              </tr>
            ): (
              filteredStudents.map((student) =>(
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.course}</td>

                  <td>
                    <span className="status active">{student.status}</span>
                  </td>
                  <td>
                    <button className="edit-btn"
                    onClick={()=> handleEdit(student)}>Edit</button>
                    <button className="delete-btn"
                    onClick={()=> handleDelete(student.id)}>Delete</button>
                  </td>
                  </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default Students;