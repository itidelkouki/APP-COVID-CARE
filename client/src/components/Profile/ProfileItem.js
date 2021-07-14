import React from 'react';
import {
    Card, CardImg,  CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
  import'../auth/patient/PatientArea.css';
import {deleteprofile} from '../../js/actions/profileActions';
import { useDispatch} from 'react-redux';

//import DoctorDashboard from '../DoctorDash';
//import {Link} from 'react-router-dom';

const ProfileItem = ({profile}) => {

const dispatch = useDispatch();
const deleteProf = (id) => dispatch(deleteprofile(id));

    return (
        
        <div className="row" style={{marginTop:'5px' }}>   
        <div className="col-md-4">
            <Card className="client-signin" style={{justifyContent:'space-around' ,marginRight:'2px',marginLeft:'2px', marginTop:'2px',marginBottom:'2px'}}>
            <div className="profile-1" style={{textAlign:'center', justifyContent:'space-around', }}>
                    <div className="profile-img">
                    <CardImg top src="https://i.pinimg.com/originals/64/34/d7/6434d72ce9e16251c4f41f4e5a146567.png" alt="Card image cap" style={{width:"30%", height:"30%" ,marginTop:'0px' , }}  />

                    </div>
                    <div className="profile-details">
                        <div className="profile-desc">
                            <p className="profile-heading"><strong>TEL:{profile.tel}</strong></p>
                            <p className="profile-p"><strong>CLINIC:{profile.clinic}</strong> </p>
                            <p className="profile-p2"><strong>WEBSITE:{profile.website}</strong> </p>
                            <p className="profile-p2"><strong>LOCATION:{profile.location}</strong> </p>
                            <Button color="warning"  onClick={()=>deleteProf(profile._id) }> delete</Button>
                            
                           
                        </div>
                    </div>
                    
                </div>
                </Card>
        </div>
        </div>
    )
};

export default ProfileItem ;
// <DoctorDashboard  profile={profile} />
/*<div className="mx-auto profile-buttons">
                        {authReducer.isAuth ? (
                            <Fragment>
                                <Link to={`/appointment/${_id}`} type="button" className="rounded-pill profile-btn btn btn-info"><i className="fas fa-calendar-check"></i> Book Appointment</Link>
                            </Fragment>
                            ) : (
                                <Fragment>
                                    <button type="button" data-toggle="tooltip" data-placement="right" title="Please Login as a User" className="rounded-pill profile-btn btn btn-info disabled">
                                        <i className="fas fa-calendar-check"></i> Book Appointment
                                    </button>
                                </Fragment>
                            )
                        }
                        <Link to={`/doctor/${_id}`} type="button" className="rounded-pill profile-btn btn btn-dark">View Profile</Link>
                    </div>
                    <img src="{avatar}" alt="" />
                    */