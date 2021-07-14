import React , { useEffect, Fragment } from 'react';
import {useDispatch,useSelector} from "react-redux"
import {getProfile,deleteprofile ,getCurrentProfile} from '../../../js/actions/profileActions';
import {Link} from 'react-router-dom';
import { Spinner } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import EditModalProfile from "../../Profile/EditModalProfile";
import {
  Card, CardImg,  CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';


const DoctorDashboard = () => {
  const dispatch=useDispatch()
//const getCurrent = () => dispatch(getCurrentProfile());

 /* useEffect(() => {
  getCurrent();
 },[]);*/

  const getCurrent  = () => {dispatch(getCurrentProfile());
    history.push('/doctorprofile');
  }

  const deleteProf = (id) => dispatch(deleteprofile(id));
  const doctor = useSelector((state) => state.authReducer.doctor);
  const profile = useSelector((state)=> state.profileReducer.profile);
  const loading = useSelector((state)=> state.profileReducer.loading);
  console.log(profile);
  

   
const history = useHistory();

console.log(doctor);

  return   (
    <div style={{justifyContent:'space-around'  , marginLeft:'80px'}}>
<h1 className="mb-3 ml-4" style={{marginLeft:'80px' , fontFamily:'"Open Sans", sans-serif', justifyContent:'space-around'  , padding:'20px',
color: '#e4a1ff',
textTransform:' uppercase',
fontSize: '2rem',
letterSpacing: '0.4rem',
fontWeight: '600'}}>{doctor ? `Welcome Doctor ${doctor.name} ${doctor.name}` : null}</h1>

     
      
      <div style={{display:'flex',flex:'wrap'}}>
      <Card  style={{ textAlign:'center' , color :'white', fontFamily:'"Open Sans", sans-serif', backgroundColor:'white'
}}>
        
        <CardBody >
          <CardTitle style={{textAlign:'center' , fontFamily:'"Open Sans", sans-serif', justifyContent:'space-around'  , padding:'20px',
color: 'white',
textTransform:' uppercase',
fontSize: '2rem',
letterSpacing: '0.5rem',
fontWeight: 'bold'}} tag="h5">Profile</CardTitle>
          <CardSubtitle tag="h4" style={{  textAlign:'left'}} > NAME: {doctor && doctor.name}</CardSubtitle>
          <CardSubtitle tag="h4" style={{ marginTop:"5px", textAlign:'left'}}>lASTNAME: {doctor && doctor.lastName}</CardSubtitle>
          <CardSubtitle tag="h4" style={{ marginTop:"5px", textAlign:'left'}} >Email: {doctor && doctor.email}</CardSubtitle>

          {/* <CardSubtitle tag="h4" style={{ marginTop:"5px", textAlign:'left'}} >TEL: { profile.tel}</CardSubtitle>
          <CardSubtitle tag="h4" style={{ marginTop:"5px", textAlign:'left'}} >CLINIC: {profile.clinic}</CardSubtitle>
          <CardSubtitle tag="h4" style={{ marginTop:"5px", textAlign:'left'}} >lOCATION:{profile.location}</CardSubtitle>
          <CardSubtitle tag="h4" style={{ marginTop:"5px", textAlign:'left'}} >WEBSITE   :{profile.website}</CardSubtitle>
          <br/> */}
          {/* <Button className="btn btn-info" onClick={()=>deleteProf(profile._id) }>delete</Button> */}
          <Button className="btn btn-info"  onClick= {getCurrent}>View profile</Button>

          {/* <Button className="btn btn-info"  onClick= {getPro}>View profiles</Button> */}
          <br/>
          <div>
      
      <p>You have not any Profile add your Profile..</p>
      <Link to='/create-profile' className="btn btn-info">
      Create Profile
      </Link>
      {/* <img src="https://png.pngtree.com/element_our/png_detail/20181026/doctor-avatar-icon-medical-health-specialist-avatar-woman-doctor-avatar-png_219874.jpg" style={{ height:'300px',  width:'300px', borderRadius:'50%' }}/>  */}

      </div>
          
        </CardBody>
      </Card>
      <div>
      <img src="https://png.pngtree.com/element_our/png_detail/20181026/doctor-avatar-icon-medical-health-specialist-avatar-woman-doctor-avatar-png_219874.jpg" style={{ height:'500px',  width:'400px', marginLeft:'300px', borderRadius:'50%' }}/> 
      
      </div>
      {/* <EditModalProfile/> */}
    </div>
    
     
      
      
    </div>

  );
};

export default DoctorDashboard;
//Link to='/profiles'>
/*<div>
      <h1>{profile && profile.tel}</h1>
      <h1>{profile && profile.clinic}</h1>
      <h1>{profile && profile.website}</h1>
      <h1>{profile && profile.location}</h1>
      <button color="warning"  onClick={()=>deleteProf(profile._id) }> delete</button>
      <EditModalProfile />
      
      <button onClick= {getPro}> see all Doctors profiles</button>
      
  


      
      
      
      
      
      */