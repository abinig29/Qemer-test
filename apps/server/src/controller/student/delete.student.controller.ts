import asyncHandler from 'express-async-handler';
import { Response, Request } from "express";


import { ErrorCode } from '../../error/custom.errors';
import NotFoundError from '../../error/notFound.errors';
import { DeleteStudentParams } from '../../validation/student.validation';
import { deleteStudent, getStudentById } from '../../service/student.service';


//@desc delete student
//@method DELETE  /student/:id
//@access private
export const deleteStudentHandler = asyncHandler(async (req: Request<DeleteStudentParams, {}, {}>, res: Response) => {
    const existingStudent = await getStudentById(req.params.studentId)
    if (!existingStudent) throw new NotFoundError("User not found", ErrorCode.STUDENT_NOT_FOUND)
    await deleteStudent(req.params.studentId)
    res.json({ success: true, message: "Student deleted sucessfully" });
})