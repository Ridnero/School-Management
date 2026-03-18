const StudentCard = ({ student, suspend, promote }) => {
  return (
    <div className="card student-card">
      <div className={`card-header ${student.status}`}>
        <div className="student-name">{student.name}</div>
        <div className={`student-badge ${student.status}`}>{student.status}</div>
      </div>

      <div className="card-body">
        <p>Age: <strong>{student.age}</strong></p>
        <p>Class: <strong>{student.classLevel}</strong></p>
      </div>

      {student.status === "active" && (
        <div className="card-actions">
          <button
            onClick={() => promote && promote(student.id)}
            className="btn promote"
          >
            Promote
          </button>
          <button
            onClick={() => suspend && suspend(student.id)}
            className="btn suspend"
          >
            Suspend
          </button>
        </div>
      )}
    </div>
  );
};

export default StudentCard;
