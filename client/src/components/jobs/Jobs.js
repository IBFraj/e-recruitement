import React, { Fragment, useEffect } from 'react';
import { Footer } from '../layout/Footer';
import { getJobs } from '../../actions/job';
import JobItem from './JobItem';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


 const Jobs = ({getJobs, job: {jobs}}) => {
  useEffect(() => {
    getJobs();
  }, [getJobs]);
    return (
        <Fragment>
             <div className="site-wrapper overflow-hidden ">
        {/* Header start  */}
        {/* Header Area */}
        {/* navbar- */}
        {/* Login Modal */}
        {/* Header end */}
        {/* Main Content Start */}
        <div className="bg-default-1 pt-26 pt-lg-28 pb-13 pb-lg-25">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-4 col-md-5 col-xs-8">
                {/* Sidebar Start */}
                <div className="widgets mb-11">
                  <h4 className="font-size-6 font-weight-semibold mb-6">Job Type</h4>
                  <ul className="list-unstyled filter-check-list">
                    <li className="mb-2"><a href="#" className="toggle-item">Full Time</a></li>
                    <li className="mb-2"><a href="#" className="toggle-item">Part Time</a></li>
                    <li className="mb-2"><a href="#" className="toggle-item">Contract</a></li>
                    <li className="mb-2"><a href="#" className="toggle-item">Internship</a></li>
                    <li className="mb-2"><a href="#" className="toggle-item">Temporary</a></li>
                  </ul>
                </div>
                <div className="widgets mb-11 ">
                  <div className="d-flex align-items-center pr-15 pr-xs-0 pr-md-0 pr-xl-22">
                    <h4 className="font-size-6 font-weight-semibold mb-6 w-75">Salary Range</h4>
                    {/* Range Slider */}
                    <div className="slider-price w-25 text-right mr-7">
                      <p className="font-weight-bold">
                        <input className="text-primary font-weight-semibold font-size-4 focus-reset" type="text" id="amount" readOnly />
                      </p>
                    </div>
                  </div>
                  <div className="graph text-center mx-0 mt-5 position-relative chart-postion">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="range-slider">
                    <div className="pm-range-slider" />
                  </div>
                </div>
                <div className="widgets mb-11">
                  <h4 className="font-size-6 font-weight-semibold mb-6">Experience Level </h4>
                  <ul className="list-unstyled filter-check-list">
                    <li className="mb-2"><a href="#" className="toggle-item">All</a></li>
                    <li className="mb-2"><a href="#" className="toggle-item">Senior</a></li>
                    <li className="mb-2"><a href="#" className="toggle-item">Mid</a></li>
                    <li className="mb-2"><a href="#" className="toggle-item">Junior</a></li>
                  </ul>
                </div>
                <div className="widgets mb-11">
                  <h4 className="font-size-6 font-weight-semibold mb-6">Posted Time</h4>
                  <ul className="list-unstyled filter-check-list">
                    <li className="mb-2"><a href="#" className="toggle-item">Anytime</a></li>
                    <li className="mb-2"><a href="#" className="toggle-item">Last day</a></li>
                    <li className="mb-2"><a href="#" className="toggle-item">Last 3 days</a></li>
                    <li className="mb-2"><a href="#" className="toggle-item">Last week</a></li>
                  </ul>
                </div>
                {/* Sidebar End */}
              </div>
              {/* Main Body */}
              <div className="col-12 col-xl-8 col-lg-8">
                {/* form */}
                <form action="/" className="search-form">
                  <div className="filter-search-form-2 search-1-adjustment bg-white rounded-sm shadow-7 pr-6 py-6 pl-6">
                    <div className="filter-inputs">
                      <div className="form-group position-relative w-lg-45 w-xl-40 w-xxl-45">
                        <input className="form-control focus-reset pl-13" type="text" id="keyword" placeholder="UI Designer" />
                        <span className="h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6">
                          <i className="icon icon-zoom-2 text-primary font-weight-bold" />
                        </span>
                      </div>
                      {/* .select-city starts */}
                      <div className="form-group position-relative w-lg-55 w-xl-60 w-xxl-55">
                        <select name="country" id="country" className="nice-select font-size-4 pl-13 h-100 arrow-3">
                          <option data-display="City, state, zip code or (Remote)">City</option>
                          <option value>United States of America</option>
                          <option value>United Arab Emirates</option>
                          <option value>Bangladesh</option>
                          <option value>Pakistan</option>
                        </select>
                        <span className="h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6">
                          <i className="icon icon-pin-3 text-primary font-weight-bold" />
                        </span>
                      </div>
                      {/* ./select-city ends */}
                    </div>
                    <div className="button-block">
                      <button className="btn btn-primary line-height-reset h-100 btn-submit w-100 text-uppercase">Search</button>
                    </div>
                  </div>
                </form>
                <div className="pt-12">
                  <div className="d-flex align-items-center justify-content-between mb-6">
                    <h5 className="font-size-4 font-weight-normal text-gray">
                      <span className="heading-default-color">120</span>
                      results for <span className="heading-default-color">UI Designer</span>
                    </h5>
                    <div className="d-flex align-items-center result-view-type">
                      <a className="heading-default-color pl-5 font-size-6 hover-text-hitgray active" >
                        <i className="fa fa-list-ul" />
                      </a>
                      <a className="heading-default-color pl-5 font-size-6 hover-text-hitgray" >
                        <i className="fa fa-th-large" />
                      </a>
                    </div>
                  </div>
                  <div className="mb-8">
                    {/* Single Featured Job */}
                    {jobs.length > 0 ? (
              jobs.map(job => (
                <JobItem key={job._id} job={job} />
              ))
            ) : (
              <h4>No jobs found...</h4>
            )}
                    {/* End Single Featured Job */}
                  </div>
              
                  <div className="text-center pt-5 pt-lg-13">
                    <a className="text-green font-weight-bold text-uppercase font-size-3" href="#">
                      Load More <i className="fas fa-sort-down ml-3" />
                    </a>
                  </div>
                </div>
                {/* form end */}
              </div>
            </div>
          </div>
        </div>
        <Footer />
        {/* Main Content end */}
        {/* footer area function start */}
        {/* cta section */}
        {/* footer area function end */}
      </div>

        </Fragment>
    )
}
Jobs.propTypes = {
  getJobs: PropTypes.func.isRequired,
  Job: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  job: state.job
});

export default connect(
  mapStateToProps,
  { getJobs }
)(Jobs);

