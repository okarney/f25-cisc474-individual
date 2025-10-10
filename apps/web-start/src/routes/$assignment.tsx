import { createFileRoute } from '@tanstack/react-router'
import '../css/assignment1.module.css'
import { useQuery } from '@tanstack/react-query';
import { fetchAssignmentById } from '../fetch';

export const Route = createFileRoute('/$assignment')({
  component: RouteComponent,
  loader: ({ params }) => fetchAssignmentById(params.assignment)
  
})

function RouteComponent() {
  const { assignment } = Route.useParams()

  const {isPending: pagePending, isError: isPageError, data: pageData, error: pageError} = useQuery({queryKey: ['assignments', assignment], queryFn: () => fetchAssignmentById(assignment) })


  if (pagePending) {
    return <span>Loading...</span>
  }

  if (isPageError) {
    return <span>Error: {pageError.message}</span>
  }

  
  return (
    <div className="page">
      <h1>{pageData.assignment_title}</h1>


      <div className="main_page">
        <div className="assignment_info">
          <div className="section_box">
            <p><strong>Due:</strong>{pageData.assignment_due_date} | -/20pts</p>
          </div>
          <div className="section_box">
            <span>
              <strong>Description:</strong><br></br>
              {pageData.assignment_description}
              {/* Read over the following NextJS doc pages:
              <br></br>
              <br></br>

              Project Structure
              Layouts and Pages<br></br>
              Linking and Navigating<br></br>
              Server and Client Components
              <br></br>
              <br></br>
              Then start developing the frontend of your website based on your designs.
              <br></br>
              <br></br>
              I want to see at least 5 pages that link to each other.
              <br></br>
              <br></br>
              Submit a link to the deployed page on Vercel.
              <br></br>
              <br></br>
              Just to be clear, you should be developing the pages for your Individual Web Application (the LMS). */}
            </span>
          </div>
        </div>

        <button className="secondary">Submit Assignment</button>
      </div>
    </div>
  );

}
