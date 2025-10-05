import { Suspense } from "react";
import styles from "./page.module.css";
import Assignments from "../fetch_components/assignments";
import Link from "next/link";

export default async function Assignment1() {
  const assignments = (await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/assignments`)).json();

  return (
    <div className={styles.page}>
      <h1>Learning Next.js</h1>

      <h4>Assignments from Backend Connection</h4>
      <Suspense fallback={<div>Loading...</div>}>
            <Assignments assignments={assignments} />
      </Suspense>

      <br></br>
        <Link style={{color: "blue"}} href="/dashboard"><u>Back to Dashboard</u></Link>
      <br></br>

      <div className={styles.main_page}>
        <div className={styles.assignment_info}>
          <div className={styles.section_box}>
            <p><strong>Due:</strong> September 12 at 11:59p.m. | -/20pts</p>
          </div>
          <div className={styles.section_box}>
            <span>
              <strong>Description:</strong><br></br>
              Read over the following NextJS doc pages:
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
              Just to be clear, you should be developing the pages for your Individual Web Application (the LMS).
            </span>
          </div>
        </div>

        <button className={styles.secondary}>Submit Assignment</button>
      </div>
    </div>
  );
}
