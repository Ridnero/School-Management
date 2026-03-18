import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";
import StudentCard from "../component/StudentCard";

const Students = () => {
  const { students, suspendStudent, promoteStudent } = useContext(StudentContext);

  const activeStudents = students.filter((s) => s.status === "active");

  return (
    <div className="space-y-6">
      <div className="mb-8 pb-6 border-b-2 border-blue-200">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">👥 Active Students</h1>
        <p className="text-gray-600">Manage and monitor all active students</p>
      </div>

      <div className="card">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6">
          <h2 className="text-2xl font-bold text-white">Students List ({activeStudents.length})</h2>
        </div>

        {activeStudents.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            <p className="text-lg">No active students found</p>
          </div>
        ) : (
          <div className="p-6">
            <div className="card-grid">
              {activeStudents.map((student) => (
                <StudentCard
                  key={student.id}
                  student={student}
                  suspend={suspendStudent}
                  promote={promoteStudent}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Students;
