import Router from 'next/router';

const header = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const create = ({ title, description, user }, type) => {
  console.log(user);
  return () => {
    fetch(`https://gentle-cove-75304.herokuapp.com/courses`, {
      method: 'POST',
      mode: 'cors',
      credentials: 'same-origin',
      headers: {
        ...header,
        'auth-token': user,
      },
      body: JSON.stringify({ title: title, description: description }),
    })
      .then((res) => {
        res.json().then(function(data) {  
          console.log(data);  
          Router.push(`/course/show?id=${data._id}`);
        });
        
      });
  };
};
export default { create };
