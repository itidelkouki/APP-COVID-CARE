import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import '../patient/PatientArea.css';
//import DoctorDash from "./DoctorDash";
import { registerUser } from '../../../js/actions/authActions';
import {
  Card, CardImg,  CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";
import Doctorlogin from './Doctorlogin';
const DoctorArea= ({doctor}) =>{

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();
  const handleRegister = () => {
  const newUser = { name, lastName, email, password };
    dispatch(registerUser(newUser));
    history.push('/doctordashboard');
    setEmail('');
    setName('');
    setLastName('');
    setPassword('');
  };


    return(

      
        <div className="container">
     <div class="contact-container">
        <div class="right-col">
          <h1>Online consultation</h1>
          <p>Covid-carte.tn is a 100% online, Tunisian teleconsultation solution with no time commitment.</p>
          <form id="contact-form" method="post" action="/contact">
            <label for="name"> Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your  Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label for="CIN">LASTNAME</label>
            <input
              type="string"
              id="string"
              name="string"
              placeholder="Your lastname"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label for="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label for="password">Password </label>
            <input
              type="number"
              id="number"
              name="number"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            
            <Button color="warning" onClick={handleRegister}>Join our team</Button>
          </form>
        </div>
        <div>
      <Card className="client-signin">
        <CardImg top width="30%" src="https://image.freepik.com/vecteurs-libre/avatars-medecine-sertie-femmes-medecins-infirmieres-icones-vectorielles-isolees_81894-1969.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Already have doctor account</CardTitle>
          
          <CardSubtitle tag="h6" className="mb-2 text-muted">Click down to sign-in</CardSubtitle>
          
          <Doctorlogin/>
         
          
        </CardBody>
      </Card>
    </div>
      </div>
    
    </div>
    )};
    export default  DoctorArea;

/*  <Link to="/doctorsllog">
          <Button color="warning">sign-in</Button>
          </Link>*/