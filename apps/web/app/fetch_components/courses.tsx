'use client'
import { use } from 'react'
 
export default function Courses({
  courses,
}: {
  courses: Promise<{ course_id: string; course_title: string }[]>
}) {
  const allCourses = use(courses)
 
  return (
    <ul>
      {allCourses.map((course) => (
        <li key={course.course_id}>{course.course_title}</li>
      ))}
    </ul>
  )
}