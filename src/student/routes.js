const { Router } = require("express");
const controller = require('./controller.js');
const router = Router();

router.get("/", controller.getStudents);

module.exports = router;
