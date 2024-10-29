import { TypeOf, z, object, string, number, boolean } from "zod";

// Schema for creating a student
export const createStudentSchema = z.object({
    body: object({
        name: z.string({ required_error: "Name is required" }).min(1, "Name cannot be empty"),
        age: z.number({ required_error: "Age is required" }).int("Age must be an integer").max(100, "Age must be below 100"),
        email: z.string({ required_error: "Email is required" }).email("Invalid email address"),
        phoneNumber: z.string({ required_error: "Phone number is required" }).regex(/^[0-9]{10}$/, "Phone number must be 10 digits"),
        course: z.string({ required_error: "Course ID is required" }),
    })
});

// Schema for updating a student
export const updateStudentSchema = z.object({
    body: object({
        name: z.string().optional(),
        age: z.number().int().max(100).optional(),
        email: z.string().email("Invalid email address").optional(),
        phoneNumber: z.string().regex(/^[0-9]{10}$/, "Phone number must be 10 digits").optional(),
        course: z.string().optional(),
    }),
    params: object({
        studentId: z.string({ required_error: "Student ID is required" })
    })
});

// Schema for deleting a student
export const deleteStudentSchema = z.object({
    params: object({
        studentId: z.string().min(1, "Student ID is required")
    })
});

// Schema for query parameters (limit, sort, page, sortOrder, searchText)
export const getStudentsQuerySchema = z.object({
    query: object({
        limit: z.coerce.number().int().optional(),
        sort: z.string().optional(),
        page: z.coerce.number().int().optional(),
        sortOrder: z.enum(["asc", "desc"]).optional(),
        searchText: z.string().optional(),
    })
});

export type CreateStudentInput = TypeOf<typeof createStudentSchema>["body"];
export type UpdateStudentInput = TypeOf<typeof updateStudentSchema>["body"];
export type DeleteStudentParams = TypeOf<typeof deleteStudentSchema>["params"];
export type GetStudentsQuery = TypeOf<typeof getStudentsQuerySchema>["query"];
