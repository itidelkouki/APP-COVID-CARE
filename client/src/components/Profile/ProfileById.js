/*import React, {Fragment, useEffect} from 'react';
import {useDispatch,useSelector} from "react-redux"
import { Spinner } from 'reactstrap';
import {getProfileById} from '../../js/actions/profileActions';
import { Link } from 'react-router-dom';

const ProfileID = ({match}) => {
    const dispatch=useDispatch()
    
    const getById= (id) => dispatch(getProfileById(id));
useEffect(() => {
      getById(match.params.id);
  },[]);  
    const profile = useSelector(state=> state.profileReducer.profile);
    const loading = useSelector(state=> state.profileReducer.loading);
   const profileById = useSelector((state) => state.profileReducer.profileById);
    return (
        <Fragment>
           {profileById === null || loading ? (
               <Spinner />
           ) : (
               <Fragment>
                    <section id="profile-page">
                            <div class="container">
                                
                                    
                             <h3>{profileById.tel && profileById.tel} </h3>   
                             <h3>{profileById.clinic && profileById.clinic} </h3> 
                             <h3>{profileById.website && profileById.website} </h3> 
                             <h3>{profileById.location && profileById.location}</h3> 


                             <div class="current-profile">
                                    <div class="current-btn">
                                        <Link class="rounded-pill btn btn-dark" to="/profiles">Back to Profiles</Link>
                                            
                                    
                                    </div>
                                </div>
                            </div>
                    </section>
               </Fragment>
           )} 
        </Fragment>
    );
};





export default ProfileID;*/
//<Profile profile={profileById} />

/*useEffect(() => {
      getById(match.params.id);
  },[getById, match.params.id]);  */  