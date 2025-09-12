import styles from "./page.module.css";

export default function Assignment1() {
  return (
    <div className={styles.page}>
      <h1>Learning Next.js</h1>

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
