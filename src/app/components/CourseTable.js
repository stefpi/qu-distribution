import React from 'react'
import Link from 'next/link'
export default function CourseTable({ courses }) {
  console.log(courses)
  if (!courses || courses.length === 0) {
    return <div className="text-center">No courses available</div>
  }
  return (
    <div className="container mx-auto px-4 py-6 bg-gray-200 rounded-lg max-w-5xl">
      <div className="table min-w-full bg-gray-200 border-separate border-spacing-y-3">
        <div className="table-header-group bg-gray-200">
          <div className="table-row">
            <div className="cell">Course Code</div>
            <div className="cell">Semester</div>
            <div className="cell">Course Average</div>
            <div className="cell">Class Size</div>
            <div className="cell"></div>
          </div>
        </div>
        <div className="table-row-group">
          {courses.map((course, index) => (
            <Link
              key={index}
              className="table-row hover:bg-gray-100 bg-white transition duration-200"
              href={`/course/${course.courseCode}`}
            >
              <div className="cell rounded-l-lg">{course.courseCode}</div>
              <div className="cell">{course.semester}</div>
              <div className="cell">{course.average}</div>
              <div className="cell">{course.size}</div>
              <div className="cell rounded-r-lg">&gt;</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
