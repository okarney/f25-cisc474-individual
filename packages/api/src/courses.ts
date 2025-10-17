import { z } from 'zod';

export const CourseOut = z.object({
    course_id: z.uuid(),
    course_title: z.string(),
    course_number: z.string(),
    course_description: z.string(),
    course_user_id: z.string().optional().nullable()
});
export type CourseOut = z.infer<typeof CourseOut>;

export const CourseCreateIn = z.object({
    course_title: z.string().min(1),
    course_number: z.string().min(3),
    course_description: z.string()
})
export type CourseCreateIn = z.infer<typeof CourseCreateIn>;


export const CourseUpdateIn = z.object({
    course_title: z.string().min(1),
    course_number: z.string().min(3),
    course_description: z.string().optional().nullable()
})
export type CourseUpdateIn = z.infer<typeof CourseUpdateIn>;
