import { z } from 'zod';
export const registrationSchema = z.object({
    name: z
        .string()
        .min(1, { message: "Full name is required" })
        .max(100, { message: "Full name should not exceed 100 characters" }),
    age: z
        .number()
        .int({ message: "Age must be an integer" })
        .max(100, { message: "Age must be below 100" }),
    phoneNumber: z
        .string()
        .regex(/^[0-9]{10}$/, { message: "Phone number must be 10 digits" }),
    email: z
        .string()
        .email({ message: "Invalid email address" }),
    course: z
        .string()
        .min(1, { message: "Please select a course" }),
});

export type RegistrationType = z.infer<typeof registrationSchema>;