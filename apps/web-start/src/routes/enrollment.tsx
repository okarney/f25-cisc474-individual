import { createFileRoute, Link } from '@tanstack/react-router'
import '../css/enrollment.module.css'
import { useQuery } from '@tanstack/react-query';
import { fetchCourses } from '../fetch';
import { backendFetcher } from '../integrations/fetcher';
import type { EnrollmentOut } from './../../../../packages/api/src/enrollment.ts';

export const Route = createFileRoute('/enrollment')({
  component: RouteComponent,
})

function CourseOption({course_id, course_title, course_number}: {course_id: string, course_title: string; course_number: string;}) {
  return (
    <div>
      <div className="flex justify-between items-center py-3 px-3 rounded-lg hover:bg-gray-200 transition">
        <Link className="block text-lg text-black mb-1" to="/$course" params={{ course: course_id}}>
          <span><strong>{course_title}</strong></span>
          <p>{course_number}</p>
        </Link>
        <button className="py-3 px-5 rounded-xl bg-white border">Enroll</button>
      </div>
      <hr className="my-2 border-gray-300"></hr>
    </div>
  )
}

function RouteComponent() {

  const {isPending, isError, data, error} = useQuery({queryKey: ['course'], queryFn: backendFetcher<Array<EnrollmentOut>>('/courses'), initialData: []})
  console.log(data)
  
  if (isPending) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }
  
  return (
    <div className="flex flex-col items-center py-8 font-sans">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 md:mb-8">Available Courses</h1>

      <div className="flex-1 bg-gray-100 border-2 border-black rounded-xl p-4 ">
        {/* Showing Courses from the backend/database */}
        {data.map((course: any) => (
          <CourseOption course_id={course.course_id} course_title={course.course_title} course_number={course.course_number} />
        ))}
      </div>

    

    </div>
  )
}
