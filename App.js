import React, { useState } from "react";
import StudentList from "./components/StudentList";
import AddStudentForm from "./components/AddStudentForm";
import Filter from "./components/Filter";
import "./styles/styles.css";

function App() {
  const [filter, setFilter] = useState("");

  return (
    <div className="container">
      <h1>🎓 Student Dashboard</h1>
      <Filter setFilter={setFilter} />
      <StudentList filter={filter} />
      <AddStudentForm />
    </div>
  );
}

export default App;
