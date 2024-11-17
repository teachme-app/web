import { useState, useEffect } from 'react'

interface Course {
  id: string
  name: string
  description: string
  price: number
  bannerUrl: string
}

const useCourse = () => {
  const [courses, setCourses] = useState<Course[]>(() => {
    const storedCourses = localStorage.getItem('courses')
    return storedCourses ? JSON.parse(storedCourses) : []
  })

  useEffect(() => {
    localStorage.setItem('courses', JSON.stringify(courses))
  }, [courses])

  const addCourse = (course: Course) => {
    setCourses([...courses, course])
  }

  const removeCourse = (courseId: string) => {
    setCourses(courses.filter((course) => course.id !== courseId))
  }

  const updateCourse = (updatedCourse: Course) => {
    setCourses(courses.map((course) => (course.id === updatedCourse.id ? updatedCourse : course)))
  }

  return {
    courses,
    addCourse,
    removeCourse,
    updateCourse,
  }
}

export default useCourse
