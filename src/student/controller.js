const pool = require('../../db');
const queries = require('./queries'); 
const getStudents = (req, res) => {
    pool.query(queries.getStudents, (error, results) => {
        if (error) return res.status(500).send("Error fetching students");
        res.status(200).json(results.rows);
    });
};
const getStudentsById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getStudentsById, [id], (error, results) => {
        if (error) return res.status(500).send("Error fetching student");
        res.status(200).json(results.rows);
    });
};
const addStudents = (req, res) => {
    const { name, email, age, dob } = req.body;
    pool.query(queries.checkEmailExists, [email], (error, results) => {
        if (error) return res.status(500).send("Error checking email");
        if (results.rows.length) {
            return res.status(400).send("Email already exists");
        }
        pool.query(queries.addStudent, [name, email, age, dob], (error, results) => {
            if (error) return res.status(500).send("Error adding student");
            res.status(201).send("Student added successfully");
        });
    });
};
const updateStudent = (req, res) => {
    const id = parseInt(req.params.id);
    const { name, email, age, dob } = req.body;
    pool.query(queries.updateStudent, [name, email, age, dob, id], (error, results) => {
        if (error) return res.status(500).send("Error updating student");

        if (results.rowCount === 0) {
            return res.status(404).send("Student not found");
        }

        res.status(200).send("Student updated successfully");
    });
};
const deleteStudent = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getStudentsById, [id], (error, results) => {
        if (error) return res.status(500).send("Error fetching student");

        if (results.rowCount === 0) {
            return res.status(404).send("Student not found");
        }

        pool.query(queries.deleteStudent, [id], (error, results) => {
            if (error) return res.status(500).send("Error deleting student");

            res.status(200).send("Student deleted successfully");
        });
    });
};
module.exports = {
    getStudents,
    getStudentsById,
    addStudents,
    updateStudent,
    deleteStudent,
};