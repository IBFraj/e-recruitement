import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    login(email, password);
  };

 if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <Fragment>
{/*       <h1 className="large text-primary">Sign In</h1>
      <p className="lead">
        <i className="fas fa-user" /> Sign Into Your Account
      </p>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChange}
            minLength="6"
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p> */}

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
                        <Link
                          href
                          className="font-size-4 font-weight-semibold position-relative text-white bg-allports h-px-48 flex-all-center w-100 px-6 rounded-5 mb-4"
                        >
                          <i className="fab fa-linkedin pos-xs-abs-cl font-size-7 ml-xs-4" />{" "}
                          <span className="d-none d-xs-block">
                            Log in with LinkedIn
                          </span>
                        </Link>
                      </div>
                      <div className="col-4 col-xs-12">
                        <Link
                          href
                          className="font-size-4 font-weight-semibold position-relative text-white bg-poppy h-px-48 flex-all-center w-100 px-6 rounded-5 mb-4"
                        >
                          <i className="fab fa-google pos-xs-abs-cl font-size-7 ml-xs-4" />{" "}
                          <span className="d-none d-xs-block">
                            Log in with Google
                          </span>
                        </Link>
                      </div>
                      <div className="col-4 col-xs-12">
                        <Link
                          href
                          className="font-size-4 font-weight-semibold position-relative text-white bg-marino h-px-48 flex-all-center w-100 px-6 rounded-5 mb-4"
                        >
                          <i className="fab fa-facebook-square pos-xs-abs-cl font-size-7 ml-xs-4" />{" "}
                          <span className="d-none d-xs-block">
                            Log in with Facebook
                          </span>
                        </Link>
                      </div>
                    </div>
                    <div className="or-devider">
                      <span className="font-size-3 line-height-reset ">Or</span>
                    </div>
                    <form action="/" onSubmit={onSubmit}>
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
                          name="email"
                          value={email}
                          onChange={onChange}
                          required
                          
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
                            name="password"
                            value={password}
                            onChange={onChange}
                            minLength="6"
                          />
                          <Link
                            href=""
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
                        <Link
                          href
                          className="font-size-3 text-dodger line-height-reset"
                        >
                          Forget Password
                        </Link>
                      </div>
                      <div className="form-group mb-8">
                        <button type="submit" className="btn btn-primary btn-medium w-100 rounded-5 text-uppercase" value="Login">
                          Log in{" "}
                        </button>
                      </div>
                      <p className="font-size-4 text-center heading-default-color">
                        Don’t have an account?{" "}
                        <Link href className="text-primary">
                          Create a free account
                        </Link>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.register.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);

