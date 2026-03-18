import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen bg-linear-to-br from-gray-50 to-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col ml-72">
        <Navbar />
        <div className="p-8 overflow-y-auto flex-1  from-gray-50 to-gray-100">
          <div className="max-w-7xl mx-auto page-wrap">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
