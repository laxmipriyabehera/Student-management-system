import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import DashboardCards from "./components/DashboardCards";
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

          <DashboardCards />
        </main>
      </div>
    </>
  );
}

export default App;