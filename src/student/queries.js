const getStudents = "SELECT * FROM students";
const getStudentsById = "SELECT * FROM students WHERE id = $1";
const checkEmailExists = "SELECT * FROM students WHERE email = $1";
const addStudent = "INSERT INTO students (name, email, age, dob) VALUES ($1, $2, $3, $4) RETURNING *";
const updateStudent = "UPDATE students SET name = $1, email = $2, age = $3, dob = $4 WHERE id = $5 RETURNING *";
const deleteStudent = "DELETE FROM students WHERE id = $1";
module.exports = {
    getStudents,
    getStudentsById,
    checkEmailExists,
    addStudent,
    updateStudent,
    deleteStudent,
};