import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import DashboardCards from "./components/DashboardCards";
import Students from "./pages/Students";
import AddStudent from "./pages/AddStudent";
import StudentDetails from "./pages/StudentDetails";
import "./App.css";

function Dashboard({ students }) {

const totalStudents = students.length;

const activeStudents = students.filter(
  (student) => student.status === "Active"
).length;

const inactiveStudents = students.filter(
  (student) => student.status === "Inactive"
).length;

const totalCourses = new Set(
  students.map((student) => student.course)
).size;

const recentStudents = [...students].reverse().slice(0, 5);
  return(
    <>
    <h1>Dashboard</h1>
    <p>Welcome to Student Management System</p>
    <DashboardCards
        totalStudents={totalStudents}
        activeStudents={activeStudents}
        inactiveStudents={inactiveStudents}
        totalCourses={totalCourses}/>

          <div className="recent-students">
  <h2>Recent Students</h2>

  {recentStudents.length === 0 ? (
    <p>No students added yet.</p>
  ) : (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Course</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        {recentStudents.map((student) => (
          <tr key={student.id}>
            <td>{student.name}</td>
            <td>{student.email}</td>
            <td>{student.course}</td>
            <td>{student.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )}
</div>
    
    </>
  );
}

function App() {
  
  const [students, setStudents]= useState([]);
  const [editingStudent, setEditingStudent] = useState(null);

  useEffect(() => {
  const savedStudents = JSON.parse(
    localStorage.getItem("students")
  );

  if (savedStudents) {
    setStudents(savedStudents);
  }
}, []);

useEffect(() => {
  localStorage.setItem(
    "students",
    JSON.stringify(students)
  );
}, [students]);
  return (
     <BrowserRouter>
      <Navbar />

      <div className="main-layout">
        <Sidebar />

        <main className="content">
          <Routes>
            <Route path="/" element={<Dashboard students={students} />} />
            <Route path="/students" element={
              <Students students={students} 
              setStudents={setStudents}
              setEditingStudent={setEditingStudent}/>} />
            <Route path="/students/:id"
               element={<StudentDetails students={students} />}/>
            <Route path="/add-student" element={
              <AddStudent setStudents={setStudents}
              editingStudent={editingStudent} />} />
          </Routes>
        </main>
      </div>
      </BrowserRouter>
  );
}

export default App;