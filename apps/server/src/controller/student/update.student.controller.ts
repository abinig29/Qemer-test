import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { z } from "zod";
import { ErrorCode } from "../../error/custom.errors";
import NotFoundError from "../../error/notFound.errors";
import { UpdateStudentInput, updateStudentSchema } from "../../validation/student.validation";
import { getStudentById, updateStudent } from "../../service/student.service";




//@desc update student
//@method PATCH   /student/:id
//@access private
export const updateStudentHandler = asyncHandler(async (req: Request<z.TypeOf<typeof updateStudentSchema>["params"], {}, UpdateStudentInput>, res: Response) => {
    const existingStudent = await getStudentById(req.params.studentId)
    if (!existingStudent) throw new NotFoundError("Student  not found", ErrorCode.STUDENT_NOT_FOUND)
    const updatedStudent = await updateStudent(String(existingStudent._id), { ...req.body })
    res.status(200).json({
        message: 'Student Updated sucessfully',
        success: true,
        data: updatedStudent
    })
})




