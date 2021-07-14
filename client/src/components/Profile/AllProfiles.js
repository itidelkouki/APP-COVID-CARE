import React, {Fragment, useEffect} from 'react';
import { Spinner } from 'reactstrap';
//import {Dots} from 'react-preloaders';
import ProfileItem from './ProfileItem';
import {useSelector} from "react-redux";
import {getProfile,deleteprofile,getCurrentProfile} from '../../js/actions/profileActions';
import { useDispatch} from 'react-redux';

const Profiles = () => {
    const dispatch = useDispatch();
    const getPro = () => dispatch(getProfile());
    const getCurrent = () => dispatch(getCurrentProfile());
  
    useEffect(() => {
        getPro();
        getCurrent();
    },[]);

const profiles = useSelector(state=> state.profileReducer.profiles);
//const profile = useSelector(state=> state.profileReducer.profile);
const loading = useSelector(state=> state.profileReducer.loading);
    return (
        
        <Fragment>
            { loading ? <Spinner /> : 
                <Fragment>
                    <h1 style={{marginLeft:'80px' , fontFamily:'"Open Sans", sans-serif', justifyContent:'space-around'  , padding:'20px',
color: '#e4a1ff', textAlign:'center',
textTransform:' uppercase',
fontSize: '2.5rem',
letterSpacing: '0.5rem',
fontWeight: '400'}}><strong>Doctor Profiles</strong></h1>  
                <section id="profiles-page">
                    <div  style={{display:'flex', flexWrap:'wrap', justifyContent:'space-around' }}>
                        <div className="heading-common">
                            
                        </div>
                        <br />
                        {
                            profiles != null ? (
                                profiles.map((profile) => (
                                    <ProfileItem key={profile._id} profile={profile} />
                                ))
                            ) : <h4>No Profiles found..</h4>
                        }
                    </div>
                </section>
                </Fragment>
            }
            <li><a href="/doctordashboard"> Back to dashboard</a></li>
        </Fragment>
    )
};

/*                        <h2 className="welcome-heading"><i className="fas fa-user-md"></i> Book your Appointments</h2>

*/

export default Profiles;
