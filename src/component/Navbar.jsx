import { useContext, useState, useRef, useEffect } from "react";
import { SidebarContext } from "../context/SidebarContext";

const Navbar = () => {
  const { toggleSidebar, toggleFullScreen, isFullScreen } =
    useContext(SidebarContext);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="bg-white shadow-md border-b-4 border-blue-600 px-4 md:px-8 py-3 md:py-5 font-bold text-xl md:text-2xl text-black">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={toggleSidebar}
            className="md:hidden p-2 hover:bg-gray-200 rounded-lg transition-colors duration-200"
            title="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div className="text-lg md:text-2xl">🎓 School Management System</div>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-sm text-black font-semibold hidden md:block">
            Welcome Back
          </div>
          {/* 3-Dot Menu */}
          <div className="relative" ref={menuRef}>
           

            {/* Dropdown Menu */}
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
