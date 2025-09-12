"use client"
import Link from "next/link";
import styles from "./page.module.css";
import { useState } from "react";

export default function Login() {
  const [activeSection, setActiveSection] = useState("Assignments");
  return (
          <div >
            <div className={styles.page}>
            <h1>Course 1</h1>

          <div className={styles.main_page}>          
            <div className={styles.menu_table}>
                <button className={styles.menu_item} onClick={() => setActiveSection("Assignments")}>Assignments</button>
                <hr></hr>
                <button className={styles.menu_item} onClick={() => setActiveSection("Calendar")}>Calendar</button>
                <hr></hr>
                <button className={styles.menu_item} onClick={() => setActiveSection("Files")}>Files</button>

            </div>
            {activeSection === "Assignments" && (
              <div className={styles.main_page}>          
                <div className={styles.menu_table}>
                    <div className={styles.menu_item}>
                      <Link className={styles.menu_link} href="/assignment1">
                        <div className={styles.menu_item_info}>
                          <span><strong>Learning Next.js</strong></span>
                          <p><strong>Due:</strong> September 12 at 11:59p.m. | -/20pts</p>
                        </div>
                        <div><p>100%</p></div>
                      </Link>
                    </div>
                </div>
              </div>
              )
            }

            {activeSection === "Calendar" && (
              <div className={styles.main_page}>          
                <div className={styles.calendar}>
                  <span className={styles.menu_item}>Calendar would go here.</span>
                </div>
              </div>
            )}

            {activeSection === "Files" && (
              <div className={styles.main_page}>          
                <div className={styles.menu_table}>
                  <Link className={styles.menu_item} href="/file1">File 1</Link>
                </div>
              </div>
            )}
            
          </div>

          </div>
          </div>
  )
}