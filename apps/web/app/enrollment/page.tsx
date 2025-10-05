import { Suspense } from "react";
import styles from "./page.module.css";
import Courses from "../fetch_components/courses";
import Link from "next/link";

export default async function Login() {
  const courses = (await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/courses`)).json();

  return (
          <div className={styles.page}>
            <h1>Available Courses</h1>
      
          <h4>Courses from Backend Connection</h4>

          <Suspense fallback={<div>Loading...</div>}>
            <Courses courses={courses} />
          </Suspense>

          <br></br>
          <Link style={{color: "blue"}} href="/dashboard"><u>Back to Dashboard</u></Link>
          <br></br>

          <div className={styles.main_page}>          
            <div className={styles.menu_table}>
              <div className={styles.menu_item_info}>
                <div className={styles.menu_item}>
                  <span><strong>Advanced Web Technologies</strong></span>
                  <p>CISC474</p>
                </div>
                <button className={styles.secondary}>Enroll</button>
               </div>

              <hr></hr>
              <div className={styles.menu_item_info}>
                <div className={styles.menu_item}>
                  <span><strong>Computer Science Capstone</strong> (no link yet)</span>
                  <p>CISC498</p>
                </div>
                <button className={styles.secondary}>Enroll</button>
              </div>              
              <hr></hr>
              <div className={styles.menu_item_info}>
                <div className={styles.menu_item}>
                  <span><strong>Fundamentals of Optimization</strong> (no link yet)</span>
                  <p>MATH529</p>
                </div>
                <button className={styles.secondary}>Enroll</button>
              </div>              
              <hr></hr>
              <div className={styles.menu_item_info}>
                <div className={styles.menu_item}>
                  <span><strong>Adv. Calc. w/ Nonlinear Dynamics</strong> (no link yet)</span>
                  <p>MATH503</p>
                </div>
                <button className={styles.secondary}>Enroll</button>
              </div>              
              <hr></hr>
              <div className={styles.menu_item_info}>
                <div className={styles.menu_item}>
                  <span><strong>Concert Choir</strong> (no link yet)</span>
                  <p>MUSC462</p>
                </div>
                <button className={styles.secondary}>Enroll</button>
              </div>              

            </div>

            
          </div>

          </div>
  )
}