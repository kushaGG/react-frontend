import Router from 'next/router';

const header = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const createLesson = ({ title, description, user, courseId }, type) => {
  console.log(user);
  return () => {
    fetch(`https://gentle-cove-75304.herokuapp.com/course/${courseId}/lessons`, {
      method: 'POST',
      mode: 'cors',
      credentials: 'same-origin',
      headers: {
        ...header,
        'auth-token': user,
      },
      body: JSON.stringify({ title: title, description: description }),
    }).then((res) => {
      res.json().then(function(data) {
        console.log(data);
        Router.push(`/course/lesson/show?id=${courseId}/${data._id}`);
      });
    });
  };
};
export default { createLesson };
