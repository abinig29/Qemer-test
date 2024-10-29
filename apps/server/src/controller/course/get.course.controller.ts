import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import { getAllCourses } from '../../service/course.service';




//@desc get all courses
//@method GET  /course
//@access private
const getAllCoursesHandler = asyncHandler(async (req: Request<{}, {}, {}>, res: Response) => {
    const items = await getAllCourses()
    res.json({
        success: true,
        data: items,
    })
})
export {
    getAllCoursesHandler
};
