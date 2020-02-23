import { AUTHENTICATE, DEAUTHENTICATE } from '../types';

const initialState = {
  auth_token: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return { auth_token: action.payload };
    case DEAUTHENTICATE:
      return { auth_token: null };
    default:
      return state;
  }
};
