import mongoose from "mongoose";
import { ICourse } from "../interface/course.interface";

const courseSchema = new mongoose.Schema<ICourse>({
    courseName: {
        type: String,
        required: true,
    },
    courseCode: {
        type: String,
        required: true,
        unique: true,
    },
}, { timestamps: true });

const Course = mongoose.model<ICourse>('Course', courseSchema);
export default Course;
