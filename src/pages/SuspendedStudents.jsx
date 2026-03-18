import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";
import StudentCard from "../component/StudentCard";

const SuspendedStudents = () => {
  const { students } = useContext(StudentContext);

  const suspended = students.filter((s) => s.status === "suspended");

  return (
    <div className="space-y-6">
      <div className="mb-8 pb-6 border-b-2 border-red-200">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">⚠️ Suspended Students</h1>
        <p className="text-gray-600">Students with suspended status</p>
      </div>

      <div className="card">
        <div className="bg-gradient-to-r from-red-600 to-red-800 p-6">
          <h2 className="text-2xl font-bold text-white">Suspended List ({suspended.length})</h2>
        </div>

        {suspended.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            <p className="text-lg">No suspended students</p>
          </div>
        ) : (
          <div className="p-6">
            <div className="card-grid">
              {suspended.map((student) => (
                <StudentCard key={student.id} student={student} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SuspendedStudents;
