const getStudents = "SELECT * FROM students";
const getStudentsById = "SELECT * FROM students WHERE id = $1";
const checkEmailExists = "SELECT * FROM students WHERE email = $1";
const addStudent = "INSERT INTO students (name, email, age, dob) VALUES ($1, $2, $3, $4) RETURNING *";
module.exports = {
    getStudents,
    getStudentsById,
    checkEmailExists,
    addStudent,
};
