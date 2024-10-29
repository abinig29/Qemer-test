import express from "express";

import student from "./student.api"
import course from "./course.api"


const router = express.Router()
router.use("/student", student)
router.use("/course", course)





export default router;