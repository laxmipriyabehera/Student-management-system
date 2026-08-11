import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AddStudent({setStudents, editingStudent }) {
  const navigate = useNavigate();
  const [student, setStudent] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    gender: "",
    address: "",
  });

  useEffect(() => {
  if (editingStudent) {
    setStudent(editingStudent);
  }
}, [editingStudent]);

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingStudent) {
      setStudents((prevStudents)=>
      prevStudents.map((item) =>
      item.id === editingStudent.id
    ? {
      ...student,
      id: editingStudent.id,
      status: editingStudent.status,
    } : item 
  ));
    alert("Student updated successfully!");

    navigate("/students");
    } else {
    setStudents((prevStudents)=>[
      ...prevStudents,
      {
        ...student,
        id: prevStudents.length + 1,
        status: "Active",
      },
    ]);

    alert("Student added successfully!");
  }

    setStudent({
      name: "",
      email: "",
      phone: "",
      course: "",
      gender: "",
      address: "",
    });
  };

  return (
    <div className="add-student-page">
      <div className="page-header">
        <div>
          <h1>Add Student</h1>
          <p>Add a new student to the system</p>
        </div>
      </div>

      <form className="student-form" onSubmit={handleSubmit}>

        <div className="form-group">
          <label>Student Name</label>
          <input
            type="text"
            name="name"
            value={student.name}
            onChange={handleChange}
            placeholder="Enter student name"
            required
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={student.email}
            onChange={handleChange}
            placeholder="Enter email"
            required
          />
        </div>

        <div className="form-group">
          <label>Phone</label>
          <input
            type="tel"
            name="phone"
            value={student.phone}
            onChange={handleChange}
            placeholder="Enter phone number"
            required
          />
        </div>

        <div className="form-group">
          <label>Course</label>

          <select
            name="course"
            value={student.course}
            onChange={handleChange}
            required
          >
            <option value="">Select Course</option>
            <option value="MCA">MCA</option>
            <option value="BCA">BCA</option>
            <option value="B.Tech">B.Tech</option>
            <option value="M.Tech">M.Tech</option>
          </select>
        </div>

        <div className="form-group">
          <label>Gender</label>

          <select
            name="gender"
            value={student.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label>Address</label>

          <textarea
            name="address"
            value={student.address}
            onChange={handleChange}
            placeholder="Enter address"
            rows="4"
            required
          ></textarea>
        </div>

        <button type="submit" className="save-btn">
          {editingStudent ? "Update Student" : "Save Student"}
        </button>

      </form>
    </div>
  );
}

export default AddStudent;