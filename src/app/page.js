'use client'
import Button from './components/Button'
import CourseTable from './components/CourseTable'
import SearchBar from './components/SearchBar'
import courses from './constants/courses'
import { useEffect, useState } from 'react'

export default function Home() {
  const [courseList, setCourses] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  useEffect(() => {
    setCourses(courses)
  }, [courses])
  useEffect(() => {
    const filteredCourses = courses.filter((course) =>
      course.courseCode.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setCourses(filteredCourses)
  }, [searchTerm])

  return (
    <div>
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
        <SearchBar setSearchTerm={setSearchTerm} setCourses={setCourses} />
        <CourseTable courses={courseList} />
      </div>
      <div className="flex flex-col justify-evenly items-center min-h-[20vh]">
        <p className="text-center">
          we were tired of course syllabus / grade distribution websites that
          tried to be fancy, but were never up to date.
        </p>
        <p className="text-center">
          help us to help students find classes they actually want to take.
        </p>
        <p className="text-center">
          course information with no bullshit. made by queens students for
          queens students
        </p>
      </div>
    </div>
  )
}
