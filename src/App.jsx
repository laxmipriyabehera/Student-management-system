import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import DashboardCards from "./components/DashboardCards";
import Students from "./pages/Students";
import AddStudent from "./pages/AddStudent";
import "./App.css";

function Dashboard() {
  return(
    <>
    <h1>Dashboard</h1>
    <p>Welcome to Student Management System</p>
    <DashboardCards />
    </>
  );
}

function App() {
  
  const [students, setStudents]= useState([]);
  const [editingStudent, setEditingStudent] = useState(null);
  return (
     <BrowserRouter>
      <Navbar />

      <div className="main-layout">
        <Sidebar />

        <main className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/students" element={
              <Students students={students} 
              setStudents={setStudents}
              setEditingStudent={setEditingStudent}/>} />
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