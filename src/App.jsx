import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <div className="main-layout">
        <Sidebar />

        <main className="content">
          <h1>Dashboard</h1>
          <p>Welcome to Student Management System</p>
        </main>
      </div>
    </>
  );
}

export default App;