
import express from "express";
import { getAllCoursesHandler } from "../controller/course/get.course.controller";
const router = express.Router();


router.get("/",
    getAllCoursesHandler
)


export default router;
