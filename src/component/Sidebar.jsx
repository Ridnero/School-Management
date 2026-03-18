import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-72 bg-gradient-to-b from-blue-700 to-blue-900 text-black p-8 space-y-6 shadow-lg fixed h-screen overflow-y-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold flex items-center gap-2">⚙️ Admin Panel</h2>
        <p className="text-blue-200 text-sm mt-2">Student Management</p>
      </div>
      
      <nav className="flex flex-col space-y-3">
        <Link to="/" className="hover:bg-blue-500 hover:translate-x-2 p-3 rounded-lg transition-all duration-200 flex items-center gap-3 text-base font-semibold border-l-4 border-transparent hover:border-white">
          📊 Dashboard
        </Link>
        <Link to="/students" className="hover:bg-blue-500 hover:translate-x-2 p-3 rounded-lg transition-all duration-200 flex items-center gap-3 text-base font-semibold border-l-4 border-transparent hover:border-white">
          👥 Students
        </Link>
        <Link to="/add-student" className="hover:bg-blue-500 hover:translate-x-2 p-3 rounded-lg transition-all duration-200 flex items-center gap-3 text-base font-semibold border-l-4 border-transparent hover:border-white">
          ➕ Add Student
        </Link>
        <Link to="/suspended" className="hover:bg-red-600 hover:translate-x-2 p-3 rounded-lg transition-all duration-200 flex items-center gap-3 text-base font-semibold border-l-4 border-transparent hover:border-white">
          ⚠️ Suspended
        </Link>
        <Link to="/graduated" className="hover:bg-purple-600 hover:translate-x-2 p-3 rounded-lg transition-all duration-200 flex items-center gap-3 text-base font-semibold border-l-4 border-transparent hover:border-white">
          🎓 Graduated
        </Link>
      </nav>
      
      <div className="border-t border-blue-500 pt-6 mt-8">
        <p className="text-[black] text-xs opacity-90">© 2026 School Management System</p>
      </div>
    </div>
  );
};

export default Sidebar;
