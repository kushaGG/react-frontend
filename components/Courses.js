import React from 'react';
import Link from 'next/link';

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
            <Link
             href={{ pathname: '/course', query: { id: `${course._id}` }}} >More...</Link>
          </h2>
          <hr />
        </li>
      ))}
    </div>
  );
};

export default Courses;
