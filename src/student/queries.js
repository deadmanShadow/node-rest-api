const getStudents = "SELECT * FROM students";

const getStudentsById = "SELECT * FROM students WHERE id = $1";


module.exports ={
    getStudents,
    getStudentsById,
};