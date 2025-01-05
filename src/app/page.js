'use client'
import Button from './components/Button'
import CourseTable from './components/CourseTable'
import courses from './constants/courses'
import { useEffect, useState } from 'react'
export default function Home() {
  const [courseList, setCourses] = useState([])
  useEffect(() => {
    setCourses(courses)
  }, [courses])
  return (
    <div className="flex flex-col justify-evenly h-screen">
      <div className="flex flex-col justify-evenly items-center min-h-[30vh]">
        <p className="text-xl text-center font-bold">
          queen's university grade distributions
        </p>
        <p className="text-center ">
          upload grade distributions and your course syllabuses without making
          an account.
        </p>
        <p className="text-center ">
          we run on community contribution.{' '}
          <b>please upload your own grade distributions</b> to help out your
          peers. it only takes a <b>couple clicks</b>.
        </p>
        <Button text="upload your courses documents" />
      </div>
      <CourseTable courses={courseList} />
    </div>
  )
}
