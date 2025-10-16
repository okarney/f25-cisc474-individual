import { z } from 'zod';


export const EnrollmentOut = z.object({
    enrollment_id: z.uuid(),
    enrollment_user_id: z.string(),
    enrollment_course_id: z.string(),
});
export type EnrollmentOut = z.infer<typeof EnrollmentOut>;