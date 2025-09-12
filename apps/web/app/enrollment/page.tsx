import styles from "./page.module.css";

export default function Login() {
  return (
          <div className={styles.page}>
            <h1>Available Courses</h1>

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