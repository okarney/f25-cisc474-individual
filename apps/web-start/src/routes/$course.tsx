import { Link, createFileRoute, useParams } from '@tanstack/react-router'
import '../css/course1.module.css'
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { fetchAssignmentsByCourseId, fetchCourseById } from '../fetch';
import type { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal} from 'react';


export const Route = createFileRoute('/$course')({
  component: RouteComponent,
  loader: ({ params }) => fetchCourseById(params.course)
})

function Assignment({assignment_title, assignment_due_date, assignment_feedback}: {assignment_title: string; assignment_due_date: string; assignment_feedback: string}) {
  return (
    <div>
      {/* <div className="py-3 px-3 rounded-lg hover:bg-gray-200 transition">
        <Link className="block text-lg text-black mb-1" to="/$course" params={{ course: course_id}}>
          <span><strong>{course_title}</strong></span>
          <p>{course_number}</p>
        </Link>
      </div> */}

      <Link className="flex justify-between items-center p-4 rounded-lg transition" to="/assignment1">
        <div className="flex flex-col">
          <span className="font-semibold text-left text-gray-900 dark:text-gray-200 mb-1">
            <strong>{assignment_title}</strong>
          </span>
          <p className="text-gray-600 dark:text-gray-300">
            <strong>Due:</strong> {assignment_due_date} | -/20pts
          </p>
        </div>
          <div><p className="font-semibold text-gray-900 dark:text-gray-200">{assignment_feedback}</p></div>
      </Link>
      <hr className="my-2 border-gray-300"></hr>
    </div>
  )
}


function RouteComponent() {
  const { course } = Route.useParams()

  const [activeSection, setActiveSection] = useState("Assignments");
  
  const {isPending: pagePending, isError: isPageError, data: pageData, error: pageError} = useQuery({queryKey: ['course', course], queryFn: () => fetchCourseById(course) })
  const {isPending: isAssignmentPending, isError: isAssignmentError, data: assignmentData, error: assignmentError} = useQuery({queryKey: ['assignments', course], queryFn: () => fetchAssignmentsByCourseId(course) })

  if (pagePending) {
    return <span>Loading...</span>
  }

  if (isPageError) {
    return <span>Error: {pageError.message}</span>
  }
  
  if (isAssignmentPending) {
    return <span>Loading...</span>
  }

  if (isAssignmentError) {
    return <span>Error: {assignmentError.message}</span>
  }

  return (
    <div >
      <div className="flex flex-col items-center min-h-screen py-8 px-4 md:px-16 font-sans bg-white dark:bg-gray-900">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 md:mb-8">{pageData.course_title}</h1>

    <div className="flex flex-wrap gap-6 justify-center w-full max-w-[1400px]">          
      <div className="flex-1 min-w-[250px] bg-gray-100 dark:bg-gray-800 border-2 border-black rounded-xl p-4 shadow-md flex flex-col">
          <button className="w-full py-3 px-4 mb-3 rounded-lg text-center text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition" 
            onClick={() => setActiveSection("Assignments")}>
              Assignments
          </button>
          <hr className="my-2 border-gray-400 dark:border-gray-600"></hr>
          <button className="w-full py-3 px-4 mb-3 rounded-lg text-center text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition" 
            onClick={() => setActiveSection("Calendar")}>
              Calendar
          </button>
          <hr className="my-2 border-gray-400 dark:border-gray-600"></hr>
          <button className="w-full py-3 px-4 mb-3 rounded-lg text-center text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition" 
            onClick={() => setActiveSection("Files")}>
              Files
          </button>

      </div>
      {activeSection === "Assignments" && (
        <div className="flex-2 min-w-[250px] bg-gray-100 dark:bg-gray-800 border-2 border-black rounded-xl p-4 shadow-md w-full md:w-auto">          
          {/* <div className="flex flex-col gap-4">
              <div className="w-full py-3 px-4 mb-3 rounded-lg text-center text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                <Link className="flex justify-between items-center p-4 rounded-lg transition" to="/assignment1">
                  <div className="flex flex-col">
                    <span className="font-semibold text-left text-gray-900 dark:text-gray-200 mb-1">
                      <strong>Learning Next.js</strong>
                    </span>
                    <p className="text-gray-600 dark:text-gray-300">
                      <strong>Due:</strong> September 12 at 11:59p.m. | -/20pts
                    </p>
                  </div>
                  <div><p className="font-semibold text-gray-900 dark:text-gray-200">100%</p></div>
                </Link>
              </div>
          </div> */}

          <div className="flex-1 min-w-[250px] bg-gray-100 border-2 border-black rounded-xl p-4 shadow-md">
            {/* Showing Courses from the backend/database */}
            {assignmentData.map((assignment: any) => (
              <Assignment assignment_title={assignment.assignment_title} assignment_due_date={assignment.assignment_due_date} assignment_feedback={assignment.assignment_feedback}/>
            ))}
          </div>
        </div>
        )
      }

      {activeSection === "Calendar" && (
        <div className="main_page">          
          <div className="calendar">
            <span className="w-full py-3 px-4 mb-3 rounded-lg text-center text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition">Calendar would go here.</span>
          </div>
        </div>
      )}

      {activeSection === "Files" && (
        <div className="main_page">          
          <div className="menu_table">
            {/* <Link className="menu_item" to="/file1">File 1</Link> */}
          </div>
        </div>
      )}
      
    </div>

    </div>
    </div>
  )
}
