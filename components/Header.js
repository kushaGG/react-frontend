import Link from 'next/link';
import { connect } from 'react-redux';
import actions from '../redux/actions';

const Header = ({ props, isAuthenticated, deauthenticate }) => (
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item" href="/">
          Home
        </a>

        <a class="navbar-item" href="/about">
          About
        </a>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            {!isAuthenticated && <Link href="/login"><a class="button is-primary">Sign In</a></Link>}
            {!isAuthenticated && <Link href="/register"><a class="button is-light">Sign Up</a></Link>}
            {isAuthenticated && <li onClick={deauthenticate}><a class="button is-light">Sign Out</a></li>}
          </div>
        </div>
      </div>
    </div>
  </nav>
);

const mapStateToProps = (state) => (
  {isAuthenticated: !!state.authentication.auth_token}
);

export default connect(mapStateToProps, actions)(Header);