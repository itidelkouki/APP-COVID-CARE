import React from 'react';
import { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { getAuthUser} from './js/actions/authActions';
import { getAuthPatient} from './js/actions/authPatientActions';
import {getCurrentProfile}from './js/actions/profileActions';
import Switch from 'react-bootstrap/esm/Switch';
import Homepage from './components/home/Homepage';
import { Route } from "react-router-dom";
import PatientArea from './components/auth/patient/PatientArea';
import NavMenu from './components/home/NavMenu';
import DoctorArea from './components/auth/doctor/DoctorArea';
import OurServices from './components/home/OurServices';
import Footer from "./components/home/Footer";
import Doctorlogin from "./components/auth/doctor/Doctorlogin"
import ModalPatient from './components/auth/patient/ModalPatient';
import DoctorDashboard from './components/auth/doctor/DoctorDash';
import CreateProfile from './components/Profile/CreateProfile';
import ProfileDoctor from './components/Profile/ProfileDoctor';
import Profiles from './components/Profile/AllProfiles';
import Dashboard_patient from'./components/auth/patient/PatientDashboard';
import Questionnaire from'./components/auth/patient/Questionnaire';
import MedicalFile from'./components/MedicalFile/MedicalFile';
import Rdv from './components/RDV/RendezVous';
import ListRdv from './components/RDV/ListRendezVous';
//import {getCurrentProfile} from './js/actions/profileActions';
function App() {
  const dispatch = useDispatch();
  //const { isLoading } = useSelector((state) => state.authReducer);
 const getUser = () => dispatch(getAuthUser());
  const getPatient = ()=>dispatch(getAuthPatient());
  const getCurrent = () => dispatch(getCurrentProfile());
  
useEffect(() => {
    getUser();
  //  getPatient();
   // getCurrent();
   }, [getUser]);

  return (
  <div className="App">
  <Switch>
  <NavMenu/>
  
         <Route exact path="/" component={Homepage} />
         <Route path="/patient" component={PatientArea} />
         <Route path="/doctors" component={DoctorArea} />
         <Route path="/services" component={OurServices} />
         <Route path="/doctordashboard" component={DoctorDashboard} />
         <Route path="/doctorsllog" component={Doctorlogin} />
         <Route path='/create-profile' component={CreateProfile} />
         <Route path='/doctorprofile' component={ProfileDoctor} />
         <Route path="/patientlog" component={ModalPatient} />
         <Route path='/profiles' component={Profiles} />
         <Route path="/Dashboard_patient" component={ Dashboard_patient} />  
         <Route path="/Questionnaire" component={ Questionnaire} />  
         <Route path="/medicalFile" component={ MedicalFile} />  
         <Route path="/Appointment" component={ Rdv} /> 
         <Route path="/ListRdv" component={ ListRdv} /> 
         <Footer/>

  </Switch>
          
      
    </div>
  );
}

export default App;
//<Route path="/login" component={Login} />
//<Route path="/explore" component={Explore} />
///doctorsllog