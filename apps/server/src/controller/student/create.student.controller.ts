import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import { createStudent } from '../../service/student.service';

import { CreateStudentInput } from '../../validation/student.validation';
import NotFoundError from '../../error/notFound.errors';
import { ErrorCode } from '../../error/custom.errors';
import { getCourseById } from '../../service/course.service';
import { validateEnv } from '../../config/config';

// @desc Create student
// @method POST /student
// @access Private
const createStudentHandler = asyncHandler(
    async (req: Request<{}, {}, CreateStudentInput>, res: Response) => {
        const env = validateEnv();
        const { course: courseId } = req.body;

        const courseExist = await getCourseById(courseId);
        if (!courseExist) {
            throw new NotFoundError("Course not found", ErrorCode.COURSE_NOT_FOUND);
        }
        const student = await createStudent({
            student: {
                ...req.body,
                course: courseExist._id
            }
        });
        res.status(201).json({
            message: 'Student created successfully',
            data: student,
            success: true
        });
    }
);

export { createStudentHandler };
