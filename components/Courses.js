import React from 'react';
import Link from 'next/link';

import { connect } from 'react-redux';
import initialize from '../utils/initialize';

const Courses = ({ courses, loading }) => {
  if (loading) {
    return <h2>loading...</h2>;
  }

  return (
    <div>
      {courses.map((course) => (
        <li key={course._id}>
          <h1>{course.title}</h1>
          <h2>{course.description}</h2>
          <h2>
            <Link href={{ pathname: '/course/show', query: { id: `${course._id}` } }}>More...</Link>
          </h2>
          <hr />
        </li>
      ))}
    </div>
  );
};

Courses.getInitialProps = function(ctx) {
  initialize(ctx);
};

export default connect((state) => state)(Courses);
