import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


const PrivateRoute = ({ component: Component,register: { isAuthenticated, loading}, ...rest }) => (
   
      <Route {...rest} render={props => !isAuthenticated && !loading ? (<Redirect to='/login'/>) : (<Component {...props}/>) } />
   
);

PrivateRoute.propTypes = {
    register: PropTypes.object.isRequired

}
const mapStateToProps = state => ({
    register: state.register
});
export default connect(mapStateToProps)(PrivateRoute)
