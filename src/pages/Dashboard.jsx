import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

const StatCard = ({ icon, title, count, color }) => (
  <div className={`bg-gradient-to-br ${color} rounded-lg shadow-lg p-6 text-white transform hover:scale-105 transition`}>
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-sm font-semibold opacity-90">{title}</h2>
        <p className="text-4xl font-bold mt-2">{count}</p>
      </div>
      <div className="text-5xl opacity-20">{icon}</div>
    </div>
  </div>
);

const Dashboard = () => {
  const { students } = useContext(StudentContext);

  const active = students.filter(s => s.status === "active").length;
  const suspended = students.filter(s => s.status === "suspended").length;
  const graduated = students.filter(s => s.status === "graduated").length;
  const total = students.length;

  return (
    <div className="space-y-8">
      <div className="mb-10 pb-6 border-b-2 border-blue-200">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-700 text-lg font-medium">Welcome to the Student Management System</p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-gray-700 mb-6">Statistics Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard 
          icon="👥" 
          title="Total Students" 
          count={total}
          color="from-blue-500 to-blue-600"
        />
        <StatCard 
          icon="✅" 
          title="Active Students" 
          count={active}
          color="from-green-500 to-green-600"
        />
        <StatCard 
          icon="⚠️" 
          title="Suspended" 
          count={suspended}
          color="from-red-500 to-red-600"
        />
        <StatCard 
          icon="🎓" 
          title="Graduated" 
          count={graduated}
          color="from-purple-500 to-purple-600"
        />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-blue-600">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">📋 Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border-l-4 border-green-500 pl-4 py-3">
            <p className="text-gray-600 text-sm font-medium">Active Students</p>
            <p className="text-3xl font-bold text-green-600 mt-1">{active}</p>
          </div>
          <div className="border-l-4 border-red-500 pl-4 py-3">
            <p className="text-gray-600 text-sm font-medium">Suspended Students</p>
            <p className="text-3xl font-bold text-red-600 mt-1">{suspended}</p>
          </div>
          <div className="border-l-4 border-purple-500 pl-4 py-3">
            <p className="text-gray-600 text-sm font-medium">Graduated Students</p>
            <p className="text-3xl font-bold text-purple-600 mt-1">{graduated}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
