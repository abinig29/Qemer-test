import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import { getAllStudents } from '../../service/student.service';
import { ErrorCode } from '../../error/custom.errors';
import { GetStudentsQuery } from '../../validation/student.validation';




//@desc get all students
//@method GET  /student
//@access private
const getAllStudentsHandler = asyncHandler(async (req: Request<{}, {}, GetStudentsQuery>, res: Response) => {
    const items = await getAllStudents(req?.query)
    res.json({
        success: true,
        data: items,
    })
})
export {
    getAllStudentsHandler
};
