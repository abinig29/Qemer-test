// src/interface/student.interface.ts
import { Types } from "mongoose";
import { ICourse } from "./course.interface";

export interface IStudent {
    _id: Types.ObjectId;       // Unique identifier for each student
    name: string;              // Full name of the student
    age: number;               // Age of the student
    email: string;             // Email address of the student
    phoneNumber: string;       // Phone number of the student
    course: Types.ObjectId | ICourse;  // Reference to the course (either populated or just ID)
    createdAt?: Date;          // Timestamp for when the student was created
    updatedAt?: Date;          // Timestamp for when the student was last updated
}
