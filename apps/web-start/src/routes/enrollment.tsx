import { createFileRoute } from '@tanstack/react-router'
import '../css/enrollment.module.css'

export const Route = createFileRoute('/enrollment')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="page">
      <h1>Available Courses</h1>

    {/* <h4>Courses from Backend Connection</h4>

    <Suspense fallback={<div>Loading...</div>}>
      <Courses courses={courses} />
    </Suspense>

    <br></br>
    <Link style={{color: "blue"}} href="/dashboard"><u>Back to Dashboard</u></Link>
    <br></br> */}

    <div className="main_page">          
      <div className="menu_table">
        <div className="menu_item_info">
          <div className="menu_item">
            <span><strong>Advanced Web Technologies</strong></span>
            <p>CISC474</p>
          </div>
          <button className="secondary">Enroll</button>
          </div>

        <hr></hr>
        <div className="menu_item_info">
          <div className="menu_item">
            <span><strong>Computer Science Capstone</strong> (no link yet)</span>
            <p>CISC498</p>
          </div>
          <button className="secondary">Enroll</button>
        </div>              
        <hr></hr>
        <div className="menu_item_info">
          <div className="menu_item">
            <span><strong>Fundamentals of Optimization</strong> (no link yet)</span>
            <p>MATH529</p>
          </div>
          <button className="secondary">Enroll</button>
        </div>              
        <hr></hr>
        <div className="menu_item_info">
          <div className="menu_item">
            <span><strong>Adv. Calc. w/ Nonlinear Dynamics</strong> (no link yet)</span>
            <p>MATH503</p>
          </div>
          <button className="secondary">Enroll</button>
        </div>              
        <hr></hr>
        <div className="menu_item_info">
          <div className="menu_item">
            <span><strong>Concert Choir</strong> (no link yet)</span>
            <p>MUSC462</p>
          </div>
          <button className="secondary">Enroll</button>
        </div>              

      </div>

      
    </div>

    </div>
  )
}
