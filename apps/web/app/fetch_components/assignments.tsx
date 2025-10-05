'use client'
import { use } from 'react'

export default function Assignments({
  assignments,
}: {
  assignments: Promise<{ assignment_id: string; assignment_title: string }[]>
}) {
  const allAssignments = use(assignments)
 
  return (
    <ul>
      {allAssignments.map((assignment) => (
        <li key={assignment.assignment_id}>{assignment.assignment_title}</li>
      ))}
    </ul>
  )
}