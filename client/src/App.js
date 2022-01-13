import React , { Fragment, useEffect} from 'react';
import Navbar from './components/layout/Navbar';
import Landing  from './components/layout/Landing';
import Login from './components/auth/Login';
import Loginrh from './components/auth/Loginrh';
import JobDetails from './components/jobs/JobDetails';
import Register  from './components/auth/Register';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Alert from './components/layout/Alert';
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken'
import Dashboard from './components/dashboard/Dashboard';
import PrivateRoute from './components/routing/PrivateRoute';
import CreateProfile from './components/profile-forms/CreateProfile';
import EditProfile from './components/profile-forms/EditProfile';
import AddExperience from './components/profile-forms/AddExperience';
import AddEducation from './components/profile-forms/AddEducation';
import Profiles from './components/Profiles/Profiles';
import Contact from './components/layout/Contact';
import Jobs from './components/jobs/Jobs';
import { loadRh } from './actions/authrh';
import CandidatProfile from './components/candidatProfile/CandidatProfile';
import JobForm from './components/jobs/JobForm';
import Applicants from './components/dashboardRh/Applicants';
import CompanyProfile from './components/dashboardRh/CompanyProfile';
import CompanyProfileForm from './components/dashboardRh/CompanyProfileForm';
import PostedJobs from './components/dashboardRh/PostedJobs';



if(localStorage.token) {
  setAuthToken(localStorage.token);
} 

const App = () => {
  useEffect( () => {
    store.dispatch(loadUser());
  }, [loadUser]);
  useEffect( () => {
    store.dispatch(loadRh());
  }, [loadRh]);
  return(
  <Provider store={store}>
  <Router>
  
    <Fragment>
     <Navbar />

  <Route exact path="/" component={Landing} />
 
   <Alert />
   <Switch>
      <Route exact path="/register" component={Register}/>
      <Route exact path="/login" component={Login} />
      <Route exact path="/loginrh" component={Loginrh} />
      <Route exact path="/profiles" component={Profiles} />
      <Route exact path="/candidat" component={CandidatProfile} />
      <Route exact path="/jobs" component={Jobs} />
      
      <Route exact path="/job/:id" component={JobDetails} />
      <Route exact path="addjob" component={JobForm} />
      <Route exact path="/company" component={CompanyProfile} />
      <Route exact path="/edit-company" component={CompanyProfileForm} />
      <Route exact path="/applicants" component={Applicants} />
      <Route exact path="/postedjobs" component={PostedJobs} />
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
      <PrivateRoute exact path="/create-profile" component={CreateProfile} />
      <PrivateRoute exact path="/edit-profile" component={EditProfile} />
      <PrivateRoute exact path="/add-experience" component={AddExperience} />
      <PrivateRoute exact path="/add-education" component={AddEducation} />
      <Route path="/contact" component={Contact}/>
   </Switch>

  </Fragment>
 
  </Router>
  </Provider>
)};



export default App;
