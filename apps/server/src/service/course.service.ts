import { ICourse } from "../interface/course.interface";
import Course from "../model/course.model";


export const getCourseById = async (id: string): Promise<ICourse | null> => {
    const student = await Course.findById(id)
    return student;
};


export const getAllCourses = async (): Promise<ICourse[] | null> => {
    const courses = await Course
        .find()
        .select('-__v')
        .lean()
    return courses;
};

