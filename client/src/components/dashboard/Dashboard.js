import React, { Fragment,useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DashboardActions from './DashboardActions';
import Spinner from '../layout/Spinner';
import { getCurrentProfile } from '../../actions/profile';
import { Link } from 'react-router-dom';
import Experience from './Experience';
import Education from './Education';

const Dashboard = ({ getCurrentProfile, register: { user }, profile: { profile, loading}}) => {
   useEffect(() => {
       getCurrentProfile();
   }, []);
    return loading && profile === null ? <Spinner /> : <Fragment>
        <h1 className="large text-primary">Dashboard</h1>
        <p className="lead">
            <i className="fas fa-user"></i>Welcome { user && user.name}
        </p>
        {profile !== null ? (
            <Fragment>
                <DashboardActions />
                <Experience experience={profile.experience} />
                <Education education={profile.education} />
            </Fragment>
        ):(
            <Fragment> 
                <p>


                </p>
                <p>You have not yet setup a profile, please add some info</p>
                <p>

                    
                </p>
                <Link to='/create-profile' className='btn btn-primary my-1'>
                    Create Profile
                </Link>
            </Fragment>
        )}

    </Fragment>
};

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    register: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    register: state.register,
    profile: state.profile
})

export default connect(mapStateToProps,{ getCurrentProfile})(Dashboard)
