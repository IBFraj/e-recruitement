import React from 'react'
import PropTypes from 'prop-types'
import formatDate from '../../utils/formatDate';

const CandidatExperience = ({experience: { company, title, location, current, to, from, description }
}) => {
    return (
        <div className="d-flex align-items-center pr-11 mb-9 flex-wrap flex-sm-nowrap">
        <div className="square-72 d-block mr-8 mb-7 mb-sm-0">
          <img
            src="./image/l2/png/featured-job-logo-1.png"
            alt=""
          />
        </div>
        <div className="w-100 mt-n2">
          <h3 className="mb-0">
            <a
              className="font-size-6 text-black-2 font-weight-semibold"
              href="#"
            >
             {title}
            </a>
          </h3>
          <a
            href="#"
            className="font-size-4 text-default-color line-height-2"
          >
           {company}
          </a>
          <div className="d-flex align-items-center justify-content-md-between flex-wrap">
            <a href className="font-size-4 text-gray mr-5">
            {formatDate(from)} - {to ? formatDate(to) : 'Now'}
            </a>
            <a href className="font-size-3 text-gray">
              <span
                className="mr-4"
                style={{ marginTop: "-2px" }}
              >
                <img
                  src="./image/svg/icon-loaction-pin-black.svg"
                  alt=""
                />
              </span>
              {location}
            </a>
          </div>
        </div>
      </div>
    )
}

CandidatExperience.propTypes = {
  experience: PropTypes.object.isRequired
}

export default CandidatExperience
