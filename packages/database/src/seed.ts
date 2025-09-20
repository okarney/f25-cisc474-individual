import { prisma } from "./client";
import { v4 as uuidv4 } from "uuid";
import type { Course, User, Enrollment, Assignment, Submission, Feedback } from "../generated/client";

const DEFAULT_USERS = [
  { //  0 - student enrolled in multiple courses
    user_id: uuidv4(),
    user_name: "Tim Apple",
    user_email: "tim@apple.com",
    user_role: "STUDENT",
  },
  { // 1
    user_id: uuidv4(),
    user_name: "Stuart Grape",
    user_email: "stuart@grape.com",
    user_role: "INSTRUCTOR",
  },
  { // 2
    user_id: uuidv4(),
    user_name: "Rachel Cantelope",
    user_email: "rachel@cantelope.com",
    user_role: "ADMIN",
  },
  { // 3
    user_id: uuidv4(),
    user_name: "Constance Tangerine",
    user_email: "constance@tangerine.com",
    user_role: "STUDENT",
  },
  { // 4
    user_id: uuidv4(),
    user_name: "Benjamin Orange",
    user_email: "benjamin@orange.com",
    user_role: "STUDENT",
  },
  { // 5
    user_id: uuidv4(),
    user_name: "Kim Raspberry",
    user_email: "kim@raspberry.com",
    user_role: "INSTRUCTOR",
  },
  { // 6
    user_id: uuidv4(),
    user_name: "John Blueberry",
    user_email: "john@blueberry.com",
    user_role: "INSTRUCTOR",
  },
  { //7
    user_id: uuidv4(),
    user_name: "Sam Strawberry",
    user_email: "sam@strawberry.com",
    user_role: "INSTRUCTOR",
  },
  { // 8
    user_id: uuidv4(),
    user_name: "Bridget Plum",
    user_email: "bridget@plum.com",
    user_role: "STUDENT",
  },
  { // 9
    user_id: uuidv4(),
    user_name: "Chris Clementine",
    user_email: "chris@clementine.com",
    user_role: "STUDENT",
  },
  { // 10
    user_id: uuidv4(),
    user_name: "Joy Kiwi",
    user_email: "joy@kiwi.com",
    user_role: "STUDENT",
  },
] as Array<User>;

const DEFAULT_COURSES = [
  {
    course_id: uuidv4(),
    course_title: "Advanced Web Technologies",
    course_number: "CISC474",
    course_description: "Learn web technologies.",
    course_user_id: DEFAULT_USERS[0]?.user_id,
  },
  {
    course_id: uuidv4(),
    course_title: "Computer Science Senior Design",
    course_number: "CISC498",
    course_description: "Complete real world projects.",
    course_user_id: DEFAULT_USERS[1]?.user_id,
  },
  { // Course with no assignments
    course_id: uuidv4(),
    course_title: "Advanced Calc. with Nonlinear Dynamics",
    course_number: "MATH503",
    course_description: "Calculus 4. This course has no assignments.",
    course_user_id: DEFAULT_USERS[1]?.user_id,
  },
  { // Course with multiple assignments
    course_id: uuidv4(),
    course_title: "Fundamentals of Optimization",
    course_number: "MATH529",
    course_description: "Optimize! This course has multiple assignments.",
    course_user_id: DEFAULT_USERS[2]?.user_id,
  },
] as Array<Course>;

