import { useContext } from "react";
import { Link } from "react-router-dom";
import { SidebarContext } from "../context/SidebarContext";

const Sidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useContext(SidebarContext);

  return (
    <>
      {isSidebarOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleSidebar}
        ></div>
      )}
      <div
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        } bg-linear-to-b from-blue-700 to-blue-900 text-black p-4 md:p-8 space-y-6 shadow-lg fixed h-screen overflow-y-auto transition-all duration-300 z-40 md:relative md:block md:w-72`}
      >
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-2">⚙️ Admin Panel</h2>
          <button
            onClick={toggleSidebar}
            className="md:hidden p-1 hover:bg-blue-500 rounded-lg transition-colors duration-200"
            title="Close menu"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <p className="text-blue-200 text-sm mt-2">Student Management</p>
      </div>

      <nav className="flex flex-col space-y-3">
        <Link
          to="/"
          className="hover:bg-blue-500 hover:translate-x-2 p-2 md:p-3 rounded-lg transition-all duration-200 flex items-center gap-2 md:gap-3 text-sm md:text-base font-semibold border-l-4 border-transparent hover:border-white"
        >
          📊 Dashboard
        </Link>
        <Link
          to="/students"
          className="hover:bg-blue-500 hover:translate-x-2 p-2 md:p-3 rounded-lg transition-all duration-200 flex items-center gap-2 md:gap-3 text-sm md:text-base font-semibold border-l-4 border-transparent hover:border-white"
        >
          👥 Students
        </Link>
        <Link
          to="/add-student"
          className="hover:bg-blue-500 hover:translate-x-2 p-2 md:p-3 rounded-lg transition-all duration-200 flex items-center gap-2 md:gap-3 text-sm md:text-base font-semibold border-l-4 border-transparent hover:border-white"
        >
          ➕ Add Student
        </Link>
        <Link
          to="/suspended"
          className="hover:bg-red-600 hover:translate-x-2 p-2 md:p-3 rounded-lg transition-all duration-200 flex items-center gap-2 md:gap-3 text-sm md:text-base font-semibold border-l-4 border-transparent hover:border-white"
        >
          ⚠️ Suspended
        </Link>
        <Link
          to="/graduated"
          className="hover:bg-purple-600 hover:translate-x-2 p-2 md:p-3 rounded-lg transition-all duration-200 flex items-center gap-2 md:gap-3 text-sm md:text-base font-semibold border-l-4 border-transparent hover:border-white"
        >
          🎓 Graduated
        </Link>
      </nav>
    </div>
    </>
  );
};

export default Sidebar;
