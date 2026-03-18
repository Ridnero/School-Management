import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";
import StudentCard from "../component/StudentCard";

const GraduatedStudents = () => {
  const { students } = useContext(StudentContext);

  const graduated = students.filter((s) => s.status === "graduated");

  return (
    <div className="space-y-6">
      <div className="mb-8 pb-6 border-b-2 border-purple-200">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">🎓 Graduated Students</h1>
        <p className="text-gray-600">Students who have graduated</p>
      </div>

      <div className="card">
        <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-6">
          <h2 className="text-2xl font-bold text-white">Graduated List ({graduated.length})</h2>
        </div>

        {graduated.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            <p className="text-lg">No graduated students</p>
          </div>
        ) : (
          <div className="p-6">
            <div className="card-grid">
              {graduated.map((student) => (
                <StudentCard key={student.id} student={student} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GraduatedStudents;
