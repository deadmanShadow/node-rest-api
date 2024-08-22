const { Router } = require("express");
const controller = require('./controller.js');
const router = Router();

router.get("/", controller.getStudents);
router.post("/", controller.addStudents);
router.get("/:id",controller.getStudentsById);


module.exports = router;
