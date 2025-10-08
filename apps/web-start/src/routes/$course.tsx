import { Link, createFileRoute, useParams } from '@tanstack/react-router'
import '../css/course1.module.css'
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { fetchCourseById } from '../fetch';
import type { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal} from 'react';


export const Route = createFileRoute('/$course')({
  component: RouteComponent,
  loader: ({ params }) => fetchCourseById(params.course)
})


function RouteComponent() {
  const { course } = Route.useParams()
  // const { course } = useParams( {from: Route} as {course: string});

  const [activeSection, setActiveSection] = useState("Assignments");
  
  const {isPending, isError, data, error} = useQuery({queryKey: ['course', course], queryFn: () => fetchCourseById(course) })
  
  if (isPending) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  return (
    <div >
      <div className="flex flex-col items-center min-h-screen py-8 px-4 md:px-16 font-sans bg-white dark:bg-gray-900">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 md:mb-8">{data.course_title}</h1>

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
          <div className="flex flex-col gap-4">
              <div className="w-full py-3 px-4 mb-3 rounded-lg text-center text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                <Link className="flex justify-between items-center p-4 rounded-lg transition" to="/assignment1">
                  <div className="flex flex-col">
                    <span className="font-semibold text-gray-900 dark:text-gray-200"><strong>Learning Next.js</strong></span>
                    <p className="text-gray-600 dark:text-gray-300"><strong>Due:</strong> September 12 at 11:59p.m. | -/20pts</p>
                  </div>
                  <div><p className="font-semibold text-gray-900 dark:text-gray-200">100%</p></div>
                </Link>
              </div>
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
