
import React , { useEffect, Fragment } from 'react';
import {useSelector} from "react-redux";
import {getCurrentProfile,getProfileById} from '../../js/actions/profileActions';
import {useDispatch} from "react-redux"

const Profile = ()=>{
const dispatch=useDispatch()
/*const getProfile = () =>  dispatch(getCurrentProfile());
    useEffect(() => {
    
      getProfile();
  
    },[])*/
    const getCurrent = () => dispatch(getCurrentProfile());
    useEffect(() => {
      getCurrent();
    }, []);
const profile = useSelector(state=> state.profileReducer.profile);
const tel = useSelector(state=> state.profileReducer.tel);
const clinic = useSelector((state) => state.profileReducer.clinic);
const website= useSelector((state) => state.profileReducer.website);
const location = useSelector((state) => state.profileReducer.location);
    return (
      <div style={{justifyContent:'space-around'  , marginLeft:'80px'}}>
        <Fragment>
                    <section id="profile-page">
                    <h1 className="mb-3 ml-4" >Doctor Profile</h1>
                            <div className="profilecontainer">
                            
                                <div>
                             <h3>{tel} </h3>   
                             <h3>{clinic} </h3> 
                             <h3>{website} </h3> 
                             <h3>{location}</h3> 
                             </div>
                             <img src="https://png.pngtree.com/element_our/png_detail/20181026/doctor-avatar-icon-medical-health-specialist-avatar-woman-doctor-avatar-png_219874.jpg" style={{ height:'300px',  width:'300px', borderRadius:'50%' }}/>   

                             <li><a href="/doctordashboard"> Back to dashboard</a></li>   
                            </div>
                    </section>
               </Fragment>
                </div>
    )};

  /*const profile=useSelector((state)=> state.profileReducer.profile);
  const loading=useSelector((state)=> state.profileReducer.loading);
    return (
        <Fragment>
           {profile=== null || loading ? (
               <Spinner />
           ) : (
               <Fragment>
                    <section id="profile-page">
                            <div class="container">
                             <h1>your profile </h1>   
                             <img/>   
                                
                            </div>
                    </section>
               </Fragment>
           )} 
        </Fragment>
    );
};*/



export default Profile;