const DEFAULT_ENROLLMENT = [
  { // student 0 enrolled in CISC474
    enrollment_id: uuidv4(),
    enrollment_user_id: DEFAULT_USERS[0]?.user_id,
    enrollment_course_id: DEFAULT_COURSES[0]?.course_id,
  },
  { // student 0 enrolled in CISC498
    enrollment_id: uuidv4(),
    enrollment_user_id: DEFAULT_USERS[0]?.user_id,
    enrollment_course_id: DEFAULT_COURSES[1]?.course_id,
  },
  { //student 0 enrolled in MATH529
    enrollment_id: uuidv4(),
    enrollment_user_id: DEFAULT_USERS[0]?.user_id,
    enrollment_course_id: DEFAULT_COURSES[2]?.course_id,
  },
  { //student 0 enrolled in MATH503
    enrollment_id: uuidv4(),
    enrollment_user_id: DEFAULT_USERS[0]?.user_id,
    enrollment_course_id: DEFAULT_COURSES[3]?.course_id,
  },
  { //instructor 1 enrolled in CISC474
    enrollment_id: uuidv4(),
    enrollment_user_id: DEFAULT_USERS[1]?.user_id,
    enrollment_course_id: DEFAULT_COURSES[0]?.course_id,
  },
  { //instructor 5 enrolled in CISC498
    enrollment_id: uuidv4(),
    enrollment_user_id: DEFAULT_USERS[5]?.user_id,
    enrollment_course_id: DEFAULT_COURSES[1]?.course_id,
  },
  { //instructor 6 enrolled in MATH503
    enrollment_id: uuidv4(),
    enrollment_user_id: DEFAULT_USERS[6]?.user_id,
    enrollment_course_id: DEFAULT_COURSES[2]?.course_id,
  },
  { //instructor 7 enrolled in MATH529
    enrollment_id: uuidv4(),
    enrollment_user_id: DEFAULT_USERS[7]?.user_id,
    enrollment_course_id: DEFAULT_COURSES[3]?.course_id,
  },
  { //student 8 enrolled in MATH529
    enrollment_id: uuidv4(),
    enrollment_user_id: DEFAULT_USERS[8]?.user_id,
    enrollment_course_id: DEFAULT_COURSES[3]?.course_id,
  },
  { //student 9 enrolled in MATH503
    enrollment_id: uuidv4(),
    enrollment_user_id: DEFAULT_USERS[9]?.user_id,
    enrollment_course_id: DEFAULT_COURSES[2]?.course_id,
  },
  { //student 10 enrolled in CISC498
    enrollment_id: uuidv4(),
    enrollment_user_id: DEFAULT_USERS[10]?.user_id,
    enrollment_course_id: DEFAULT_COURSES[1]?.course_id,
  },
] as Array<Enrollment>;

const DEFAULT_ASSIGNMENTS = [
  {
    assignment_id: uuidv4(),
    assignment_title: "Learn Next.js",
    assignment_description: "Practice using Next.js by setting up five pages on your website.",
    assignment_course_id: DEFAULT_COURSES[0]?.course_id,
    assignment_due_date: new Date("2025-10-15T23:59:59Z"),
  },
  { // assignment with multiple submissions
    assignment_id: uuidv4(),
    assignment_title: "Resume Revisions",
    assignment_description: "Revise your resume according to feedback. This assignment has multiple submissions.",
    assignment_course_id: DEFAULT_COURSES[1]?.course_id,
    assignment_due_date: new Date("2025-10-15T23:59:59Z"),
  },
  {
    assignment_id: uuidv4(),
    assignment_title: "Homework1",
    assignment_description: "HW1",
    assignment_course_id: DEFAULT_COURSES[3]?.course_id,
    assignment_due_date: new Date("2025-10-15T23:59:59Z"),
  },{ // assignment with no submissions
    assignment_id: uuidv4(),
    assignment_title: "Homework 2",
    assignment_description: "HW2. This assignment has no submissions.",
    assignment_course_id: DEFAULT_COURSES[3]?.course_id,
    assignment_due_date: new Date("2025-10-15T23:59:59Z"),
  },
] as Array<Assignment>;

const DEFAULT_SUBMISSIONS = [
  { // submission for CISC498
    submission_id: uuidv4(),
    submission_user_id: DEFAULT_USERS[0]?.user_id,
    submission_time: new Date("2025-10-15T23:59:59Z"),
    submission_assignment_id: DEFAULT_ASSIGNMENTS[1]?.assignment_id,
  },
  { // submission for CISC498
    submission_id: uuidv4(),
    submission_user_id: DEFAULT_USERS[10]?.user_id,
    submission_time: new Date("2025-10-15T23:59:59Z"),
    submission_assignment_id: DEFAULT_ASSIGNMENTS[1]?.assignment_id,
  },
  { // submission for CISC474 - submission with no feedback
    submission_id: uuidv4(),
    submission_user_id: DEFAULT_USERS[0]?.user_id,
    submission_time: new Date("2025-10-15T23:59:59Z"),
    submission_assignment_id: DEFAULT_ASSIGNMENTS[0]?.assignment_id,
  },
  { // submission with feedback but no comment
    submission_id: uuidv4(),
    submission_user_id: DEFAULT_USERS[2]?.user_id,
    submission_time: new Date("2025-10-15T23:59:59Z"),
    submission_assignment_id: DEFAULT_ASSIGNMENTS[1]?.assignment_id,
  },
] as Array<Submission>;

