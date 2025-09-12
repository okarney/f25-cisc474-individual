import Link from "next/link";
import styles from "./page.module.css";

export default function Login() {
  return (
          <div className={styles.page}>
            <h1>Welcome, Name!</h1>

          <div className={styles.main_page}>          
            <div className={styles.menu_table}>
              <div className={styles.menu_item_info}>
                <Link className={styles.menu_item} href="/course1">
                  <span><strong>Advanced Web Technologies</strong></span>
                  <p>CISC474</p>
                </Link>
               </div>

              <hr></hr>
              <div className={styles.menu_item_info}>
                <div className={styles.menu_item}>
                  <span><strong>Computer Science Capstone</strong> (no link yet)</span>
                  <p>CISC498</p>
                </div>
              </div>              
              <hr></hr>
              <div className={styles.menu_item_info}>
                <div className={styles.menu_item}>
                  <span><strong>Fundamentals of Optimization</strong> (no link yet)</span>
                  <p>MATH529</p>
                </div>
              </div>              
              <hr></hr>
              <div className={styles.menu_item_info}>
                <div className={styles.menu_item}>
                  <span><strong>Adv. Calc. w/ Nonlinear Dynamics</strong> (no link yet)</span>
                  <p>MATH503</p>
                </div>
              </div>              
              <hr></hr>
              <div className={styles.menu_item_info}>
                <div className={styles.menu_item}>
                  <span><strong>Concert Choir</strong> (no link yet)</span>
                  <p>MUSC462</p>
              </div>
              </div>              

            </div>


            <div className={styles.menu_table}>
              <span className={styles.menu_item}>Calendar would go here.</span>
            </div>

            <div className={styles.menu_table}>
              <Link href="/enrollment">
                <span>Enroll in a new course!</span>
              </Link>
            </div>
          </div>

          </div>
  )
}