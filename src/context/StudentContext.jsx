import { createContext, useState, useEffect } from "react";

const StudentContext = createContext();

const classOrder = ["JSS1", "JSS2", "JSS3", "SS1", "SS2", "SS3"];

const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState(() => {
    const saved = localStorage.getItem("students");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const addStudent = (student) => {
    setStudents([...students, { ...student, id: Date.now(), status: "active" }]);
  };

  const suspendStudent = (id) => {
    setStudents(
      students.map((s) =>
        s.id === id ? { ...s, status: "suspended" } : s
      )
    );
  };

  const promoteStudent = (id) => {
    setStudents(
      students.map((s) => {
        if (s.id === id) {
          const index = classOrder.indexOf(s.classLevel);
          if (index === classOrder.length - 1) {
            return { ...s, status: "graduated" };
          }
          return { ...s, classLevel: classOrder[index + 1] };
        }
        return s;
      })
    );
  };

  const graduateStudent = (id) => {
    setStudents(
      students.map((s) =>
        s.id === id ? { ...s, status: "graduated" } : s
      )
    );
  };

  return (
    <StudentContext.Provider
      value={{
        students,
        addStudent,
        suspendStudent,
        promoteStudent,
        graduateStudent,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};

export { StudentContext, StudentProvider };
