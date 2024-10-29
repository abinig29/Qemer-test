import { QueryOptions, UpdateQuery } from "mongoose";
import Student from "../model/student.model";
import { IStudent } from "../interface/student.interface";

interface CreateStudentParams {
    student: Partial<IStudent>;
}

interface PaginatedResponse<T> {
    currentPage: number;
    totalPages: number;
    count: number;
    values: T[];
}

export const createStudent = async ({ student }: CreateStudentParams): Promise<IStudent> => {
    const newStudent = await Student.create({
        name: student.name,
        age: student.age,
        email: student.email,
        phoneNumber: student.phoneNumber,
        course: student?.course,
    })
    return await newStudent.populate('course');
};

// Get a student by ID
export const getStudentById = async (id: string): Promise<IStudent | null> => {
    const student = await Student.findById(id).populate("course");
    return student;
};

export const updateStudent = async (
    id: string,
    update: UpdateQuery<IStudent>,
    options: QueryOptions = { new: true }
): Promise<IStudent | null> => {
    try {
        const result = await Student.findByIdAndUpdate(id, { $set: update }, options).populate("course");
        return result;
    } catch (error) {
        return null;
    }
};

export const deleteStudent = async (id: string): Promise<IStudent | null> => {
    return await Student.findByIdAndDelete(id);
};


interface GetAllStudentsParams {
    page?: number;
    limit?: number;
    sort?: string;
    sortOrder?: "asc" | "desc";
    searchText?: string;
}



export const getAllStudents = async (
    { page = 1, limit = 10, sort = "createdAt", sortOrder = "asc", searchText }: GetAllStudentsParams = {}
): Promise<PaginatedResponse<IStudent>> => {
    const filter = searchText
        ? { name: { $regex: searchText, $options: "i" } }
        : {};

    const totalStudents = await Student.countDocuments(filter);
    const totalPages = Math.ceil(totalStudents / limit);

    const students = await Student.find(filter)
        .populate("course")
        .select('-__v')
        .sort({ [sort]: sortOrder === "asc" ? 1 : -1 })
        .skip((page - 1) * limit)
        .limit(limit);

    return {
        currentPage: page,
        totalPages,
        count: totalStudents,
        values: students,
    };
};
