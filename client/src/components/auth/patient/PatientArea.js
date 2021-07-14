import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerPatient} from '../../../js/actions/authPatientActions';
import { useHistory } from 'react-router-dom';
import ModalPatient from "./ModalPatient"
import { Link } from "react-router-dom";
import { Card, CardImg,  CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';
import './PatientArea.css';




const PatientArea= () =>{
   
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();
  const handleRegister = () => {
  const newUser = { name, lastName, email, password };
    dispatch(registerPatient(newUser));
    history.push('/Dashboard_patient');
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
          <p>Secure teleconsultation 5 days a week from 6 a.m. to 11 p.m. 100% reimbursed by Health Insurance. Register to make an appointment</p>
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
        <div></div>
        <div>
      <Card className="client-signin">
        <CardImg top width="30%" src="https://png.pngtree.com/png-vector/20200629/ourlarge/pngtree-women-wearing-masks-to-prevent-the-flu-and-the-corona-virus-png-image_2268997.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Already have doctor account</CardTitle>
          
          <CardSubtitle tag="h6" className="mb-2 text-muted">Click down to sign-in</CardSubtitle>
          
          <ModalPatient/>
         
          
        </CardBody>
      </Card>
    </div>
      </div>
    
    </div>
    )};
    export default  PatientArea;

