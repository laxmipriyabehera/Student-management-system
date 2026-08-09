import { useNavigate } from "react-router-dom";

function Students({students, setStudents, setEditingStudent}) {
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
            {students.length === 0 ? (
            <tr>
              <td colSpan="6" className="no-students">No students added yet.
              </td>
              </tr>
            ): (
              students.map((student) =>(
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