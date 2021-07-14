import React, {useState, Fragment} from 'react';
//import {Link} from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import {connect} from 'react-redux';
import {createProfile} from '../../js/actions/profileActions';
import'../auth/patient/PatientArea.css';
import { useHistory } from 'react-router-dom';
import {Button} from 'reactstrap';
const CreateProfile = ({}) => {

    //const [image, setImage] = useState('');
    const [tel, setTel] = useState('');
    const [clinic, setClinic] = useState('');
    const [website, setWebsite] = useState('');
    const [location, setLocation] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();
    const handleRegister = () => {
    const formdata = {  tel, clinic, website,location};
      dispatch(createProfile(formdata));
   
     history.push('/doctorprofile');
     // setImage('');
      setTel();
      setClinic('');
      setWebsite('');
      setLocation('');

    };
    const doctor = useSelector((state) => state.authReducer.doctor);
    const profile = useSelector((state)=> state.profileReducer.profile);  
 return(



    <div className="container">
    <div class="contact-container">
       <div class="right-col">
         <form id="contact-form" method="post" action="/contact">
           <label for="name"> TEL NUMBER</label>
           <input
             type="number"
             id="tel"
             name="tel"
             placeholder="Your  telephone number"
             value={tel}
             onChange={(e) => setTel(e.target.value)}
           />
           <label for="CLINIC">CLINIC</label>
           <input
             type="string"
             id="string"
             name="string"
             placeholder="CLINIC"
             value={clinic}
             onChange={(e) => setClinic(e.target.value)}
           />
           <label for="email">WEBSITE</label>
           <input
             type="email"
             id="email"
             name="email"
             placeholder="Your WEBSITE"
             value={website}
             onChange={(e) => setWebsite(e.target.value)}
           />
           <label for="password">LOCATION </label>
           <input
             type="string"
             id="string"
             name="string"
             placeholder="LOCATION"
             value={location}
             onChange={(e) => setLocation(e.target.value)}
           />
           
           <Button color="warning" onClick={handleRegister}>envoyer </Button>
         </form>
       </div>
       </div>
       </div>
       
 )
    
};
export default CreateProfile;
