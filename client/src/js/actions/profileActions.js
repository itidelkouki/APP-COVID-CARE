import axios from 'axios';
//import {setAlert} from './alert';
import {
    GET_PROFILE,USER_LOADING
    ,AUTH_ERRORS, GET_PROFILE_BY_ID,PROFILE_ERROR,GET_PROFILES,CREATE_PROFILE, CLEAR_PROFILE,EDIT_PROFILES,
} from '../constants/ActionsTypes';

const userLoading = () => (dispatch) => {
  dispatch({
    type: USER_LOADING,
  });
};
//Get current doctors profile
export const getCurrentProfile = () => async dispatch => {
  dispatch(userLoading());
    try {

      const config = {
        headers: {
         'x-auth': localStorage.getItem('token'),
        }
    }

        const res = await axios.get('http://localhost:5000/api/profiles/connectedDoctor/me',config);
        console.log('res5',res);
        dispatch({
            type: GET_PROFILE,
            payload: res.data
        });
    } catch (error) {
      console.log(error);
      dispatch({
        type: AUTH_ERRORS,
      });
    }
  };


// Get all profiles
export const getProfile = () => async dispatch => {
  
    try {
      const config = {
        headers: {
         'x-auth': localStorage.getItem('token'),
        }
    }

        const res = await axios.get('/api/profiles/',config);
        console.log("res1",res);
        dispatch({
            type: GET_PROFILES,
            payload: res.data,
           
        });
    } catch (error) {
      console.log(error);
      dispatch({
        type: AUTH_ERRORS,
      });
    }
  };

 //Get profiles by doctor id
export const getProfileById = (profileId) => async dispatch => {
    try {
      const config = {
        headers: {
         'x-auth': localStorage.getItem('token'),
        }
    }
    
        const res = await axios.get("/api/profiles/"+profileId,config);  
        console.log('res2',res) ;     
        dispatch({
            type: GET_PROFILE_BY_ID,
            payload: res.data
        });
    } catch (error) {
      console.log(error);
      dispatch({
        type: AUTH_ERRORS,
      });
    }
  };
// Create NEW PROFILE 



export const createProfile = (formData) => async dispatch => {
  
    try {
      const config = {
        headers: {
         'x-auth': localStorage.getItem('token'),
        }
    }
        const res = await axios.post('/api/profiles/newProfile', formData,config);
    dispatch({
      type: CREATE_PROFILE,
      payload: res.data, 
    });

    } catch (error) {
        console.log(error);
       
        console.dir(error);
        const { errors, msg } = error.response.data;
    
        if (Array.isArray(errors)) {
          errors.forEach((err) => alert(err.msg));
        }
        console.log(errors);
        if (msg) {
          alert(msg);
        }
    
        dispatch({
          type: AUTH_ERRORS,
        });
      }
    };

      //Delete  profile
  export const deleteprofile =(profileId) => async (dispatch) => {
    dispatch(userLoading());
    // console.log(idprofile);
    try {
      const config = {
        headers: {
         'x-auth': localStorage.getItem('token'),
        }
    }
      const res = await axios.delete("http://localhost:5000/api/profiles/deleteProfile/"+profileId ,config);
      console.log("resOne",res)
      console.log("idDelete",profileId)
    
      dispatch({
      
        type: CLEAR_PROFILE,
        payload: res.data, 
       
      });
      dispatch(getProfile());

    } catch (error) {
      console.log(error);
      dispatch({
        type: AUTH_ERRORS,
      });
    }
  };

  //Edit Profile
export const editProfile = (idProfile,editedProfile) => async (dispatch) => {
  dispatch(userLoading());
  try {
    const config = {
      headers: {
       'x-auth': localStorage.getItem('token'),
      }
  }
    const res = await axios.put("http://localhost:5000/api/profiles/editProfile/"+idProfile,editedProfile,config);
    
    dispatch({
      type: EDIT_PROFILES,
      payload: res.data,//{ msg: "Profile created", Profile, user });

    });
    dispatch(getCurrentProfile());
  } catch (error) {
    console.log(error);}};