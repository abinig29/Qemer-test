import mongoose from "mongoose";
import { IStudent } from "../interface/student.interface";


const studentSchema = new mongoose.Schema<IStudent>({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
}, { timestamps: true });

const Student = mongoose.model<IStudent>('Student', studentSchema);
export default Student;
