import React, { useState } from "react";
import axios from "../mockAPI";
import { loginWithGoogle } from "../firebase";

export default function AddStudentForm() {
    const [formData, setFormData] = useState({ name: "", email: "", course: "" });

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic Validation
        if (!formData.name || !formData.email || !formData.course) {
            alert("All fields are required!");
            return;
        }

        if (!validateEmail(formData.email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Authenticate with Firebase
        const user = await loginWithGoogle();
        if (user) {
            // Add student after login
            axios.post("/students", formData).then(() => {
                alert("🎉 Student Added Successfully!");
                setFormData({ name: "", email: "", course: "" });
            });
        } else {
            alert("Login is required to add a student.");
        }
    };

    return (
        <div>
            <h2>➕ Add New Student</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                />
                <input
                    type="text"
                    placeholder="Course"
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    required
                />
                <button type="submit">Add Student (Login Required)</button>
            </form>
        </div>
    );
}
