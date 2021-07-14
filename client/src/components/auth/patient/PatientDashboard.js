
import React, { useEffect} from 'react';
 import { Card,CardTitle, CardText,Button,CardImg } from 'reactstrap';
 import {getAuthPatient} from "../../../js/actions/authPatientActions";
 
 
  import { Spinner } from 'reactstrap';
  import { Link } from "react-router-dom";
  import { useDispatch,useSelector } from 'react-redux';
 
 
 
  const CardPatient = () => {
   
    
      const user = useSelector((state) => state.authPatientReducer.user);
    if (!user) 
        return (
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
           <Spinner
             style={{ width: '3rem', height: '3rem', color: 'secondary' }}
             type="grow"
           />
         </div>
       );
        
   
     return (
       
 
           <div style={{marginLeft:"180px"}} >
              <Card style={{ backgroundColor :'white', color:'#b35cb6', height:"530px", width:"50%", alignItems:'center',margin:'100px', fontFamily:'"Open Sans", sans-serif', fontSize:'1.5rem', }}>
              <h3 style={{fontWeight:'bold',textTransform:' uppercase',fontFamily:'"Open Sans", sans-serif', fontSize:'2rem',color:'black'}}> Welcome Patient {user.name} {user.lastName} </h3>
              <CardImg top src="https://png.pngtree.com/png-clipart/20200411/ourlarge/pngtree-coughing-symptoms-of-coronavirus-illustration-in-hand-drawn-style-png-image_2181911.jpg" alt="Card image cap" style={{width:"30%", height:"30%" ,marginTop:'0px' , borderRadius:'50%' }}  />

         <br/>
         <h4 style={{ color:'orange'}}>Email :{user.email}</h4>
         <br/>  
         <div style={{display:"flex",justifyContent:"space-around"}} >
            <p>Dear patient please answer the following questions by clicking on the button below so that we can build your medical file to consult your doctor</p>
         </div>
         
         <Link to="/Questionnaire" > <Button color="warning">Show more</Button> </Link>
         </Card>
        </div>
    )
     }
 
  export default CardPatient;