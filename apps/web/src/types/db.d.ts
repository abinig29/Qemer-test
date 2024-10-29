
export interface IStudent {
    _id: string
    name: string;              // Full name of the student
    age: number;               // Age of the student
    email: string;             // Email address of the student
    phoneNumber: string;       // Phone number of the student
    course: ICourse;  // Reference to the course (either populated or just ID)
    createdAt: Date;          // Timestamp for when the student was created
    updatedAt: Date;          // Timestamp for when the student was last updated
}


export interface ICourse {
    _id?: string;       // Unique identifier for each course
    courseName: string;        // Name of the course (e.g., "Mathematics")
    courseCode: string;        // Unique code for the course (e.g., "MATH101")
    createdAt: Date;          // Timestamp for when the course was created
    updatedAt: Date;          // Timestamp for when the course was last updated
}
