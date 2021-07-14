import React from 'react';
import './Main.css';
import {Card,CardBody,CardTitle,CardText} from'reactstrap';


const Homepage = () =>{
    return(
<div classNameName="home">
 
    <div className="car-image">
      <div className="container">
        <h1>Welcome To Covid-Care.tn</h1>
        
      </div>
    </div>
    
    <div className="container content">
      <h1>Why Choose Covid-Care.tn?</h1>
      <h4>
        With Covid-Care.tn we makes safe online health affordable and accessible to everyone. We have
        the best team and best services:
      </h4>
      <img className="img-Homepage" src="https://image.freepik.com/vecteurs-libre/illustration-assistance-medicale-ligne_74855-4447.jpg" alt ="img1"/> 
     
<div className="row">   
<div className="col-md-4">
         <Card classNameName="card-body">
         <CardBody >
         <i className="fas fa-user-friends icon"></i>
            <CardTitle>The best team</CardTitle>
            <CardText>
                Our expert team of doctors will take care
                of you , working professionally in a customer friendly team. A high qualified medical team working together effectively in order 
                to insure the best quality of medical procedures and care for patient safety.
                Medical confidentiality is kept in teleconsultation.
            </CardText>
         </CardBody>
         </Card></div> 
         <div className="col-md-4">
         <Card classNameName="card-body">
         <CardBody >
          <CardTitle tag="h5">Save time & money</CardTitle>
          <CardText> Our fully managed services will save you time and money. In
                Covid-Care.tn we are able to handle customer needs with
                an excellent price and we save patients and practitioners incredible amounts of time . Our Telehealth services  provide  you the same or better experiences than conventional in-person doctor-patient interactions. </CardText>
          
        </CardBody>
        </Card></div> 
        <div className="col-md-4">
         <Card classNameName="card-body">
        <CardBody >
        <CardTitle tag="h5">Our work</CardTitle>
        <CardText> From the start of the pandemic in December 2019, we worked with various doctors and
                people, helping them take care of their health from diagnostic,online consultation
                , PCR appointment in an analysis laboratory,control and more ,in a legal framework approved by the state.
                Check our services page for more details and contact page for any help.
        </CardText>
        </CardBody>
        </Card></div> 
</div>   
    </div>
</div>
    )};

    export default  Homepage;

