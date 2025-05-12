import React, { useState, useEffect } from "react";
import axios from "../mockAPI";

export default function StudentList({ filter }) {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("/students")
            .then(res => {
                setStudents(res.data);
                setLoading(false);
            })
            .catch(() => {
                alert("Failed to fetch students!");
                setLoading(false);
            });
    }, []);

    const filteredStudents = filter
        ? students.filter(s => s.course.toLowerCase() === filter.toLowerCase())
        : students;

    if (loading) {
        return <p style={{ textAlign: "center" }}>Loading students...</p>;
    }

    if (filteredStudents.length === 0) {
        return <p style={{ textAlign: "center" }}>No students found.</p>;
    }

    return (
        <div>
            <h2>📚 Student List</h2>
            {filteredStudents.map(student => (
                <div key={student.id} className="student-card">
                    <p><strong>Name:</strong> {student.name}</p>
                    <p><strong>Email:</strong> {student.email}</p>
                    <p><strong>Course:</strong> {student.course}</p>
                </div>
            ))}
        </div>
    );
}
