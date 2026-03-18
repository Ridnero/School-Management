import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import AddStudent from "./pages/AddStudent";
import SuspendedStudents from "./pages/SuspendedStudents";
import GraduatedStudents from "./pages/GraduatedStudents";
import Layout from "./component/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/students" element={<Students />} />
          <Route path="/add-student" element={<AddStudent />} />
          <Route path="/suspended" element={<SuspendedStudents />} />
          <Route path="/graduated" element={<GraduatedStudents />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

