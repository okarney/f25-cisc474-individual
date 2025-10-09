import { Link, createFileRoute } from '@tanstack/react-router';
// import '../css/dashboard.module.css'
import '../styles.css'
import { useQuery } from '@tanstack/react-query';
import { fetchCourses } from '../fetch';

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

  const {isPending, isError, data, error} = useQuery({queryKey: ['course'], queryFn: fetchCourses})
  
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
          <Link style={{color: "blue"}} to="/assignment1">
            <u>Link to See Assignments from Backend Connection</u>
          </Link>
            <br></br><br></br>
            <Link style={{color: "blue"}} to="/enrollment">
            <u>Link to See Courses from Backend Connection</u>
          </Link>
        </span>
      </div>

      <div className="flex-1 min-w-[250px] bg-gray-100 border-2 border-black rounded-xl p-4 shadow-md text-center">
        <Link to="/enrollment" className="text-lg font-semibold text-[#00309B] hover:underline">
          Enroll in a new course!
        </Link>
      </div>
    </div>

    </div>
  );
}
