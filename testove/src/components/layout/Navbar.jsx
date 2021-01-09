import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../../reducers/auth-reducer";

const Navbar = ({ auth: { isAuth, loading }, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <NavLink to="/listUser">List User</NavLink>
      </li>
      <li>
        <a onClick={logout} href="!#">
          <span>Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <NavLink to="/register">Sign Up</NavLink>
      </li>
      <li>
        <NavLink to="/login">Sign In</NavLink>
      </li>
    </ul>
  );

  return <nav>{!loading && <>{isAuth ? authLinks : guestLinks}</>}</nav>;
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
