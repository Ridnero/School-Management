const StudentCard = ({ student, suspend, promote }) => {
  const getStatusStyles = (status) => {
    switch (status) {
      case "active":
        return "bg-gradient-to-r from-green-500 to-green-600 text-white";
      case "suspended":
        return "bg-gradient-to-r from-red-500 to-red-600 text-white";
      case "graduated":
        return "bg-gradient-to-r from-purple-500 to-purple-600 text-white";
      default:
        return "bg-gradient-to-r from-gray-500 to-gray-600 text-white";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "active":
        return "✅";
      case "suspended":
        return "⚠️";
      case "graduated":
        return "🎓";
      default:
        return "👤";
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300 max-w-sm my-3">
      <div className={`p-4 ${getStatusStyles(student.status)}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-2xl">{getStatusIcon(student.status)}</div>
            <div>
              <h3 className="text-lg font-bold">{student.name}</h3>
              <p className="text-sm opacity-90 capitalize">{student.status}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Age:</span>
            <span className="font-semibold text-gray-800">{student.age} years</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Class:</span>
            <span className="font-semibold text-gray-800">{student.classLevel}</span>
          </div>
        </div>
      </div>

      {student.status === "active" && (
        <div className="p-4 bg-gray-50 border-t border-gray-200">
          <div className="flex gap-2">
            <button
              onClick={() => promote && promote(student.id)}
              className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <span>⬆️</span> Promote
            </button>
            <button
              onClick={() => suspend && suspend(student.id)}
              className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <span>⚠️</span> Suspend
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentCard;
