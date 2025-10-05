'use client'
import { use } from 'react'
 
export default function Users({
  users,
}: {
  users: Promise<{ user_id: string; user_name: string }[]>
}) {
  const allUsers = use(users)
 
  return (
    <ul>
      {allUsers.map((user) => (
        <li key={user.user_id}>{user.user_name}</li>
      ))}
    </ul>
  )
}