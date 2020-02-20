import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Layout from '../components/Layout';
import Courses from '../components/Courses';
import Pagination from '../components/Pagination';

const Index = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [coursePerPage, setCoursePerPage] = useState(2);

  useEffect(() => {
    const fetchCourse = async () => {
      setLoading(true);
      const res = await axios.get(`https://gentle-cove-75304.herokuapp.com/courses`);
      setCourses(res.data);
      setLoading(false);
    };

    fetchCourse();
  }, []);

  const indexOfLastCourse = currentPage * coursePerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursePerPage;
  const currentCourses = courses.slice(indexOfFirstCourse, indexOfLastCourse);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Layout>
      <Courses courses={currentCourses} loading={loading} />
      <Pagination coursePerPage={coursePerPage} totalCourses={courses.length} paginate={paginate} />
    </Layout>
  );
};

export default Index;
