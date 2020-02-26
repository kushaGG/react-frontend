import Router from 'next/router';
import actions from '../redux/actions';
import { getCookie } from '../utils/cookie';

// checks if the page is being loaded on the server, and if so, get auth token from the cookie:
export default function(ctx) {
  if (ctx.isServer) {
    if (ctx.req.headers.cookie) {
      ctx.store.dispatch(actions.reauthenticate(getCookie('auth_token', ctx.req)));
    }
  } else {
    const auth_token = ctx.store.getState().authentication.auth_token;
    if (auth_token && (ctx.pathname === '/user/login' || ctx.pathname === '/user/register')) {
      setTimeout(function() {
        Router.push('/');
      }, 0);
    }
  }
}
