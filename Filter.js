import React from "react";

export default function Filter({ setFilter }) {
    return (
        <div>
            <select onChange={(e) => setFilter(e.target.value)}>
                <option value="">All Courses</option>
                <option value="Math">Math</option>
                <option value="Science">Science</option>
            </select>
        </div>
    );
}
