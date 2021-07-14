import React from 'react';
import './OurServices.css';
import {
  Card, CardImg,  CardBody,
  CardTitle, CardSubtitle, 
} from 'reactstrap';

const OurServices= () =>{
    return(

      
     <div className="container">
     <div class="contact-container">
     <div><h2>Our Services </h2>
    <div className="flex-section">
    <Card className="services">
        <div>
        <CardTitle> Team of qualified doctors</CardTitle>
        <CardImg  style={{width:'300px',height:'300px', borderRadius:'50%'
          
        }}src='https://image.freepik.com/vecteurs-libre/medecins-infirmieres-plats-bio_23-2148961069.jpg'/>
        <CardBody>
          <CardSubtitle>
        <p>
          Stay at home! the coronavirus is a contagious disease .
          This tool provides relevant solutions and simplifies the treatment protocol for patients
          with covid-19,home care support by video.</p>
          </CardSubtitle>
          </CardBody>
         </div>
         </Card>
        <div>
    

        <h4> Analysis laboratories</h4> <img  style={{width:'300px',height:'300px',borderRadius:'50%'
          
        }}src='https://pbs.twimg.com/media/Ek7I8pDXIAMzbcX.jpg'/>
        <p>
          
          Inform you of the nearest analysis laboratories: making an appointment at home without moving
        </p>
        </div></div>
        <div className="doctors">
            <div>
        <h4>Oxygen centers </h4>
        <img  style={{width:'300px',height:'300px',borderRadius:'50%'
          
        }}src='https://image.freepik.com/vecteurs-libre/patient-couche-dans-lit-hopital-masque-oxygene_107173-3095.jpg'/>
        <p>
          Inform you of the nearest oxygen centers.
        </p></div>
<div>     
        <h4> The mediacl file </h4><img  style={{width:'300px',height:'300px',borderRadius:'50%'
          
        }}src='https://thumbs.dreamstime.com/z/ic%C3%B4ne-du-dossier-m%C3%A9dical-pour-des-documents-le-web-mobile-et-les-applications-informatiques-illustration-plate-d-isolement-sur-102503818.jpg'/>
        
        <p>
         Reimbursement of the mediacl file: CNSS, CNAM ...
        </p>
        </div>

     
      </div>
      </div>
      </div>


     </div>
     )};

     export default OurServices;