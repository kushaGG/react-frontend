import React from 'react';
import Link from 'next/link';

const Lessons = ({ lessons, loading, courseId }) => {
  if (loading) {
    return <h2>loading...</h2>;
  }

  return (
    <div>
      {lessons.map((lesson) => (
        <li key={lesson._id}>
          <h1>{lesson.title}</h1>
          <h2>{lesson.description}</h2>
          <h2>
            <Link href={`lesson/show?id=${courseId}/${lesson._id}`}>More...</Link>
          </h2>
          <hr />
        </li>
      ))}
    </div>
  );
};

export default Lessons;
