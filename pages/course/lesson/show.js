import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { connect } from 'react-redux';
import initialize from '../../../utils/initialize';

import Layout from '../../../components/Layout';

const Lesson = (query) => {
  const [lesson, setLesson] = useState([]);
  const [course, setCourse] = useState('')
  const [courseId] = useState(query.props.query.id.split('/')[0]);
  const [lessonId] = useState(query.props.query.id.split('/')[1]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchLesson = async () => {
      setLoading(true);
      const res = await axios.get(`https://gentle-cove-75304.herokuapp.com/course/${courseId}/lesson/${lessonId}`);
      setLesson(res.data);
      setCourse(res.data.course.title)
      setLoading(false);
    };

    fetchLesson();
  }, []);

  if (loading) {
    return (
      <Layout>
        <h2>loading...</h2>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div>
        <h1>Course: {course}</h1>
        <h1>{lesson.title}</h1>
        <h2>{lesson.description}</h2>
      </div>
    </Layout>
  );
};

Lesson.getInitialProps = function(ctx) {
  initialize(ctx);
  return {
    props: ctx,
  };
};

export default connect((state) => state)(Lesson);
