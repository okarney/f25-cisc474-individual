import { Link, createFileRoute } from '@tanstack/react-router';
// import '../css/dashboard.module.css'
import '../styles.css'
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
// import { fetchCourses } from '../fetch';
import { useApiMutation, useApiQuery, useCurrentUser } from '../integrations/fetcher';
// import { fetchCourses } from '../fetch.tsx';
// import type { CourseOut } from './../../../../packages/api/src/courses.ts';
import { CourseCreateIn, CourseOut } from '@repo/api/courses';

export const Route = createFileRoute('/dashboard')({
  component: RouteComponent,
});

function RouteComponent() {
  const [crud, setCrud] = useState("");
  const [newCourseTitle, setNewCourseTitle] = useState("");
  const [newCourseNumber, setNewCourseNumber] = useState("");
  const [newCourseDescription, setNewCourseDescription] = useState("");
  
  const [currentCourseId, setCurrentCourseId] = useState("")
  const [currentCourseTitle, setCurrentCourseTitle] = useState("")
  const [currentCourseNumber, setCurrentCourseNumber] = useState("")
  const [currentCourseDescription, setCurrentCourseDescription] = useState("")


  const [updatedCourseTitle, setUpdatedCourseTitle] = useState(currentCourseTitle);
  const [updatedCourseNumber, setUpdatedCourseNumber] = useState(currentCourseNumber);
  const [updatedCourseDescription, setUpdatedCourseDescription] = useState(currentCourseDescription);
  

  function getCurrentCourse({course_id, course_title, course_number, course_description, method}: {course_id: string, course_title: string; course_number: string; course_description: string; method: string;}) {
    setCurrentCourseId(course_id);
    setCurrentCourseTitle(course_title);
    setCurrentCourseNumber(course_number);
    setCurrentCourseDescription(course_description);
    setCrud(method);
  }
  
  function Course({course_id, course_title, course_number, course_description}: {course_id: string, course_title: string; course_number: string; course_description: string;}) {
    return (
      <div>
        <div className="py-3 px-3 rounded-lg hover:bg-gray-200 transition">
          <Link className="block text-lg text-black mb-1" to="/$course" params={{ course: course_id}}>
            <span><strong>{course_title}</strong></span>
            <p>{course_number}</p>
          </Link>
        </div>
        <button onClick={() => getCurrentCourse({course_id, course_title, course_number, course_description, method: "update"})} className="py-3 px-5 rounded-xl bg-white border">Edit this course</button>
        <button onClick={() => getCurrentCourse({course_id, course_title, course_number, course_description, method: "delete"})} className="py-3 px-5 rounded-xl bg-white border">Delete this course</button>

        <hr className="my-2 border-gray-300"></hr>
      </div>
    )
  }

  const create_course = useApiMutation<CourseCreateIn, CourseOut>({
      endpoint: (variables) => ({
        path: '/courses', 
        method: 'POST'
      }),
      invalidateKeys: [['courses']],
    });

  const update_course = useApiMutation<CourseCreateIn, CourseOut>({
    endpoint: (variables) => ({
      path: `/courses/${currentCourseId}`, 
      method: 'PATCH'
    }),
    invalidateKeys: [['courses']],
  });

  const delete_course = useApiMutation<CourseCreateIn, CourseOut>({
    endpoint: (variables) => ({
      path: `/courses/${currentCourseId}`, 
      method: 'DELETE'
    }),
    invalidateKeys: [['courses']],
  });
  
  const { data: user } = useCurrentUser();
  const query = useApiQuery<Array<CourseOut>>(['courses'], '/courses');

  const { data, refetch, error, showLoading } = query;
  
  // const {isPending, isError, data, error} = useQuery({queryKey: ['course'], queryFn: useApiQuery<Array<CourseOut>>('/courses'), initialData: []})
  // const {isPending, isError, data, error} = useQuery({queryKey: ['course'], queryFn: fetchCourses})
  
  if (showLoading) {
    return <span>Loading...</span>
  }

  if (error) {
    return <span>Error: {error.message}</span>
  }

  if (!data || data.length === 0) {
    return <span>No courses found.</span>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-8 font-sans bg-white dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-[#00309B] text-center mb-8">Welcome, Name!</h1>     

    <div className="flex flex-wrap justify-center gap-8 w-full max-w-[1400px]">          
      <div className="flex-1 min-w-[250px] bg-gray-100 border-2 border-black rounded-xl p-4 shadow-md">
        {/* Showing Courses from the backend/database */}
        {data.map((course: any) => (
          <Course course_id={course.course_id} course_title={course.course_title} course_number={course.course_number} course_description={course.course_description}/>
        ))}
      </div>


      <div className="flex-1 min-w-[250px] bg-gray-100 border-2 border-black rounded-xl p-4 shadow-md text-center">
        <span className="block text-lg text-black mb-4"> {/* Calendar would go here. */}
          <br></br><br></br>                
          Create, Update, and Delete options have been added. Follow these directions to accomplish each:
          <br></br><br></br>

          <strong>CREATE</strong><br></br>
          Click the "Click to Create a Course" button at the bottom of this screen. Fill out the information and click "Create Course". 
          Then, refresh the page to see the new course appear in the course list.

          <br></br><br></br>

          <strong>UPDATE</strong><br></br>
          Click the "Edit this course" button for any of the courses in the list. Fill out the information to modify the course fields and click "Update Course". 
          Then, refresh the page to see the updated course appear in the course list.

          <br></br><br></br>

          <strong>DELETE</strong><br></br>
          Click the "Delete this course" button for any of the courses in the list. Scroll down if necessary to find the box asking you to confirm you want to delete the course. Click "Delete Course". 
          Then, refresh the page to see the course is no longer in the list.

          <br></br><br></br>

          **NOTE: For any operation performed, the page needs to be refreshed to see the changes to the course list.**

          <br></br><br></br>

          **NOTE: The course description field is not being displayed anywhere currently, so you will not be able to see changes to that field, although rest assured, they are happening.
        </span>
      </div>

      <div className="flex-1 min-w-[250px] bg-gray-100 border-2 border-black rounded-xl p-4 shadow-md text-center">
        <Link to="/enrollment" className="text-lg font-semibold text-[#00309B] hover:underline">
          Enroll in a new course!
        </Link>
      </div>
    </div>

    {/* <button onClick={() => setCrud("update")} className="py-3 px-5 rounded-xl bg-white border">Click to Update a Course</button> */}
    <button onClick={() => setCrud("create")} className="py-3 px-5 rounded-xl bg-white border">Click to Create a Course</button>

      {crud === "update" ? (
        <div className="flex-1 min-w-[250px] bg-gray-100 dark:bg-gray-800 border-2 border-black rounded-xl p-4 shadow-md flex flex-col gap-2">
          <span><u>New Course Title</u></span>
          
          <input
          className="py-1 border-1 rounded-l mb-2"
          type="text"
          value={updatedCourseTitle}
          onChange={(e) => setUpdatedCourseTitle(e.target.value)}
          />

          <span><u>New Course Number</u></span>
          
          <input
          className="py-1 border-1 rounded-l mb-2"
          type="text"
          value={updatedCourseNumber}
          onChange={(e) => setUpdatedCourseNumber(e.target.value)}
          />

          <span><u>New Course Description</u></span>
          
          <input
          className="py-1 border-1 rounded-l mb-2"
          type="text"
          value={updatedCourseDescription}
          onChange={(e) => setUpdatedCourseDescription(e.target.value)} 
          />
          <button onClick={() => {
              update_course.mutate({
                course_title: updatedCourseTitle,
                course_number: updatedCourseNumber,
                course_description: updatedCourseDescription,
              });
            }} className="py-3 px-5 rounded-xl bg-white border">Update Course</button>
          <span>Refresh page after clicking button to see the result.</span>
        
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
            <button onClick={() => {
              create_course.mutate({
                course_title: newCourseTitle,
                course_number: newCourseNumber,
                course_description: newCourseDescription,
              });
            }} className="py-3 px-5 rounded-xl bg-white border">Create Course</button>
            
            {create_course.isPending ? (
              <div>Creating course...</div>
            ) : (
              <>
                {create_course.isError ? (
                  <div>Error creating course: {create_course.error.message}</div>
                ): null}
                {create_course.isSuccess ? (
                  <div>Course created successfully! ID: {create_course.data.course_id}</div>
                ): null}
              </>
            )}
              
            
            <span>Refresh page after clicking button to see the result.</span>

          </div> 
        ) : crud === "delete" ? (
          <div className="flex-1 min-w-[250px] bg-gray-100 dark:bg-gray-800 border-2 border-black rounded-xl p-4 shadow-md flex flex-col gap-2">
            <span><u>Are you sure you want to delete {currentCourseTitle}?</u></span>
            <span>Click the button below to confirm and delete this course.</span>            
            <button onClick={() => {
              delete_course.mutate({
                course_title: currentCourseTitle,
                course_number: currentCourseNumber,
                course_description: currentCourseDescription,
              });
            }} className="py-3 px-5 rounded-xl bg-white border">Delete Course</button>
            
            <span>Refresh page after clicking button to see the result.</span>

          </div> 
        ) :

        <div></div>
      }


    </div>
  );
}
