import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Layout from '../components/Layout'
import Lessons from '../components/Lessons'
import Pagination from '../components/Pagination'

const Course = ({url:query}) => {
  const [lessons, setLessons] = useState([]);
  const [course, setCourse] = useState([])
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [lessonsPerPage] = useState(2);
  const id = query.asPath.split('=')[1]

  useEffect(() => {
    const fetchCourse = async () => {
      setLoading(true)

      const res = await axios.get(`https://gentle-cove-75304.herokuapp.com/courses/${id}`);
      setCourse(res.data)
      const resLes = await axios.get(`https://gentle-cove-75304.herokuapp.com/course/${id}/lessons`);
      
      const arr = []
      for (let i = resLes.data.length - 1; i >= 0; i--) {
        arr.push(resLes.data[i]);
      }

      setLessons(arr)
      setLoading(false)
    }

    fetchCourse()
  }, [])
  

  const indexOfLastLesson = currentPage * lessonsPerPage;
  const indexOfFirstLesson = indexOfLastLesson - lessonsPerPage;
  const currentLessons = lessons.slice(indexOfFirstLesson, indexOfLastLesson);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Layout>
      <div>
        {course.title}
        {course.description}
      </div>

      <Lessons lessons={currentLessons} loading={loading} />
      <Pagination coursePerPage={lessonsPerPage} totalCourses={lessons.length} paginate={paginate} />
    </Layout>
  );

}

export default Course