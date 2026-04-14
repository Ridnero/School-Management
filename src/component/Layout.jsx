import { useContext } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { SidebarContext } from "../context/SidebarContext";

const Layout = ({ children }) => {
  const { isSidebarOpen } = useContext(SidebarContext);

  return (
    <div className="flex h-screen bg-linear-to-br from-gray-50 to-gray-100">
      <Sidebar />
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          isSidebarOpen ? "md:ml-72" : "ml-0"
        }`}
      >
        <Navbar />
        <div className="p-4 md:p-8 overflow-y-auto flex-1 from-gray-50 to-gray-100">
          <div className="max-w-7xl mx-auto page-wrap">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
