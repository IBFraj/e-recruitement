import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const PostedJobs = props => {
    return (
        <div>
             <div>
        <div className="dashboard-sidebar-wrapper pt-11" id="sidebar">
          <div className="brand-logo px-11">
            <a href="https://shade.uxtheme.net/shade-pro">
              <img src="image/logo-main-black.png" alt="" />
            </a>
          </div>
          <div className="my-15 px-11">
            <a href="#" className="btn btn-primary btn-xl w-100 text-uppercase"><span className="mr-5 d-inline-block">+</span>Post a new job</a>
          </div>
          <ul className="list-unstyled dashboard-layout-sidebar">
            <li className><Link to="/postedjobs"><a href="./dashboard-main.html" className="px-10 py-1 my-5 font-size-4 font-weight-semibold flex-y-center"><i className="icon icon-layout-11 mr-7" />Dashboard</a></Link></li>
            <li className><Link to="/postedjobs"><a href="dashboard-posted-jobs.html" className="px-10 py-1 my-5 font-size-4 font-weight-semibold flex-y-center"><i className="fas fa-briefcase mr-7" />Posted Jobs</a></Link></li>
            <li className="active"><Link to="/applicants"><a href="dashboard-posted-applicants.html" className="px-10 py-1 my-5 font-size-4 font-weight-semibold flex-y-center"><i className="fas fa-user mr-7" />Applicants <span className="ml-auto px-1 h-1 bg-dodger text-white font-size-3 rounded-5 max-height-px-18 flex-all-center">14</span></a></Link></li>
            <li className><a href="./dashboard-settings.html" className="px-10 py-1 my-5 font-size-4 font-weight-semibold flex-y-center"><i className="fas fa-cog mr-7" />Settings</a></li>
          </ul>
        </div>
        <a className="sidebar-mobile-button" data-toggle="collapse" href="#sidebar" role="button" aria-expanded="false" aria-controls="sidebar">
          <i className="icon icon-sidebar-2" />
        </a>
        <div className="dashboard-main-container mt-25 mt-lg-31" id="dashboard-body">
          <div className="container">
            <div className="mb-14">
              <div className="row mb-11 align-items-center">
                <div className="col-lg-6 mb-lg-0 mb-4">
                  <h3 className="font-size-6 mb-0">Applicants List (12)</h3>
                </div>
                <div className="col-lg-6">
                  <div className="d-flex flex-wrap align-items-center justify-content-lg-end">
                    <p className="font-size-4 mb-0 mr-6 py-2">Filter by Job:</p>
                    <div className="h-px-48">
                      <select name="country" id="country" className="nice-select pl-7 h-100 arrow-3 arrow-3-black min-width-px-273 font-weight-semibold text-black-2">
                        <option value data-display="Product Designer">Product Designer</option>
                        <option value>Graphics Designer</option>
                        <option value>Web Deverloper</option>
                        <option value>Front End Developer</option>
                        <option value>Backend Developer</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white shadow-8 pt-7 rounded pb-8 px-11">
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col" className="pl-0  border-0 font-size-4 font-weight-normal">Name</th>
                        <th scope="col" className="border-0 font-size-4 font-weight-normal">Applied as</th>
                        <th scope="col" className="border-0 font-size-4 font-weight-normal">Applied on</th>
                        <th scope="col" className="border-0 font-size-4 font-weight-normal" />
                        <th scope="col" className="border-0 font-size-4 font-weight-normal" />
                        <th scope="col" className="border-0 font-size-4 font-weight-normal" />
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border border-color-2">
                        <th scope="row" className="pl-6 border-0 py-7 pr-0">
                          <a href="candidate-profile.html" className="media min-width-px-235 align-items-center">
                            <div className="circle-36 mr-6">
                              <img src="./image/table-one-profile-image-1.png" alt="" className="w-100" />
                            </div>
                            <h4 className="font-size-4 mb-0 font-weight-semibold text-black-2">Nicolas Bradley</h4>
                          </a>
                        </th>
                        <td className="table-y-middle py-7 min-width-px-235 pr-0">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">Senior Project Manager</h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-170 pr-0">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">12 July, 2020</h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-170 pr-0">
                          <div className><a href="javacript:" className="font-size-3 font-weight-bold text-black-2 text-uppercase" data-toggle="modal" data-target="#employe-profile">View Application</a></div>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-110 pr-0">
                          <div className><a href="contact.html" className="font-size-3 font-weight-bold text-green text-uppercase">Contact</a></div>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-100 pr-0">
                          <div className><a href className="font-size-3 font-weight-bold text-red-2 text-uppercase">Reject</a></div>
                        </td>
                      </tr>
                      <tr className="border border-color-2">
                        <th scope="row" className="pl-6 border-0 py-7 pr-0">
                          <a href="candidate-profile.html" className="media min-width-px-235 align-items-center">
                            <div className="circle-36 mr-6">
                              <img src="./image/table-one-profile-image-2.png" alt="" className="w-100" />
                            </div>
                            <h4 className="font-size-4 mb-0 font-weight-semibold text-black-2">Elizabeth Gomez</h4>
                          </a>
                        </th>
                        <td className="table-y-middle py-7 min-width-px-235 pr-0">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">Senior Project Manager</h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-170 pr-0">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">14 July, 2020</h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-170 pr-0">
                          <div className><a href="javacript:" className="font-size-3 font-weight-bold text-black-2 text-uppercase" data-toggle="modal" data-target="#employe-profile">View Application</a></div>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-110 pr-0">
                          <div className><a href="contact.html" className="font-size-3 font-weight-bold text-green text-uppercase">Contact</a></div>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-100 pr-0">
                          <div className><a href className="font-size-3 font-weight-bold text-red-2 text-uppercase">Reject</a></div>
                        </td>
                      </tr>
                      <tr className="border border-color-2">
                        <th scope="row" className="pl-6 border-0 py-7 pr-0">
                          <a href="candidate-profile.html" className="media min-width-px-235 align-items-center">
                            <div className="circle-36 mr-6">
                              <img src="./image/table-one-profile-image-3.png" alt="" className="w-100" />
                            </div>
                            <h4 className="font-size-4 mb-0 font-weight-semibold text-black-2">Joe Wade</h4>
                          </a>
                        </th>
                        <td className="table-y-middle py-7 min-width-px-235 pr-0">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">Head of Marketing</h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-170 pr-0">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">14 July, 2020</h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-170 pr-0">
                          <div className><a href="javacript:" className="font-size-3 font-weight-bold text-black-2 text-uppercase" data-toggle="modal" data-target="#employe-profile">View Application</a></div>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-110 pr-0">
                          <div className><a href="contact.html" className="font-size-3 font-weight-bold text-green text-uppercase">Contact</a></div>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-100 pr-0">
                          <div className><a href className="font-size-3 font-weight-bold text-red-2 text-uppercase">Reject</a></div>
                        </td>
                      </tr>
                      <tr className="border border-color-2">
                        <th scope="row" className="pl-6 border-0 py-7 pr-0">
                          <a href="candidate-profile.html" className="media min-width-px-235 align-items-center">
                            <div className="circle-36 mr-6">
                              <img src="./image/table-one-profile-image-4.png" alt="" className="w-100" />
                            </div>
                            <h4 className="font-size-4 mb-0 font-weight-semibold text-black-2">Roger Hawkins</h4>
                          </a>
                        </th>
                        <td className="table-y-middle py-7 min-width-px-235 pr-0">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">UI Designer</h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-170 pr-0">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">16 July, 2020</h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-170 pr-0">
                          <div className><a href="javacript:" className="font-size-3 font-weight-bold text-black-2 text-uppercase" data-toggle="modal" data-target="#employe-profile">View Application</a></div>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-110 pr-0">
                          <div className><a href="contact.html" className="font-size-3 font-weight-bold text-green text-uppercase">Contact</a></div>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-100 pr-0">
                          <div className><a href className="font-size-3 font-weight-bold text-red-2 text-uppercase">Reject</a></div>
                        </td>
                      </tr>
                      <tr className="border border-color-2">
                        <th scope="row" className="pl-6 border-0 py-7 pr-0">
                          <a href="candidate-profile.html" className="media min-width-px-235 align-items-center">
                            <div className="circle-36 mr-6">
                              <img src="./image/table-one-profile-image-5.png" alt="" className="w-100" />
                            </div>
                            <h4 className="font-size-4 mb-0 font-weight-semibold text-black-2">Marie Green</h4>
                          </a>
                        </th>
                        <td className="table-y-middle py-7 min-width-px-235 pr-0">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">Senior Project Manager</h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-170 pr-0">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">21 July, 2020</h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-170 pr-0">
                          <div className><a href="javacript:" className="font-size-3 font-weight-bold text-black-2 text-uppercase" data-toggle="modal" data-target="#employe-profile">View Application</a></div>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-110 pr-0">
                          <div className><a href="contact.html" className="font-size-3 font-weight-bold text-green text-uppercase">Contact</a></div>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-100 pr-0">
                          <div className><a href className="font-size-3 font-weight-bold text-red-2 text-uppercase">Reject</a></div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="pt-2">
                  <nav aria-label="Page navigation example">
                    <ul className="pagination pagination-hover-primary rounded-0 ml-n2">
                      <li className="page-item rounded-0 flex-all-center">
                        <a className="page-link rounded-0 border-0 px-3active" href="#" aria-label="Previous">
                          <i className="fas fa-chevron-left" />
                        </a>
                      </li>
                      <li className="page-item"><a className="page-link border-0 font-size-4 font-weight-semibold px-3" href="#">1</a></li>
                      <li className="page-item"><a className="page-link border-0 font-size-4 font-weight-semibold px-3" href="#">2</a></li>
                      <li className="page-item"><a className="page-link border-0 font-size-4 font-weight-semibold px-3" href="#">3</a></li>
                      <li className="page-item disabled"><a className="page-link border-0 font-size-4 font-weight-semibold px-3" href="#">...</a></li>
                      <li className="page-item "><a className="page-link border-0 font-size-4 font-weight-semibold px-3" href="#">7</a></li>
                      <li className="page-item rounded-0 flex-all-center">
                        <a className="page-link rounded-0 border-0 px-3" href="#" aria-label="Next">
                          <i className="fas fa-chevron-right" />
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Modal */}
        <div className="modal fade" id="employe-profile" tabIndex={-1} aria-hidden="true">
          <div className="container">
            {/* back Button */}
            <div className="row justify-content-center">
              <div className="col-12 mt-13">
                <div className="mb-9">
                  <a className="d-flex align-items-center ml-4" href="javacript:" data-dismiss="modal"> <i className="icon icon-small-left bg-white circle-40 mr-5 font-size-7 text-black font-weight-bold shadow-8">
                    </i><span className="text-uppercase font-size-3 font-weight-bold text-white">Back</span></a>
                </div>
              </div>
            </div>
            {/* back Button End */}
            <div className="modal-dialog mw-100">
              <div className="login-modal-main bg-white rounded-8 overflow-hidden">
                <div className="row no-gutters">
                  {/* Left Sidebar Start */}
                  <div className="col-12 col-xl-3 col-lg-4 col-md-5 mb-13 mb-lg-0 border-right border-mercury">
                    <div className="pl-lg-5">
                      {/* Top Start */}
                      <div className="bg-white">
                        <div className="px-5 py-11 text-center border-bottom border-mercury">
                          <a className="mb-4" href="#"><img className="circle-54" src="./image/l3/png/pro-img.png" alt="" /></a>
                          <h4 className="mb-0">
                            <a className="text-black-2 font-size-6 font-weight-semibold" href="#">David Henricks</a>
                          </h4>
                          <p className="mb-8">
                            <a className="text-gray font-size-4" href="#">Product Designer</a>
                          </p>
                          <div className="icon-link d-flex align-items-center justify-content-center flex-wrap">
                            <a className="text-smoke circle-32 bg-concrete mr-5 hover-bg-green" href="#">
                              <i className="fab fa-linkedin-in" />
                            </a>
                            <a className="text-smoke circle-32 bg-concrete mr-5 hover-bg-green" href="#">
                              <i className="fab fa-facebook-f" />
                            </a>
                            <a className="text-smoke circle-32 bg-concrete mr-5 hover-bg-green" href="#">
                              <i className="fab fa-twitter" />
                            </a>
                            <a className="text-smoke circle-32 bg-concrete mr-5 hover-bg-green" href="#">
                              <i className="fab fa-dribbble" />
                            </a>
                            <a className="text-smoke circle-32 bg-concrete mr-5 hover-bg-green" href="#">
                              <i className="fab fa-behance" />
                            </a>
                          </div>
                        </div>
                        {/* Top End */}
                        {/* Bottom Start */}
                        <div className="px-5 px-xs-12 px-lg-5 pt-lg-5 pt-9 px-xl-9 pt-xl-9 pb-5">
                          <h5 className="text-black-2 mb-8 font-size-5">Contact Info</h5>
                          {/* Single List */}
                          <div className="mb-7">
                            <p className="font-size-4 mb-0 text-gray">Location</p>
                            <h5 className="font-size-4 font-weight-semibold mb-0 text-black-2 text-break">New York , USA</h5>
                          </div>
                          {/* Single List */}
                          {/* Single List */}
                          <div className="mb-7">
                            <p className="font-size-4 mb-0 text-gray">E-mail</p>
                            <h5 className="font-size-4 font-weight-semibold mb-0">
                              <a className="text-black-2 text-break" href="mailto:name_ac@gmail.com">name_ac@gmail.com</a>
                            </h5>
                          </div>
                          {/* Single List */}
                          {/* Single List */}
                          <div className="mb-7">
                            <p className="font-size-4 mb-0 text-gray">Phone</p>
                            <h5 className="font-size-4 font-weight-semibold mb-0">
                              <a className="text-black-2 text-break" href="tel:+999565562">+999 565 562</a>
                            </h5>
                          </div>
                          {/* Single List */}
                          {/* Single List */}
                          <div className="mb-7">
                            <p className="font-size-4 mb-0 text-gray">Website Linked</p>
                            <h5 className="font-size-4 font-weight-semibold mb-0">
                              <a className="text-break" href="#">www.nameac.com</a>
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
                  <div className="col-12 col-xl-6 col-lg-8 col-md-7 order-2 order-lg-1 border-right border-mercury">
                    <div className="bg-white rounded-4 overflow-auto h-1173">
                      {/* Excerpt Start */}
                      <div className="pr-xl-0 pr-xxl-14 p-5 px-xs-12 pt-7 pb-5">
                        <h4 className="font-size-6 font-weight-semibold mb-7 mt-5 text-black-2">About</h4>
                        <p className="font-size-4 mb-8">A talented professional with an academic background in IT and proven
                          commercial development experience as C++ developer since 1999. Has a sound knowledge of the software
                          development life cycle. Was involved in more than 140 software development outsourcing projects.</p>
                        <p className="font-size-4 mb-8">Programming Languages: C/C++, .NET C++, Python, Bash, Shell, PERL, Regular
                          expressions, Python, Active-script.</p>
                      </div>
                      {/* Excerpt End */}
                      {/* Skills */}
                      <div className="border-top border-mercury pr-xl-0 pr-xxl-14 p-5 pl-xs-12 pt-7 pb-5">
                        <h4 className="font-size-6 font-weight-semibold mb-7 mt-5 text-black-2">Skills</h4>
                        <ul className="list-unstyled d-flex align-items-center flex-wrap">
                          <li>
                            <a className="bg-polar text-black-2  mr-6 px-7 mt-2 mb-2 font-size-3 rounded-3 min-height-32 d-flex align-items-center" href="#">Agile</a>
                          </li>
                          <li>
                            <a className="bg-polar text-black-2  mr-6 px-7 mt-2 mb-2 font-size-3 rounded-3 min-height-32 d-flex align-items-center" href="#">Wireframing</a>
                          </li>
                          <li>
                            <a className="bg-polar text-black-2  mr-6 px-7 mt-2 mb-2 font-size-3 rounded-3 min-height-32 d-flex align-items-center" href="#">Prototyping</a>
                          </li>
                          <li>
                            <a className="bg-polar text-black-2  mr-6 px-7 mt-2 mb-2 font-size-3 rounded-3 min-height-32 d-flex align-items-center" href="#">Information</a>
                          </li>
                          <li>
                            <a className="bg-polar text-black-2  mr-6 px-7 mt-2 mb-2 font-size-3 rounded-3 min-height-32 d-flex align-items-center" href="#">Waterfall Model</a>
                          </li>
                          <li>
                            <a className="bg-polar text-black-2  mr-6 px-7 mt-2 mb-2 font-size-3 rounded-3 min-height-32 d-flex align-items-center" href="#">New Layout</a>
                          </li>
                          <li>
                            <a className="bg-polar text-black-2  mr-6 px-7 mt-2 mb-2 font-size-3 rounded-3 min-height-32 d-flex align-items-center" href="#">Browsing</a>
                          </li>
                        </ul>
                      </div>
                      {/* Skills End */}
                      {/* Card Section Start */}
                      <div className="border-top border-mercury p-5 pl-xs-12 pt-7 pb-5">
                        <h4 className="font-size-6 font-weight-semibold mb-7 mt-5 text-black-2">Work Exprerience</h4>
                        {/* Single Card */}
                        <div className="w-100">
                          <div className="d-flex align-items-center pr-11 mb-9 flex-wrap flex-sm-nowrap">
                            <div className="square-72 d-block mr-8 mb-7 mb-sm-0">
                              <img src="./image/l2/png/featured-job-logo-1.png" alt="" />
                            </div>
                            <div className="w-100 mt-n2">
                              <h3 className="mb-0">
                                <a className="font-size-5 font-weight-semibold text-black-2" href="#">Lead Product Designer</a>
                              </h3>
                              <a href="#" className="font-size-4 text-default-color line-height-2">Airabnb</a>
                              <div className="d-flex align-items-center justify-content-md-between flex-wrap">
                                <a href className="font-size-3 text-gray">Jun 2017 - April 2020- 3 years</a>
                                <a href className="font-size-3 text-gray">
                                  <span className="mr-4" style={{marginTop: '-2px'}}><img src="./image/svg/icon-loaction-pin-black.svg" alt="" /></span>New York, USA</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Single Card End */}
                        {/* Single Card */}
                        <div className="w-100">
                          <div className="d-flex align-items-center pr-11 mb-9 flex-wrap flex-sm-nowrap">
                            <div className="square-72 d-block mr-8 mb-7 mb-sm-0">
                              <img src="./image/l1/png/feature-brand-1.png" alt="" />
                            </div>
                            <div className="w-100 mt-n2">
                              <h3 className="mb-0">
                                <a className="font-size-5 font-weight-semibold text-black-2" href="#">Senior UI/UX Designer</a>
                              </h3>
                              <a href="#" className="font-size-4 text-default-color line-height-2">Google Inc</a>
                              <div className="d-flex align-items-center justify-content-md-between flex-wrap">
                                <a href className="font-size-3 text-gray">Jun 2017 - April 2020- 3 years</a>
                                <a href className="font-size-3 text-gray">
                                  <span className="mr-4" style={{marginTop: '-2px'}}><img src="./image/svg/icon-loaction-pin-black.svg" alt="" /></span>New York, USA</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Single Card End */}
                      </div>
                      {/* Card Section End */}
                      {/* Card Section Start */}
                      <div className="border-top border-mercury p-5 pl-xs-12 pt-7 pb-5">
                        <h4 className="font-size-6 font-weight-semibold mb-7 mt-5 text-black-2">Education</h4>
                        {/* Single Card */}
                        <div className="w-100">
                          <div className="d-flex align-items-center pr-11 mb-9 flex-wrap flex-sm-nowrap">
                            <div className="square-72 d-block mr-8 mb-7 mb-sm-0">
                              <img src="./image/svg/harvard.svg" alt="" />
                            </div>
                            <div className="w-100 mt-n2">
                              <h3 className="mb-0">
                                <a className="font-size-5 font-weight-semibold text-black-2" href="#">Masters in Art Design</a>
                              </h3>
                              <a href="#" className="font-size-4 text-default-color line-height-2">Harvard University</a>
                              <div className="d-flex align-items-center justify-content-md-between flex-wrap">
                                <a href className="font-size-3 text-gray">Jun 2017 - April 2020- 3 years</a>
                                <a href className="font-size-3 text-gray">
                                  <span className="mr-4" style={{marginTop: '-2px'}}><img src="./image/svg/icon-loaction-pin-black.svg" alt="" /></span>Brylin, USA</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Single Card End */}
                        {/* Single Card */}
                        <div className="w-100">
                          <div className="d-flex align-items-center pr-11 mb-9 flex-wrap flex-sm-nowrap">
                            <div className="square-72 d-block mr-8 mb-7 mb-sm-0">
                              <img className="circle-72" src="./image/svg/mit.svg" alt="" />
                            </div>
                            <div className="w-100 mt-n2">
                              <h3 className="mb-0">
                                <a className="font-size-5 font-weight-semibold text-black-2" href="#">Bachelor in Software Engineering </a>
                              </h3>
                              <a href="#" className="font-size-4 text-default-color line-height-2">Manipal Institute of
                                Technology</a>
                              <div className="d-flex align-items-center justify-content-md-between flex-wrap">
                                <a href className="font-size-3 text-gray">Fed 2012 - April 2016 - 4 years</a>
                                <a href className="font-size-3 text-gray">
                                  <span className="mr-4" style={{marginTop: '-2px'}}><img src="./image/svg/icon-loaction-pin-black.svg" alt="" /></span>New York, USA</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Single Card End */}
                        {/* Single Card */}
                        <div className="w-100">
                          <div className="d-flex align-items-center pr-11 mb-9 flex-wrap flex-sm-nowrap">
                            <div className="square-72 d-block mr-8 mb-7 mb-sm-0">
                              <img className="circle-72" src="./image/svg/mit.svg" alt="" />
                            </div>
                            <div className="w-100 mt-n2">
                              <h3 className="mb-0">
                                <a className="font-size-5 font-weight-semibold text-black-2" href="#">Bachelor in Software Engineering </a>
                              </h3>
                              <a href="#" className="font-size-4 text-default-color line-height-2">Manipal Institute of
                                Technology</a>
                              <div className="d-flex align-items-center justify-content-md-between flex-wrap">
                                <a href className="font-size-3 text-gray">Fed 2012 - April 2016 - 4 years</a>
                                <a href className="font-size-3 text-gray">
                                  <span className="mr-4" style={{marginTop: '-2px'}}><img src="./image/svg/icon-loaction-pin-black.svg" alt="" /></span>New York, USA</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Single Card End */}
                      </div>
                      {/* Card Section End */}
                    </div>
                  </div>
                  {/* Middle Content */}
                  {/* Right Sidebar Start */}
                  <div className="col-12 col-xl-3 order-3 order-lg-2 bg-default-2">
                    <div className="text-center mb-13 mb-lg-0 mt-12">
                      <button className="btn btn-primary btn-xl mb-7 d-block mx-auto text-uppercase">Contact</button>
                      <button className="btn btn-outline-gray btn-xl mb-7 d-block mx-auto text-uppercase">Reject</button>
                    </div>
                  </div>
                  {/* Right Sidebar End */}
                </div>
              </div>
            </div>
          </div></div>
        </div>  
        </div>
    )
}

PostedJobs.propTypes = {

}

export default PostedJobs
