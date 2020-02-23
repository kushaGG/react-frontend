import Router from 'next/router';
import axios from 'axios';
import { AUTHENTICATE, DEAUTHENTICATE } from '../types';
import { setCookie, removeCookie } from '../../utils/cookie';

// gets token from the api and stores it in the redux store and in cookie
const authenticate = ({ username, email, password }, type) => {
  if (type !== 'login' && type !== 'register') {
    throw new Error('Wrong API call!');
  } else if (type == 'login') {
    return (dispatch) => {
      axios
        .post(`https://gentle-cove-75304.herokuapp.com/user/${type}`, { email, password })
        .then((response) => {
          console.log(response);
          setCookie('auth_token', response.data.auth_token);
          Router.push('/');
          dispatch({ type: AUTHENTICATE, payload: response.data.auth_token });
        })
        .catch((err) => {
          throw new Error(err);
        });
    };
  } else {
    return (dispatch) => {
      axios
        .post(`https://gentle-cove-75304.herokuapp.com/user/${type}`, { username, email, password })
        .then((response) => {
          console.log(response);
          setCookie('auth_token', response.data.auth_token);
          Router.push('/');
          dispatch({ type: AUTHENTICATE, payload: response.data.auth_token });
        })
        .catch((err) => {
          throw new Error(err);
        });
    };
  }
};

// gets the token from the cookie and saves it in the store
const reauthenticate = (auth_token) => {
  return (dispatch) => {
    dispatch({ type: AUTHENTICATE, payload: auth_token });
  };
};

// removing the token
const deauthenticate = () => {
  return (dispatch) => {
    removeCookie('auth_token');
    Router.push('/');
    dispatch({ type: DEAUTHENTICATE });
  };
};

export default {
  authenticate,
  reauthenticate,
  deauthenticate,
};
