export async function fetchUsers() {
    const courses = await fetch(`${import.meta.env.VITE_BACKEND_URL}/users`);
    return courses.json()
}


export async function fetchCourses() {
    const courses = await fetch(`${import.meta.env.VITE_BACKEND_URL}/courses`);
    return courses.json()
}
export async function fetchCourseById(courseId: string) {
    const courses = await fetch(`${import.meta.env.VITE_BACKEND_URL}/courses/${courseId}`);
    return courses.json()
}


export async function fetchEnrollment() {
    const courses = await fetch(`${import.meta.env.VITE_BACKEND_URL}/enrollment`);
    return courses.json()
}

export async function fetchAssignments() {
    const courses = await fetch(`${import.meta.env.VITE_BACKEND_URL}/assignments`);
    return courses.json()
}

export async function fetchSubmissions() {
    const courses = await fetch(`${import.meta.env.VITE_BACKEND_URL}/submissions`);
    return courses.json()
}

export async function fetchFeedback() {
    const courses = await fetch(`${import.meta.env.VITE_BACKEND_URL}/feedback`);
    return courses.json()
}