const DEFAULT_FEEDBACK = [
  {
    feedback_id: uuidv4(),
    feedback_assignment_id: DEFAULT_ASSIGNMENTS[1]?.assignment_id,
    feedback_submission_id: DEFAULT_SUBMISSIONS[0]?.submission_id,
    feedback_instructor_id: DEFAULT_USERS[0]?.user_id,
    feedback_comment: "Well done!",
    feedback_grade: "A+",
    feedback_time: new Date("2025-10-15T23:59:59Z"),
  },
  {
    feedback_id: uuidv4(),
    feedback_assignment_id: DEFAULT_ASSIGNMENTS[1]?.assignment_id,
    feedback_submission_id: DEFAULT_SUBMISSIONS[1]?.submission_id,
    feedback_instructor_id: DEFAULT_USERS[1]?.user_id,
    feedback_comment: "Okay",
    feedback_grade: "B",
    feedback_time: new Date("2025-10-15T23:59:59Z"),
  },
  {
    feedback_id: uuidv4(),
    feedback_assignment_id: DEFAULT_ASSIGNMENTS[1]?.assignment_id,
    feedback_submission_id: DEFAULT_SUBMISSIONS[3]?.submission_id,
    feedback_instructor_id: DEFAULT_USERS[7]?.user_id,
    feedback_grade: "A",
    feedback_time: new Date("2025-10-15T23:59:59Z"),
  },
] as Array<Feedback>;



async function main() {

  // USERS
  await Promise.all(
    DEFAULT_USERS.map((user) =>
      prisma.user.upsert({
        where: {
          user_email: user.user_email,
        },
        update: {
          ...user,
        },
        create: {
          ...user,
        },
      })
    )
  );

  // COURSES
  await Promise.all(
    DEFAULT_COURSES.map((course) =>
      prisma.course.upsert({
        where: {
          course_number: course.course_number,
        },
        update: {
          ...course,
        },
        create: {
          ...course,
        },
      })
    )
  );

  // ENROLLMENT
  await Promise.all(
    DEFAULT_ENROLLMENT.map((enrollment) =>
      prisma.enrollment.upsert({
        where: {
          enrollment_user_id_enrollment_course_id: {
            enrollment_user_id: enrollment.enrollment_user_id,
            enrollment_course_id: enrollment.enrollment_course_id,
          }
        },
        update: {
          ...enrollment,
        },
        create: {
          ...enrollment,
        },
      })
    )
  );
    
  // ASSIGNMENTS
  await Promise.all(
    DEFAULT_ASSIGNMENTS.map((assignment) =>
      prisma.assignment.upsert({
        where: {
          assignment_title: assignment.assignment_title,
        },
        update: {
          ...assignment,
        },
        create: {
          ...assignment,
        },
      })
    )
  );

  // SUBMISSIONS
  await Promise.all(
    DEFAULT_SUBMISSIONS.map((submission) =>
      prisma.submission.upsert({
        where: {
          submission_user_id_submission_assignment_id: {
            submission_user_id: submission.submission_user_id,
            submission_assignment_id: submission.submission_assignment_id,
          },
        },
        update: {
          ...submission,
        },
        create: {
          ...submission,
        },
      })
    )
  );
  
  // FEEDBACK
  await Promise.all(
    DEFAULT_FEEDBACK.map((feedback) =>
      prisma.feedback.upsert({
        where: {
          feedback_submission_id_feedback_instructor_id: {
            feedback_submission_id: feedback.feedback_submission_id,
            feedback_instructor_id: feedback.feedback_instructor_id,
          },
        },
        update: {
          ...feedback,
        },
        create: {
          ...feedback,
        },
      })
    )
  );

}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });