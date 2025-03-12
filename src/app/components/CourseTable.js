import React from 'react'
import Link from 'next/link'
export default function CourseTable({ courses }) {
  if (!courses || courses.length === 0) {
    return <div className="text-center">No courses available</div>
  }
  return (
    <div className="container mx-auto px-4 py-6 bg-customGray rounded-lg max-w-5xl">
      <div className="min-w-full bg-customGray border-separate border-spacing-y-3">
        <div className="grid grid-cols-5 bg-customGray block">
          {/* <div className="table-row"> */}
          <div className="cell">Course Code</div>
          <div className="cell">Semester</div>
          <div className="cell">Course Average</div>
          <div className="cell">Class Size</div>
          <div className="cell"></div>
          {/* </div> */}
        </div>
        <div className="overflow-y-auto h-[40vh] space-y-2">
          {courses.map((course, index) => (
            <Link
              key={index}
              className="grid grid-cols-5 hover:bg-gray-100 bg-white transition duration-200 rounded-lg"
              href={`/course/${course.courseCode}`}
            >
              <div className="cell">{course.courseCode}</div>
              <div className="cell">{course.semester}</div>
              <div className="cell">{course.average}</div>
              <div className="cell">{course.size}</div>
              <div className="cell">&gt;</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
