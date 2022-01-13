import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import { logout1 } from '../../actions/authrh';


const Navbar = ({ authrh: {isAuthenticated1 , loading1}, register: { isAuthenticated , loading}, logout, logout1 }) => {
  const authLinks = (
    <div className="header-btns header-btn-devider ml-auto pr-2 ml-lg-6 d-none d-xs-flex">
    <Link
      to="/candidat"
      className="btn btn-transparent text-uppercase font-size-3 heading-default-color focus-reset"
      data-toggle="modal"
      data-target="#login"
    >
      Profile
    </Link>
   
     <div className="header-btn-devider ml-auto ml-lg-5 pl-2 d-none d-xs-flex align-items-center">
     <div>
       <a href="#" className="px-3 ml-7 font-size-7 notification-block flex-y-center position-relative">
         <i className="fas fa-bell heading-default-color" />
         <span className="font-size-3 count font-weight-semibold text-white bg-primary circle-24 border border-width-3 border border-white">3</span>
       </a>
     </div>
     <div>
       <div className="dropdown show-gr-dropdown py-5">
         <a className="proile media ml-7 flex-y-center" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
           <div className="circle-40">
             <img src={"../../assets/image/header-profile.png"} alt="" />
           </div>
           <i className="fas fa-chevron-down heading-default-color ml-6" />
         </a>
         <div className="dropdown-menu gr-menu-dropdown dropdown-right border-0 border-width-2 py-2 w-auto bg-default" aria-labelledby="dropdownMenuLink">
           <Link className="dropdown-item py-2 font-size-3 font-weight-semibold line-height-1p2 text-uppercase" to="/dashboard">Settings </Link>
           <Link className="dropdown-item py-2 font-size-3 font-weight-semibold line-height-1p2 text-uppercase" to="/dashboard">Edit Profile</Link>
           <a  onClick={logout} className="dropdown-item py-2 text-red font-size-3 font-weight-semibold line-height-1p2 text-uppercase" href="#!">Log Out</a>
         </div>
       </div>
     </div>
   </div>
   </div>
  );
  const auth1Links = (
    <div className="header-btns header-btn-devider ml-auto pr-2 ml-lg-6 d-none d-xs-flex">
    <Link
      to="/postedjobs"
      className="btn btn-transparent text-uppercase font-size-3 heading-default-color focus-reset"
      data-toggle="modal"
      data-target="#login"
    >
      Profile Company
    </Link>
    <div className="header-btn-devider ml-auto ml-lg-5 pl-2 d-none d-xs-flex align-items-center">
    <div>
      <a href="#" className="px-3 ml-7 font-size-7 notification-block flex-y-center position-relative">
        <i className="fas fa-bell heading-default-color" />
        <span className="font-size-3 count font-weight-semibold text-white bg-primary circle-24 border border-width-3 border border-white">3</span>
      </a>
    </div>
    <div>
      <div className="dropdown show-gr-dropdown py-5">
        <a className="proile media ml-7 flex-y-center" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <div className="circle-40">
            <img src={"../../assets/image/header-profile.png"} alt="" />
          </div>
          <i className="fas fa-chevron-down heading-default-color ml-6" />
        </a>
        <div className="dropdown-menu gr-menu-dropdown dropdown-right border-0 border-width-2 py-2 w-auto bg-default" aria-labelledby="dropdownMenuLink">
          <Link className="dropdown-item py-2 font-size-3 font-weight-semibold line-height-1p2 text-uppercase" to="/dashboard">Settings </Link>
          <Link className="dropdown-item py-2 font-size-3 font-weight-semibold line-height-1p2 text-uppercase" to="/dashboard">Edit Profile</Link>
          <a  onClick={logout1} className="dropdown-item py-2 text-red font-size-3 font-weight-semibold line-height-1p2 text-uppercase" href="#!">Log Out</a>
        </div>
      </div>
    </div>
  </div>
  </div>
  );


  const guestLinks = (
    <div className="header-btns header-btn-devider ml-auto pr-2 ml-lg-6 d-none d-xs-flex">
       <Link
      to="/loginrh"
      className="btn btn-transparent text-uppercase font-size-3 heading-default-color focus-reset"
      data-toggle="modal"
      data-target="#login"
    >
      Post Job
    </Link>
    <Link
      to="/login"
      className="btn btn-transparent text-uppercase font-size-3 heading-default-color focus-reset"
      data-toggle="modal"
      data-target="#login"
    >
      Log in
    </Link>
   
    <Link
      to="/register"
      className="btn btn-primary text-uppercase font-size-3"
      data-toggle="modal"
      data-target="#signup"
    >
      Sign up
    </Link>
   
  </div>
  );

  return (
    <>
    
      <header className="site-header site-header--menu-right bg-default py-7 py-lg-0 site-header--absolute site-header--sticky">
      <div className="container">
        <nav className="navbar site-navbar offcanvas-active navbar-expand-lg  px-0 py-0">
          {/* Brand Logo*/}
          <div className="brand-logo">
            <Link to="/">
              {/* light version logo (logo must be black)*/}
              <img
                src={"../../assets/image/logo-main-black.png"}
                alt=""
                className="light-version-logo default-logo"
              />
              {/* Dark version logo (logo must be White)*/}
              <img
                src={"../../assets/image/logo-main-white.png"}
                alt=""
                className="dark-version-logo"
              />
            </Link>
          </div>
          <div className="collapse navbar-collapse" id="mobile-menu">
          <div className="navbar-nav-wrapper">
                <ul className="navbar-nav main-menu">
                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/jobs">
                      jobs
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            
            <button
              className="d-block d-lg-none offcanvas-btn-close focus-reset"
              type="button"
              data-toggle="collapse"
              data-target="#mobile-menu"
              aria-controls="mobile-menu"
              aria-expanded="true"
              aria-label="Toggle navigation"
            >
              <i className="gr-cross-icon" />
            </button>
          </div>
          <Fragment>{isAuthenticated ? authLinks : (isAuthenticated1 ? auth1Links  : guestLinks) }</Fragment>
          {/* Mobile Menu Hamburger*/}
          <button
            className="navbar-toggler btn-close-off-canvas  hamburger-icon border-0"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-menu"
            aria-controls="mobile-menu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* <i class="icon icon-simple-remove icon-close"></i> */}
            <span className="hamburger hamburger--squeeze js-hamburger">
              <span className="hamburger-box">
                <span className="hamburger-inner" />
              </span>
            </span>
          </button>
          {/*/.Mobile Menu Hamburger Ends*/}
        </nav>
      </div>
    </header>
    </>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  logout1: PropTypes.func.isRequired,
  register: PropTypes.object.isRequired,
  authrh : PropTypes.object.isRequired

};

const mapStateToProps = (state) => ({
  register: state.register,
  authrh: state.authrh
});

export default connect(mapStateToProps, { logout, logout1 })(Navbar);
