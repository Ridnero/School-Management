import { useState, useContext } from "react";
import { StudentContext } from "../context/StudentContext";

const AddStudent = () => {
  const { addStudent } = useContext(StudentContext);
  const [successMessage, setSuccessMessage] = useState("");

  const [form, setForm] = useState({
    name: "",
    age: "",
    classLevel: "JSS1",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.age) {
      addStudent(form);
      setSuccessMessage("✅ Student added successfully!");
      setForm({ name: "", age: "", classLevel: "JSS1" });
      setTimeout(() => setSuccessMessage(""), 3000);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-8">
      <div className="bg-white rounded-xl shadow-xl overflow-hidden border-l-4 border-blue-600">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-8">
          <h1 className="text-3xl font-bold text-white mb-2">➕ Add New Student</h1>
          <p className="text-blue-100 text-base">Fill in the details below to register a new student</p>
        </div>

        {successMessage && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 m-4 rounded">
            {successMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div>
            <label className="block text-base font-bold text-gray-800 mb-3">
              Student Name
            </label>
            <input
              type="text"
              placeholder="Enter full name"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
          </div>

          <div>
            <label className="block text-base font-bold text-gray-800 mb-3">
              Age
            </label>
            <input
              type="number"
              placeholder="Enter age"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition"
              value={form.age}
              onChange={(e) => setForm({ ...form, age: e.target.value })}
              required
            />
          </div>

          <div>
            <label className="block text-base font-bold text-gray-800 mb-3">
              Class Level
            </label>
            <select
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition bg-white"
              value={form.classLevel}
              onChange={(e) => setForm({ ...form, classLevel: e.target.value })}
            >
              <option>JSS1</option>
              <option>JSS2</option>
              <option>JSS3</option>
              <option>SS1</option>
              <option>SS2</option>
              <option>SS3</option>
            </select>
          </div>

          <button 
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 rounded-lg transition transform hover:scale-105 mt-8 shadow-lg hover:shadow-xl"
          >
            ➕ Add Student
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddStudent;
