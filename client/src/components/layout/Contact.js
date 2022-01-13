import React from "react";
import { Link } from "react-router-dom";
export default function Contact() {
  return (
    <React.Fragment>
      <div className="site-wrapper overflow-hidden ">
        {/* Header start  */}
        {/* Header Area */}
        <header className="site-header site-header--menu-right bg-white light-mode-texts site-header--absolute site-header--sticky">
          <div className="container">
            <nav className="navbar site-navbar offcanvas-active navbar-expand-lg  px-0 py-0">
              {/* Brand Logo*/}
              <div className="brand-logo">
                <a href="./index.html">
                  {/* light version logo (logo must be black)*/}
                  <img
                    src="assets/image/logo-main-black.png"
                    alt=""
                    className="light-version-logo default-logo"
                  />
                  {/* Dark version logo (logo must be White)*/}
                  <img
                    src="assets/image/logo-main-white.png"
                    alt=""
                    className="dark-version-logo"
                  />
                </a>
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
              <div className="header-btns header-btn-devider ml-auto pr-2 ml-lg-9 d-none d-xs-flex">
                <Link
                  className="btn btn-transparent text-uppercase font-size-3 heading-default-color focus-reset"
                  to="/login"
                  data-toggle="modal"
                  data-target="#login"
                >
                  Log in
                </Link>
                <Link
                  className="btn btn-primary text-uppercase font-size-3"
                  to="/register"
                  data-toggle="modal"
                  data-target="#signup"
                >
                  Sign up
                </Link>
              </div>
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
        {/* navbar- */}
        {/* Login Modal */}
        <div
          className="modal fade form-modal"
          id="login"
          tabIndex={-1}
          aria-hidden="true"
        >
          <div className="modal-dialog max-width-px-840 position-relative">
            <button
              type="button"
              className="circle-32 btn-reset bg-white pos-abs-tr mt-md-n6 mr-lg-n6 focus-reset z-index-supper"
              data-dismiss="modal"
            >
              <i className="fas fa-times" />
            </button>
            <div className="login-modal-main bg-white rounded-8 overflow-hidden">
              <div className="row no-gutters">
                <div className="col-lg-5 col-md-6">
                  <div className="pt-10 pb-6 pl-11 pr-12 bg-black-2 h-100 d-flex flex-column dark-mode-texts">
                    <div className="pb-9">
                      <h3 className="font-size-8 text-white line-height-reset pb-4 line-height-1p4">
                        Welcome Back
                      </h3>
                      <p className="mb-0 font-size-4 text-white">
                        Log in to continue your account and explore new jobs.
                      </p>
                    </div>
                    <div className="border-top border-default-color-2 mt-auto">
                      <div className="d-flex mx-n9 pt-6 flex-xs-row flex-column">
                        <div className="pt-5 px-9">
                          <h3 className="font-size-7 text-white">295</h3>
                          <p className="font-size-3 text-white gr-opacity-5 line-height-1p4">
                            New jobs posted today
                          </p>
                        </div>
                        <div className="pt-5 px-9">
                          <h3 className="font-size-7 text-white">14</h3>
                          <p className="font-size-3 text-white gr-opacity-5 line-height-1p4">
                            New companies registered
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 col-md-6">
                  <div className="bg-white-2 h-100 px-11 pt-11 pb-7">
                    <div className="row">
                      <div className="col-4 col-xs-12">
                        <a
                          href
                          className="font-size-4 font-weight-semibold position-relative text-white bg-allports h-px-48 flex-all-center w-100 px-6 rounded-5 mb-4"
                        >
                          <i className="fab fa-linkedin pos-xs-abs-cl font-size-7 ml-xs-4" />{" "}
                          <span className="d-none d-xs-block">
                            Log in with LinkedIn
                          </span>
                        </a>
                      </div>
                      <div className="col-4 col-xs-12">
                        <a
                          href
                          className="font-size-4 font-weight-semibold position-relative text-white bg-poppy h-px-48 flex-all-center w-100 px-6 rounded-5 mb-4"
                        >
                          <i className="fab fa-google pos-xs-abs-cl font-size-7 ml-xs-4" />{" "}
                          <span className="d-none d-xs-block">
                            Log in with Google
                          </span>
                        </a>
                      </div>
                      <div className="col-4 col-xs-12">
                        <a
                          href
                          className="font-size-4 font-weight-semibold position-relative text-white bg-marino h-px-48 flex-all-center w-100 px-6 rounded-5 mb-4"
                        >
                          <i className="fab fa-facebook-square pos-xs-abs-cl font-size-7 ml-xs-4" />{" "}
                          <span className="d-none d-xs-block">
                            Log in with Facebook
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="or-devider">
                      <span className="font-size-3 line-height-reset ">Or</span>
                    </div>
                    <form action="/">
                      <div className="form-group">
                        <label
                          htmlFor="email"
                          className="font-size-4 text-black-2 font-weight-semibold line-height-reset"
                        >
                          E-mail
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="example@gmail.com"
                          id="email"
                        />
                      </div>
                      <div className="form-group">
                        <label
                          htmlFor="password"
                          className="font-size-4 text-black-2 font-weight-semibold line-height-reset"
                        >
                          Password
                        </label>
                        <div className="position-relative">
                          <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Enter password"
                          />
                          <a
                            href="#"
                            className="show-password pos-abs-cr fas mr-6 text-black-2"
                            data-show-pass="password"
                          />
                        </div>
                      </div>
                      <div className="form-group d-flex flex-wrap justify-content-between">
                        <label
                          htmlFor="terms-check"
                          className="gr-check-input d-flex  mr-3"
                        >
                          <input
                            className="d-none"
                            type="checkbox"
                            id="terms-check"
                          />
                          <span className="checkbox mr-5" />
                          <span className="font-size-3 mb-0 line-height-reset mb-1 d-block">
                            Remember password
                          </span>
                        </label>
                        <a
                          href
                          className="font-size-3 text-dodger line-height-reset"
                        >
                          Forget Password
                        </a>
                      </div>
                      <div className="form-group mb-8">
                        <button className="btn btn-primary btn-medium w-100 rounded-5 text-uppercase">
                          Log in{" "}
                        </button>
                      </div>
                      <p className="font-size-4 text-center heading-default-color">
                        Don’t have an account?{" "}
                        <a href className="text-primary">
                          Create a free account
                        </a>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Sign Up Modal */}
        <div
          className="modal fade form-modal"
          id="signup"
          tabIndex={-1}
          aria-hidden="true"
        >
          <div className="modal-dialog max-width-px-840 position-relative">
            <button
              type="button"
              className="circle-32 btn-reset bg-white pos-abs-tr mt-n6 mr-lg-n6 focus-reset shadow-10"
              data-dismiss="modal"
            >
              <i className="fas fa-times" />
            </button>
            <div className="login-modal-main bg-white rounded-8 overflow-hidden">
              <div className="row no-gutters">
                <div className="col-lg-5 col-md-6">
                  <div className="pt-10 pb-6 pl-11 pr-12 bg-black-2 h-100 d-flex flex-column dark-mode-texts">
                    <div className="pb-9">
                      <h3 className="font-size-8 text-white line-height-reset pb-4 line-height-1p4">
                        Create a free account today
                      </h3>
                      <p className="mb-0 font-size-4 text-white">
                        Create your account to continue and explore new jobs.
                      </p>
                    </div>
                    <div className="border-top border-default-color-2 mt-auto">
                      <div className="d-flex mx-n9 pt-6 flex-xs-row flex-column">
                        <div className="pt-5 px-9">
                          <h3 className="font-size-7 text-white">295</h3>
                          <p className="font-size-3 text-white gr-opacity-5 line-height-1p4">
                            New jobs posted today
                          </p>
                        </div>
                        <div className="pt-5 px-9">
                          <h3 className="font-size-7 text-white">14</h3>
                          <p className="font-size-3 text-white gr-opacity-5 line-height-1p4">
                            New companies registered
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 col-md-6">
                  <div className="bg-white-2 h-100 px-11 pt-11 pb-7">
                    <div className="row">
                      <div className="col-4 col-xs-12">
                        <a
                          href
                          className="font-size-4 font-weight-semibold position-relative text-white bg-allports h-px-48 flex-all-center w-100 px-6 rounded-5 mb-4"
                        >
                          <i className="fab fa-linkedin pos-xs-abs-cl font-size-7 ml-xs-4" />{" "}
                          <span className="d-none d-xs-block">
                            Import from LinkedIn
                          </span>
                        </a>
                      </div>
                      <div className="col-4 col-xs-12">
                        <a
                          href
                          className="font-size-4 font-weight-semibold position-relative text-white bg-poppy h-px-48 flex-all-center w-100 px-6 rounded-5 mb-4"
                        >
                          <i className="fab fa-google pos-xs-abs-cl font-size-7 ml-xs-4" />{" "}
                          <span className="d-none d-xs-block">
                            Import from Google
                          </span>
                        </a>
                      </div>
                      <div className="col-4 col-xs-12">
                        <a
                          href
                          className="font-size-4 font-weight-semibold position-relative text-white bg-marino h-px-48 flex-all-center w-100 px-6 rounded-5 mb-4"
                        >
                          <i className="fab fa-facebook-square pos-xs-abs-cl font-size-7 ml-xs-4" />{" "}
                          <span className="d-none d-xs-block">
                            Import from Facebook
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="or-devider">
                      <span className="font-size-3 line-height-reset">Or</span>
                    </div>
                    <form action="/">
                      <div className="form-group">
                        <label
                          htmlFor="email2"
                          className="font-size-4 text-black-2 font-weight-semibold line-height-reset"
                        >
                          E-mail
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="example@gmail.com"
                          id="email2"
                        />
                      </div>
                      <div className="form-group">
                        <label
                          htmlFor="password2"
                          className="font-size-4 text-black-2 font-weight-semibold line-height-reset"
                        >
                          Password
                        </label>
                        <div className="position-relative">
                          <input
                            type="password"
                            className="form-control"
                            id="password2"
                            placeholder="Enter password"
                          />
                          <a
                            href="#"
                            className="show-password pos-abs-cr fas mr-6 text-black-2"
                            data-show-pass="password2"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label
                          htmlFor="password23"
                          className="font-size-4 text-black-2 font-weight-semibold line-height-reset"
                        >
                          Confirm Password
                        </label>
                        <div className="position-relative">
                          <input
                            type="password"
                            className="form-control"
                            id="password23"
                            placeholder="Enter password"
                          />
                          <a
                            href="#"
                            className="show-password pos-abs-cr fas mr-6 text-black-2"
                            data-show-pass="password23"
                          />
                        </div>
                      </div>
                      <div className="form-group d-flex flex-wrap justify-content-between mb-1">
                        <label
                          htmlFor="terms-check2"
                          className="gr-check-input d-flex  mr-3"
                        >
                          <input
                            className="d-none"
                            type="checkbox"
                            id="terms-check2"
                          />
                          <span className="checkbox mr-5" />
                          <span className="font-size-3 mb-0 line-height-reset d-block">
                            Agree to the{" "}
                            <a href className="text-primary">
                              Terms &amp; Conditions
                            </a>
                          </span>
                        </label>
                        <a
                          href
                          className="font-size-3 text-dodger line-height-reset"
                        >
                          Forget Password
                        </a>
                      </div>
                      <div className="form-group mb-8">
                        <button className="btn btn-primary btn-medium w-100 rounded-5 text-uppercase">
                          Sign Up{" "}
                        </button>
                      </div>
                      <p className="font-size-4 text-center heading-default-color">
                        Don’t have an account?{" "}
                        <a href className="text-primary">
                          Create a free account
                        </a>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Header end */}
        {/* Main Content Start */}
        <div className="bg-default-2 pt-16 pb-12 pt-lg-22 pb-lg-27">
          <div className="container">
            {/* back Button */}
            <div className="row justify-content-center mt-14">
              <div className="col-xxl-6 col-xl-7 col-lg-8">
                <h2 className="font-size-9 text-center mb-11">Contact Us</h2>
                <div className="bg-white px-9 pt-9 pb-7 shadow-8 rounded-4">
                  <form action="/">
                    <div className="row">
                      <div className="col-12 mb-7">
                        <label
                          htmlFor
                          className="font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset"
                        >
                          Your Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Jhon Doe"
                        />
                      </div>
                      <div className="col-lg-6 mb-7">
                        <label
                          htmlFor
                          className="font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset"
                        >
                          E-mail
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="example@gmail.com"
                        />
                      </div>
                      <div className="col-lg-6 mb-7">
                        <label
                          htmlFor
                          className="font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset"
                        >
                          Subject
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Special contract"
                        />
                      </div>
                      <div className="col-lg-12 mb-7">
                        <label
                          htmlFor="message"
                          className="font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset"
                        >
                          Message
                        </label>
                        <textarea
                          name
                          id
                          placeholder="Type your message"
                          className="form-control h-px-144"
                          defaultValue={""}
                        />
                      </div>
                      <div className="col-lg-12 pt-4">
                        <button className="btn btn-primary text-uppercase w-100 h-px-48">
                          Send Now
                        </button>
                      </div>
                    </div>
                  </form>
                  <div className="mt-8">
                    <h3 className="font-size-4">Contact Information</h3>
                    <div className="media mb-2">
                      <div className="mr-6">
                        <i className="fas fa-map-marker-alt mt-2" />
                      </div>
                      <p className="font-size-4 mb-0">
                        Grayic <br />
                        Jens Baggesen, 8200 Aarhus
                      </p>
                    </div>
                    <div className="media mb-2">
                      <div className="mr-6">
                        <i className="fas fa-phone-alt mt-2" />
                      </div>
                      <p className="font-size-4 mb-0">+999 546 646</p>
                    </div>
                    <div className="media mb-2">
                      <div className="mr-6">
                        <i className="fas fa-envelope mt-2" />
                      </div>
                      <p className="font-size-4 mb-0">support@uxtheme.net</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Main Content end */}
        {/* footer area function start */}
        {/* cta section */}
        <footer className="footer bg-ebony-clay dark-mode-texts">
          <div className="container">
            {/* Cta section */}
            <div className="pt-11 pt-lg-20 pb-13 pb-lg-20 border-bottom border-width-1 border-default-color-2">
              <div className="row justify-content-center ">
                <div
                  className="col-xl-7 col-lg-12"
                  data-aos="fade-right"
                  data-aos-duration={800}
                  data-aos-once="true"
                >
                  {/* cta-content start */}
                  <div className="pb-xl-0 pb-9 text-xl-left text-center">
                    <h2 className="text-white font-size-8 mb-4">
                      Most comprehensive job portal
                    </h2>
                    <p className="text-hit-gray font-size-5 mb-0">
                      We must explain to you how all this mistaken idea of
                      denouncing
                    </p>
                  </div>
                  {/* cta-content end */}
                </div>
                <div
                  className="col-xl-5 col-lg-12"
                  data-aos="fade-left"
                  data-aos-duration={800}
                  data-aos-once="true"
                >
                  {/* cta-btns start */}
                  <div className="btns d-flex justify-content-xl-end justify-content-center align-items-xl-center flex-wrap h-100  mx-n4">
                    <a
                      className="btn btn-outline-gallery btn-xl mx-4 mt-6 text-uppercase"
                      href="#"
                      data-toggle="modal"
                      data-target="#login"
                    >
                      Log in
                    </a>
                    <a
                      className="btn btn-green btn-h-60 btn-xl mx-4 mt-6 text-uppercase"
                      href="#"
                      data-toggle="modal"
                      data-target="#signup"
                    >
                      Register
                    </a>
                  </div>
                  {/* cta-btns end */}
                </div>
              </div>
            </div>
          </div>
          <div className="container  pt-12 pt-lg-19 pb-10 pb-lg-19">
            <div className="row">
              <div className="col-lg-4 col-sm-6 mb-lg-0 mb-9">
                {/* footer logo start */}
                <img
                  src="image/logo-main-white.png"
                  alt=""
                  className="footer-logo mb-14"
                />
                {/* footer logo End */}
                {/* media start */}
                <div className="media mb-11">
                  <img
                    src="image/l1/png/message.png"
                    className="align-self-center mr-3"
                    alt=""
                  />
                  <div className="media-body pl-5">
                    <p className="mb-0 font-size-4 text-white">Contact us at</p>
                    <a
                      className="mb-0 font-size-4 font-weight-bold"
                      href="mailto:support@uxtheme.net"
                    >
                      support@uxtheme.net
                    </a>
                  </div>
                </div>
                {/* media start */}
                {/* widget social icon start */}
                <div className="social-icons">
                  <ul className="pl-0 list-unstyled d-flex align-items-end ">
                    <li className="d-flex flex-column justify-content-center px-3 mr-3 font-size-4 heading-default-color">
                      Follow us on:
                    </li>
                    <li className="d-flex flex-column justify-content-center px-3 mr-3">
                      <a
                        href="#"
                        className="hover-color-primary heading-default-color"
                      >
                        <i className="fab fa-facebook-f font-size-3 pt-2" />
                      </a>
                    </li>
                    <li className="d-flex flex-column justify-content-center px-3 mr-3">
                      <a
                        href="#"
                        className="hover-color-primary heading-default-color"
                      >
                        <i className="fab fa-twitter font-size-3 pt-2" />
                      </a>
                    </li>
                    <li className="d-flex flex-column justify-content-center px-3 mr-3">
                      <a
                        href="#"
                        className="hover-color-primary heading-default-color"
                      >
                        <i className="fab fa-linkedin-in font-size-3 pt-2" />
                      </a>
                    </li>
                  </ul>
                </div>
                {/* widget social icon end */}
              </div>
              <div className="col-lg-8 col-md-6">
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-sm-3 col-xs-6">
                    <div className="footer-widget widget2 mb-md-0 mb-13">
                      {/* footer widget title start */}
                      <p className="widget-title font-size-4 text-gray mb-md-8 mb-7">
                        Company
                      </p>
                      {/* footer widget title end */}
                      {/* widget social menu start */}
                      <ul className="widget-links pl-0 list-unstyled list-hover-primary">
                        <li className="mb-6">
                          <a
                            className="heading-default-color font-size-4 font-weight-normal"
                            href
                          >
                            About us
                          </a>
                        </li>
                        <li className="mb-6">
                          <a
                            className="heading-default-color font-size-4 font-weight-normal"
                            href
                          >
                            Contact us
                          </a>
                        </li>
                        <li className="mb-6">
                          <a
                            className="heading-default-color font-size-4 font-weight-normal"
                            href
                          >
                            Careers
                          </a>
                        </li>
                        <li className="mb-6">
                          <a
                            className="heading-default-color font-size-4 font-weight-normal"
                            href
                          >
                            Press
                          </a>
                        </li>
                      </ul>
                      {/* widget social menu end */}
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-3 col-xs-6">
                    <div className="footer-widget widget3 mb-sm-0 mb-13">
                      {/* footer widget title start */}
                      <p className="widget-title font-size-4 text-gray mb-md-8 mb-7">
                        Product
                      </p>
                      {/* footer widget title end */}
                      {/* widget social menu start */}
                      <ul className="widget-links pl-0 list-unstyled list-hover-primary">
                        <li className="mb-6">
                          <a
                            className="heading-default-color font-size-4 font-weight-normal"
                            href
                          >
                            Features{" "}
                          </a>
                        </li>
                        <li className="mb-6">
                          <a
                            className="heading-default-color font-size-4 font-weight-normal"
                            href
                          >
                            Pricing
                          </a>
                        </li>
                        <li className="mb-6">
                          <a
                            className="heading-default-color font-size-4 font-weight-normal"
                            href
                          >
                            News
                          </a>
                        </li>
                        <li className="mb-6">
                          <a
                            className="heading-default-color font-size-4 font-weight-normal"
                            href
                          >
                            Help desk
                          </a>
                        </li>
                        <li className="mb-6">
                          <a
                            className="heading-default-color font-size-4 font-weight-normal"
                            href
                          >
                            Support
                          </a>
                        </li>
                      </ul>
                      {/* widget social menu end */}
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-3 col-xs-6">
                    <div className="footer-widget widget4 mb-sm-0 mb-13">
                      {/* footer widget title start */}
                      <p className="widget-title font-size-4 text-gray mb-md-8 mb-7">
                        Services
                      </p>
                      {/* footer widget title end */}
                      {/* widget social menu start */}
                      <ul className="widget-links pl-0 list-unstyled list-hover-primary">
                        <li className="mb-6">
                          <a
                            className="heading-default-color font-size-4 font-weight-normal"
                            href
                          >
                            Digital Marketing
                          </a>
                        </li>
                        <li className="mb-6">
                          <a
                            className="heading-default-color font-size-4 font-weight-normal"
                            href
                          >
                            SEO for Business
                          </a>
                        </li>
                        <li className="mb-6">
                          <a
                            className="heading-default-color font-size-4 font-weight-normal"
                            href
                          >
                            Avasta Dash
                          </a>
                        </li>
                        <li className="mb-6">
                          <a
                            className="heading-default-color font-size-4 font-weight-normal"
                            href
                          >
                            UI Design
                          </a>
                        </li>
                      </ul>
                      {/* widget social menu end */}
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-3 col-xs-6">
                    <div className="footer-widget widget4">
                      {/* footer widget title start */}
                      <p className="widget-title font-size-4 text-gray mb-md-8 mb-7">
                        Legal
                      </p>
                      {/* footer widget title end */}
                      <ul className="widget-links pl-0 list-unstyled list-hover-primary">
                        <li className="mb-6">
                          <a
                            className="heading-default-color font-size-4 font-weight-normal"
                            href
                          >
                            Privacy Policy
                          </a>
                        </li>
                        <li className="mb-6">
                          <a
                            className="heading-default-color font-size-4 font-weight-normal"
                            href
                          >
                            Terms &amp; Conditions
                          </a>
                        </li>
                        <li className="mb-6">
                          <a
                            className="heading-default-color font-size-4 font-weight-normal"
                            href
                          >
                            Return Policy
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* footer area function end */}
      </div>
      {/* Vendor Scripts */}
      {/* Plugin's Scripts */}
      {/* Activation Script */}
      {/*  */}

    </React.Fragment>
  );
}
