'use client';
import Image, { type ImageProps } from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function Home() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const router = useRouter();

    return (
        <div className={styles.page}>
            <h1>Welcome to LMS!</h1>
            <main className={styles.main}>
                <div className={styles.login}>
                    <h2>Login</h2>
                    <input 
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                        className={styles.inputBox}
                    />
                    <input 
                        type="text"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        className={styles.inputBox}
                    />
                    
                    <button
                        className={styles.secondary}
                        onClick={() => router.push("/dashboard")}
                        > Login
                    </button>
                    
                </div>

                
            </main>
    
        </div>
    );
}
