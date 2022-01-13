import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';

import CandidatExperience from "./CandidatExperience";
import CandidatEducation from "./CandidatEducation";


const CandidatProfile = ({ getCurrentProfile , profile:{profile}}) => {
  
    useEffect(() => {
        getCurrentProfile();
      }, [getCurrentProfile]);
  return (
    <div>
      {/* Main Content Start */}
      <div className="bg-default-2 pt-22 pt-lg-25 pb-13 pb-xxl-32">
        <div className="container">
          {/* back Button */}
          <div className="row justify-content-center">
            <div className="col-12 dark-mode-texts">
              <div className="mb-9">
                <Link to="/jobs">
                  <a className="d-flex align-items-center ml-4">
                    {" "}
                    <i className="icon icon-small-left bg-white circle-40 mr-5 font-size-7 text-black font-weight-bold shadow-8"></i>
                    <span className="text-uppercase font-size-3 font-weight-bold text-gray">
                      Back
                    </span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          {/* back Button End */}
          <div className="row">
            {/* Left Sidebar Start */}
            <div className="col-12 col-xxl-3 col-lg-4 col-md-5 mb-11 mb-lg-0">
              <div className="pl-lg-5">
                {/* Top Start */}
                <div className="bg-white shadow-9 rounded-4">
                  <div className="px-5 py-11 text-center border-bottom border-mercury">
                    <a className="mb-4" href="#">
                      <img
                        className="circle-54"
                        src={"../../assets/image/l3/png/pro-img1.png"}
                        alt=""
                      />
                    </a>
                    <h4 className="mb-0">
                      <a
                        className="text-black-2 font-size-6 font-weight-semibold"
                        href="#"
                      >
                        {profile.user.name}
                      </a>
                    </h4>
                    <p className="mb-8">
                      <a className="text-gray font-size-4" href="#">
                        {profile.status}
                      </a>
                    </p>
                    <div className="icon-link d-flex align-items-center justify-content-center flex-wrap">
                      <a
                        className="text-smoke circle-32 bg-concrete mr-5 hover-bg-green"
                        href="#"
                      >
                        <i className="fab fa-linkedin-in" />
                      </a>
                      <a
                        className="text-smoke circle-32 bg-concrete mr-5 hover-bg-green"
                        href="#"
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a
                        className="text-smoke circle-32 bg-concrete mr-5 hover-bg-green"
                        href="#"
                      >
                        <i className="fab fa-twitter" />
                      </a>
                      <a
                        className="text-smoke circle-32 bg-concrete mr-5 hover-bg-green"
                        href="#"
                      >
                        <i className="fab fa-dribbble" />
                      </a>
                      <a
                        className="text-smoke circle-32 bg-concrete mr-5 hover-bg-green"
                        href="#"
                      >
                        <i className="fab fa-behance" />
                      </a>
                    </div>
                  </div>
                  {/* Top End */}
                  {/* Bottom Start */}
                  <div className="px-9 pt-lg-5 pt-9 pt-xl-9 pb-5">
                    <h5 className="text-black-2 mb-8 font-size-5">
                      Contact Info
                    </h5>
                    {/* Single List */}
                    <div className="mb-7">
                      <p className="font-size-4 mb-0">Location</p>
                      <h5 className="font-size-4 font-weight-semibold mb-0 text-black-2 text-break">
                        {profile.location}
                      </h5>
                    </div>
                    {/* Single List */}
                    {/* Single List */}
                    <div className="mb-7">
                      <p className="font-size-4 mb-0">E-mail</p>
                      <h5 className="font-size-4 font-weight-semibold mb-0">
                        <a
                          className="text-black-2 text-break"
                          href="mailto:name_ac@gmail.com"
                        >
                          name_ac@gmail.com
                        </a>
                      </h5>
                    </div>
                    {/* Single List */}
                    {/* Single List */}
                    <div className="mb-7">
                      <p className="font-size-4 mb-0">Phone</p>
                      <h5 className="font-size-4 font-weight-semibold mb-0">
                        <a
                          className="text-black-2 text-break"
                          href="tel:+999565562"
                        >
                          +999 565 562
                        </a>
                      </h5>
                    </div>
                    {/* Single List */}
                    {/* Single List */}
                    <div className="mb-7">
                      <p className="font-size-4 mb-0">Website Linked</p>
                      <h5 className="font-size-4 font-weight-semibold mb-0">
                        <a className="text-break" href="#">
                          www.nameac.com
                        </a>
                      </h5>
                    </div>
                    {/* Single List */}
                  </div>
                  {/* Bottom End */}
                </div>
              </div>
            </div>
            {/* Left Sidebar End */}
            {/* Middle Content */}
            <div className="col-12 col-xxl-6 col-lg-8 col-md-7 order-2 order-xl-1">
              <div className="bg-white rounded-4 shadow-9">
                {/* Tab Section Start */}
                <ul
                  className="nav border-bottom border-mercury pl-12"
                  id="myTab"
                  role="tablist"
                >
                  <li className="tab-menu-items nav-item pr-12">
                    <a
                      className="active text-uppercase font-size-3 font-weight-bold text-default-color py-3"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      Overview
                    </a>
                  </li>
                  <li className="tab-menu-items nav-item pr-12">
                    <a
                      className="text-uppercase font-size-3 font-weight-bold text-default-color py-3"
                      id="profile-tab"
                      data-toggle="tab"
                      href="#profile"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
                {/* Tab Content */}
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    {/* Excerpt Start */}
                    <div className="pr-xl-0 pr-xxl-14 p-5 px-xs-12 pt-7 pb-5">
                      <h4 className="font-size-6 mb-7 mt-5 text-black-2 font-weight-semibold">
                        About
                      </h4>
                      <p className="font-size-4 mb-8">
                        A talented professional with an academic background in
                        IT and proven commercial development experience as C++
                        developer since 1999. Has a sound knowledge of the
                        software development life cycle. Was involved in more
                        than 140 software development outsourcing projects.
                      </p>
                      <p className="font-size-4 mb-8">
                        Programming Languages: C/C++, .NET C++, Python, Bash,
                        Shell, PERL, Regular expressions, Python, Active-script.
                      </p>
                    </div>
                    {/* Excerpt End */}
                    {/* Skills */}
                    <div className="border-top pr-xl-0 pr-xxl-14 p-5 pl-xs-12 pt-7 pb-5">
                      <h4 className="font-size-6 mb-7 mt-5 text-black-2 font-weight-semibold">
                        Skills
                      </h4>
                      <ul className="list-unstyled d-flex align-items-center flex-wrap">
                      {profile.skills.map((skill, index) => (
       
   
                        <li key={index} className='p-1'>
                          <a
                            className="bg-polar text-black-2  mr-6 px-7 mt-2 mb-2 font-size-3 rounded-3 min-height-32 d-flex align-items-center"
                            href="#"
                          >
                            {skill}
                          </a>
                        </li>
                           ))}
                      
                      </ul>
                    </div>
                    {/* Skills End */}
                    {/* Card Section Start */}
                    <div className="border-top p-5 pl-xs-12 pt-7 pb-5">
                      <h4 className="font-size-6 mb-7 mt-5 text-black-2 font-weight-semibold">
                        Work Exprerience
                      </h4>
                      {/* Single Card */}
                      <div className="w-100">
                      {profile.experience.length > 0 ? (
                <Fragment>
                  {profile.experience.map((experience) => (
                    <CandidatExperience
                      key={experience._id}
                      experience={experience}
                    />
                  ))}
                </Fragment>
              ) : (
                <h4>No experience credentials</h4>
              )}
           
                      
                         </div>
                      {/* Single Card End */}
                      {/* Single Card */}
                     
                      {/* Single Card End */}
                    </div>
                    {/* Card Section End */}
                    {/* Card Section Start */}
                    <div className="border-top p-5 pl-xs-12 pt-7 pb-5">
                      <h4 className="font-size-6 mb-7 mt-5 text-black-2 font-weight-semibold">
                        Education
                      </h4>
                      {/* Single Card */}
                      <div className="w-100">
                      {profile.education.length > 0 ? (
                <Fragment>
                  {profile.education.map((education) => (
                    <CandidatEducation
                      key={education._id}
                      education={education}
                    />
                  ))}
                </Fragment>
              ) : (
                <h4>No education credentials</h4>
              )}
                    
                      </div>
                      {/* Single Card End */}
                      {/* Single Card */}
                      
                      {/* Single Card End */}
                    </div>
                    {/* Card Section End */}
                  </div>
                  <div
                    className="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    {/* Excerpt Start */}
                    <div className="pr-xl-11 p-5 pl-xs-12 pt-9 pb-11">
                      <form action="/">
                        <div className="row">
                          <div className="col-12 mb-7">
                            <label
                              htmlFor="name3"
                              className="font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset"
                            >
                              Your Name
                            </label>
                            <input
                              id="name3"
                              type="text"
                              className="form-control"
                              placeholder="your name"
                            />
                          </div>
                          <div className="col-lg-6 mb-7">
                            <label
                              htmlFor="email3"
                              className="font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset"
                            >
                              E-mail
                            </label>
                            <input
                              id="email3"
                              type="email"
                              className="form-control"
                              placeholder="example@gmail.com"
                            />
                          </div>
                          <div className="col-lg-6 mb-7">
                            <label
                              htmlFor="subject3"
                              className="font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset"
                            >
                              Subject
                            </label>
                            <input
                              id="subject3"
                              type="text"
                              className="form-control"
                              placeholder="Special contract"
                            />
                          </div>
                          <div className="col-lg-12 mb-7">
                            <label
                              htmlFor="message3"
                              className="font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset"
                            >
                              Message
                            </label>
                            <textarea
                              name="message"
                              id="message3"
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
                    </div>
                    {/* Excerpt End */}
                  </div>
                </div>
                {/* Tab Content End */}
                {/* Tab Section End */}
              </div>
            </div>
            {/* Middle Content */}
            {/* Right Sidebar Start */}
            <div className="col-12 col-xxl-3 col-md-4 offset-xxl-0 offset-lg-4 offset-md-5 order-3 order-xl-2 mt-xxl-0 mt-md-12">
              <div className="pl-lg-5">
                <h4 className="font-size-6 font-weight-semibold mb-0">
                  Other experts
                </h4>
                <ul className="list-unstyled">
                  {/* Single List */}
                  <li className="border-bottom">
                    <a
                      className="media align-items-center py-9 flex-wrap"
                      href="#"
                    >
                      <div className="mr-7">
                        <img
                          className="square-72 rounded-3"
                          src="./image/l3/png/team-member-1.png"
                          alt=""
                        />
                      </div>
                      <div className>
                        <h4 className="mb-0 font-size-5 font-weight-semibold">
                          David Herison
                        </h4>
                        <p className="mb-0 font-size-3 heading-default-color">
                          UX/UI Designer
                        </p>
                        <span className="font-size-3 text-smoke">
                          <img
                            className="mr-2"
                            src="./image/svg/icon-loaction-pin-black.svg"
                            alt=""
                          />
                          New York, USA
                        </span>
                      </div>
                    </a>
                  </li>
                  {/* Single List End */}
                  {/* Single List */}
                  <li className="border-bottom">
                    <a
                      className="media align-items-center py-9 flex-wrap"
                      href="#"
                    >
                      <div className="mr-7">
                        <img
                          className="square-72 rounded-3"
                          src="./image/l3/png/team-member-2.png"
                          alt=""
                        />
                      </div>
                      <div className>
                        <h4 className="mb-0 font-size-5 font-weight-semibold">
                          Mark Zanitos
                        </h4>
                        <p className="mb-0 font-size-3 heading-default-color">
                          Lead Product Designer
                        </p>
                        <span className="font-size-3 text-smoke">
                          <img
                            className="mr-2"
                            src="./image/svg/icon-loaction-pin-black.svg"
                            alt=""
                          />
                          New York, USA
                        </span>
                      </div>
                    </a>
                  </li>
                  {/* Single List End */}
                  {/* Single List */}
                  <li className="border-bottom">
                    <a
                      className="media align-items-center py-9 flex-wrap"
                      href="#"
                    >
                      <div className="mr-7">
                        <img
                          className="square-72 rounded-3"
                          src="./image/l3/png/team-member-3.png"
                          alt=""
                        />
                      </div>
                      <div className>
                        <h4 className="mb-0 font-size-5 font-weight-semibold">
                          Anna Frankin
                        </h4>
                        <p className="mb-0 font-size-3 heading-default-color">
                          Visual Designer
                        </p>
                        <span className="font-size-3 text-smoke">
                          <img
                            className="mr-2"
                            src="./image/svg/icon-loaction-pin-black.svg"
                            alt=""
                          />
                          New York, USA
                        </span>
                      </div>
                    </a>
                  </li>
                  {/* Single List End */}
                  {/* Single List */}
                  <li className="border-bottom">
                    <a
                      className="media align-items-center py-9 flex-wrap"
                      href="#"
                    >
                      <div className="mr-7">
                        <img
                          className="square-72 rounded-3"
                          src="./image/l3/png/team-member-4.png"
                          alt=""
                        />
                      </div>
                      <div className>
                        <h4 className="mb-0 font-size-5 font-weight-semibold">
                          Jhony Vino
                        </h4>
                        <p className="mb-0 font-size-3 heading-default-color">
                          Creative Director
                        </p>
                        <span className="font-size-3 text-smoke">
                          <img
                            className="mr-2"
                            src="./image/svg/icon-loaction-pin-black.svg"
                            alt=""
                          />
                          New York, USA
                        </span>
                      </div>
                    </a>
                  </li>
                  {/* Single List End */}
                  {/* Single List */}
                  <li className>
                    <a
                      className="media align-items-center py-9 flex-wrap"
                      href="#"
                    >
                      <div className="mr-7">
                        <img
                          className="square-72 rounded-3"
                          src="./image/l3/png/team-member-5.png"
                          alt=""
                        />
                      </div>
                      <div className>
                        <h4 className="mb-0 font-size-5 font-weight-semibold">
                          Aniasta Hemberg
                        </h4>
                        <p className="mb-0 font-size-3 heading-default-color">
                          Creative Director
                        </p>
                        <span className="font-size-3 text-smoke">
                          <img
                            className="mr-2"
                            src="./image/svg/icon-loaction-pin-black.svg"
                            alt=""
                          />
                          New York, USA
                        </span>
                      </div>
                    </a>
                  </li>
                  {/* Single List End */}
                </ul>
              </div>
            </div>
            {/* Right Sidebar End */}
          </div>
        </div>
      </div>
    </div>
  );
};

CandidatProfile.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
    profile: state.profile,
    auth: state.auth
  });
  export default connect(mapStateToProps, { getCurrentProfile })(CandidatProfile);

