import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link'

import { connect } from 'react-redux';
import initialize from '../../utils/initialize';

import Layout from '../../components/Layout';
import Lessons from '../../components/Lessons';
import Pagination from '../../components/Pagination';

const Course = (query) => {
  const [user, setUser] = useState('');
  const [lessons, setLessons] = useState([]);
  const [course, setCourse] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [lessonsPerPage] = useState(2);
  const [id] = useState(query.props.query.id);

  console.log(query);

  useEffect(() => {
    const fetchCourse = async () => {
      setLoading(true);

      const res = await axios.get(`https://gentle-cove-75304.herokuapp.com/courses/${id}`);
      setCourse(res.data);
      setUser(res.data.user.username);

      const resLes = await axios.get(`https://gentle-cove-75304.herokuapp.com/course/${id}/lessons`);

      const arr = [];
      for (let i = resLes.data.length - 1; i >= 0; i--) {
        arr.push(resLes.data[i]);
      }

      setLessons(arr);
      setLoading(false);
    };

    fetchCourse();
  }, []);

  const indexOfLastLesson = currentPage * lessonsPerPage;
  const indexOfFirstLesson = indexOfLastLesson - lessonsPerPage;
  const currentLessons = lessons.slice(indexOfFirstLesson, indexOfLastLesson);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Layout>
      <div>
        <h1>{course.title}</h1>
        <h3>{course.description}</h3>
        <h6>Created by: {user}</h6>
      </div>
      <Link href={`lesson/create?id=${id}`}>More...</Link>
      <Lessons lessons={currentLessons} loading={loading} courseId={id} />
      <Pagination coursePerPage={lessonsPerPage} totalCourses={lessons.length} paginate={paginate} />
    </Layout>
  );
};

Course.getInitialProps = function(ctx) {
  initialize(ctx);
  return {
    props: ctx,
  };
};

export default connect((state) => state)(Course);
