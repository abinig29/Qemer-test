// courseSeeder.ts
import { ICourse } from "../interface/course.interface";
import Course from "../model/course.model";

const seedCourses: ICourse[] = [
    { courseName: "Mathematics", courseCode: "MATH101" },
    { courseName: "Physics", courseCode: "PHYS101" },
    { courseName: "Chemistry", courseCode: "CHEM101" },
    { courseName: "Biology", courseCode: "BIOL101" },
    { courseName: "Computer Science", courseCode: "CS101" },
];

const seedCoursesIfNeeded = async () => {
    try {
        const existingCourses = await Course.countDocuments();
        if (existingCourses === 0) {
            await Course.insertMany(seedCourses);
            console.log("Courses seeded successfully!");
        } else {
            console.log("Courses already exist. No seeding needed.");
        }
    } catch (error) {
        console.error("Error seeding courses:", error);
    }
};

export default seedCoursesIfNeeded;
