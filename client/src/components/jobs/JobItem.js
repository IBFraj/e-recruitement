import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const JobItem = ({job:{
  _id,
  titleCompany,
  titleJob,
  Contrat,
  location,
  salary,
  technicalSkills,
  description

} }) => {
    return (
      
           <div>
           
        <div className="pt-9 px-xl-9 px-lg-7 px-7 pb-7 light-mode-texts bg-white rounded hover-shadow-3 ">
        <div className="row">
          <div className="col-md-6">
            <div className="media align-items-center">
              <div className="square-72 d-block mr-8">
                <img src={"../../assets/image/l2/png/featured-job-logo-1.png"} alt="" />
              </div>
              <div>
               
                <h3 className="mb-0"><Link to={`/job/${_id}`}><a className="font-size-6 heading-default-color" >{titleJob}</a></Link></h3>
                <a href="#" className="font-size-3 text-default-color line-height-2">{titleCompany}</a>
              </div>
            </div>
          </div>
          <div className="col-md-6 text-right pt-7 pt-md-5">
            <div className="media justify-content-md-end">
              <div className="image mr-5 mt-2">
                <img src="./image/svg/icon-fire-rounded.svg" alt="" />
              </div>
              <p className="font-weight-bold font-size-7 text-hit-gray mb-0"><span className="text-black-2">{salary}K</span> </p>
            </div>
          </div>
        </div>
        <div className="row pt-8">
          <div className="col-md-7">
            <ul className="d-flex list-unstyled mr-n3 flex-wrap">
            {technicalSkills.map((technicalSkill, index) => (
                          
                          <li key={index}>
                            <a className="bg-regent-opacity-15 min-width-px-96 mr-3 text-center rounded-3 px-6 py-1 font-size-3 text-black-2 mt-2" href="#">{technicalSkill}</a>
                          </li> ))}

                        </ul>
            
          </div>
          <div className="col-md-5">
            <ul className="d-flex list-unstyled mr-n3 flex-wrap mr-n8 justify-content-md-end">
              <li className="mt-2 mr-8 font-size-small text-black-2 d-flex">
                <span className="mr-4" style={{marginTop: '-2px'}}><img src={"../../assets/image/svg/icon-loaction-pin-black.svg"} alt="" /></span>
                <span className="font-weight-semibold">{location}</span>
              </li>
              <li className="mt-2 mr-8 font-size-small text-black-2 d-flex">
                <span className="mr-4" style={{marginTop: '-2px'}}><img src={"../../assets/image/svg/icon-suitecase.svg"} alt="" /></span>
                <span className="font-weight-semibold">{Contrat}</span>
              </li>
              <li className="mt-2 mr-8 font-size-small text-black-2 d-flex">
                <span className="mr-4" style={{marginTop: '-2px'}}><img src={"../../assets/image/svg/icon-clock.svg"} alt="" /></span>
                <span className="font-weight-semibold">9d ago</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </div>
      
   
    )
}

JobItem.propTypes = {
  job: PropTypes.object.isRequired
};
export default JobItem;
