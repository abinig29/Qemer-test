import express from "express";

import validateSchema from "../middleware/validate-schema.middleware";

import { createStudentSchema, deleteStudentSchema, getStudentsQuerySchema, updateStudentSchema } from "../validation/student.validation";
import { createStudentHandler } from "../controller/student/create.student.controller";
import { getAllStudentsHandler } from "../controller/student/get.student.controller";
import { updateStudentHandler } from "../controller/student/update.student.controller";
import { deleteStudentHandler } from "../controller/student/delete.student.controller";


const router = express.Router();

router.post("/",
    validateSchema(createStudentSchema),
    createStudentHandler)

router.get("/",
    validateSchema(getStudentsQuerySchema),
    getAllStudentsHandler)

router.patch("/:studentId",
    validateSchema(updateStudentSchema),
    updateStudentHandler)

router.delete("/:studentId",
    validateSchema(deleteStudentSchema),
    deleteStudentHandler)







export default router;
