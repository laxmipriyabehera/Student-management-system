import { useParams } from "react-router-dom";

function StudentDetails({ students }) {
  const { id } = useParams();

  const student = students.find(
    (item) => item.id === Number(id)
  );

  if (!student) {
    return <h2>Student not found</h2>;
  }

  return (
    <div className="student-details">
      <h1>Student Details</h1>

      <div className="details-card">
        <h2>{student.name}</h2>

        <p>
          <strong>Email:</strong> {student.email}
        </p>

        <p>
          <strong>Phone:</strong> {student.phone}
        </p>

        <p>
          <strong>Course:</strong> {student.course}
        </p>

        <p>
          <strong>Gender:</strong> {student.gender}
        </p>

        <p>
          <strong>Address:</strong> {student.address}
        </p>

        <p>
          <strong>Status:</strong> {student.status}
        </p>
      </div>
    </div>
  );
}

export default StudentDetails;