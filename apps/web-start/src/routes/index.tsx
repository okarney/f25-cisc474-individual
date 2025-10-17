import { Link, createFileRoute } from '@tanstack/react-router';
// import '../css/dashboard.module.css'
import '../styles.css'
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
// import { fetchCourses } from '../fetch';
import { backendFetcher, mutateBackend } from '../integrations/fetcher';
import { fetchCourses } from '../fetch.tsx';
import type { CourseOut } from './../../../../packages/api/src/courses.ts';
// import type { CourseOut } from '@repo/api'

export const Route = createFileRoute('/')({
  component: RouteComponent,
});

function Course({course_id, course_title, course_number}: {course_id: string, course_title: string; course_number: string;}) {
  return (
    <div>
      <div className="py-3 px-3 rounded-lg hover:bg-gray-200 transition">
        <Link className="block text-lg text-black mb-1" to="/$course" params={{ course: course_id}}>
          <span><strong>{course_title}</strong></span>
          <p>{course_number}</p>
        </Link>
      </div>
      <hr className="my-2 border-gray-300"></hr>
    </div>
  )
}

function RouteComponent() {
  const [crud, setCrud] = useState("");
  const [newCourseTitle, setNewCourseTitle] = useState("");
  const [newCourseNumber, setNewCourseNumber] = useState("");
  const [newCourseDescription, setNewCourseDescription] = useState("");
  
  async function createCourse() {
    const newCourse = {
      course_title: newCourseTitle,
      course_number: newCourseNumber,
      course_description: newCourseDescription,
    };

    const result = await mutateBackend('/courses', 'POST', newCourse);
    console.log( `Created new course ${result}`);
  }
  
  const {isPending, isError, data, error} = useQuery({queryKey: ['course'], queryFn: backendFetcher<Array<CourseOut>>('/courses'), initialData: []})
  
  if (isPending) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  
  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-8 font-sans bg-white dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-[#00309B] text-center mb-8">Welcome, Name!</h1>     

    <div className="flex flex-wrap justify-center gap-8 w-full max-w-[1400px]">          
      <div className="flex-1 min-w-[250px] bg-gray-100 border-2 border-black rounded-xl p-4 shadow-md">
        {/* Showing Courses from the backend/database */}
        {data.map((course: any) => (
          <Course course_id={course.course_id} course_title={course.course_title} course_number={course.course_number} />
        ))}
      </div>


      <div className="flex-1 min-w-[250px] bg-gray-100 border-2 border-black rounded-xl p-4 shadow-md text-center">
        <span className="block text-lg text-black mb-4">Calendar would go here.
          <br></br><br></br>                
          Click on any of the courses to see a dynamic course page that is fetching data from the backend for each course.
          The Fundamentals of Optimization and Advanced Web Technologies have assignments, which will link to the appropriate
          dynamic assignment page that also fetch info from the backend.
        </span>
      </div>

      <div className="flex-1 min-w-[250px] bg-gray-100 border-2 border-black rounded-xl p-4 shadow-md text-center">
        <Link to="/enrollment" className="text-lg font-semibold text-[#00309B] hover:underline">
          Enroll in a new course!
        </Link>
      </div>
    </div>

    <button onClick={() => setCrud("update")} className="py-3 px-5 rounded-xl bg-white border">Click to Update an Assignment</button>

      {crud === "update" ? (
        <div className="flex-1 min-w-[250px] bg-gray-100 dark:bg-gray-800 border-2 border-black rounded-xl p-4 shadow-md flex flex-col gap-2">
          <span><u>New Course Title</u></span>
          
          <input
          className="py-1 border-1 rounded-l mb-2"
          type="text"
          value={newCourseTitle}
          onChange={(e) => setNewCourseTitle(e.target.value)}
          />

          <span><u>New Course Number</u></span>
          
          <input
          className="py-1 border-1 rounded-l mb-2"
          type="text"
          value={newCourseNumber}
          onChange={(e) => setNewCourseNumber(e.target.value)}
          />

          <span><u>New Course Description</u></span>
          
          <input
          className="py-1 border-1 rounded-l mb-2"
          type="text"
          value={newCourseDescription}
          onChange={(e) => setNewCourseDescription(e.target.value)} 
          />
        </div>
        ) : crud === "create" ? (
          <div className="flex-1 min-w-[250px] bg-gray-100 dark:bg-gray-800 border-2 border-black rounded-xl p-4 shadow-md flex flex-col gap-2">
            <span><u>Course Title</u></span>
            
            <input
            className="py-1 border-1 rounded-l mb-2"
            type="text"
            value={newCourseTitle}
            onChange={(e) => setNewCourseTitle(e.target.value)}
            />

            <span><u>Course Number</u></span>
            
            <input
            className="py-1 border-1 rounded-l mb-2"
            type="text"
            value={newCourseNumber}
            onChange={(e) => setNewCourseNumber(e.target.value)}
            />

            <span><u>Course Description</u></span>
            
            <input
            className="py-1 border-1 rounded-l mb-2"
            type="text"
            value={newCourseDescription}
            onChange={(e) => setNewCourseDescription(e.target.value)}
            />
            <button onClick={createCourse} className="py-3 px-5 rounded-xl bg-white border"></button>
          </div> 
        ) :

        <div></div>
      }

      <button onClick={() => setCrud("create")} className="py-3 px-5 rounded-xl bg-white border">Click to Create an Assignment</button>



    </div>
  );
}
