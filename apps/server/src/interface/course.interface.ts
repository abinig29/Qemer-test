// src/interface/course.interface.ts

import { Types } from "mongoose";

export interface ICourse {
    _id?: Types.ObjectId;       // Unique identifier for each course
    courseName: string;        // Name of the course (e.g., "Mathematics")
    courseCode: string;        // Unique code for the course (e.g., "MATH101")
    createdAt?: Date;          // Timestamp for when the course was created
    updatedAt?: Date;          // Timestamp for when the course was last updated
}
