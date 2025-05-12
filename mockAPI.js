import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(axios, { delayResponse: 1000 });

let students = [
    { id: 1, name: "Alice", email: "alice@example.com", course: "Math" },
    { id: 2, name: "Bob", email: "bob@example.com", course: "Science" },
];

mock.onGet("/students").reply(200, students);

mock.onPost("/students").reply(config => {
    const newStudent = JSON.parse(config.data);
    newStudent.id = Date.now();
    students.push(newStudent);
    return [201, newStudent];
});

export default axios;
