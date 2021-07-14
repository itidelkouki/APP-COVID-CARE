import axios from 'axios';
import {
  DOCTOR_LOADING,
  LOGIN_DOCTOR,
  REGISTER_DOCTOR,
  LOGOUT_DOCTOR,
  GET_AUTH_DOCTOR,
  AUTH_ERRORS,
} from '../constants/ActionsTypes';

//Set the user loading
const userLoading = () => (dispatch) => {
  dispatch({
    type: DOCTOR_LOADING,
  });
};

// Register USer
export const registerUser = (formData) => async (dispatch) => {
  dispatch(userLoading());
  try {
    const res = await axios.post('/api/auth/register', formData);
    dispatch({
      type: REGISTER_DOCTOR,
      payload: res.data, // { msg: 'User registred with success', user, token }
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: AUTH_ERRORS,
    });
  }
};
// Login User
export const loginUser = (formData) => async (dispatch) => {
  dispatch(userLoading());

  try {
    const res = await axios.post('/api/auth/login', formData);
    dispatch({
      type: LOGIN_DOCTOR,
      payload: res.data, // { msg: 'Logged in with success', user, token }
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: AUTH_ERRORS,
    });
  }
};

// Get auth user
export const getAuthUser = () => async (dispatch) => {
  dispatch(userLoading());

  try {
    //headers
    const config = {
      headers: {
        'x-auth': localStorage.getItem('token'),
      },
    };
    const res = await axios.get('/api/auth/doctor', config);
    console.log('res3',res);
    dispatch({
      type: GET_AUTH_DOCTOR,
      payload: res.data, // {user: req.user}

    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: AUTH_ERRORS,
    });
  }
};

export const logout = () => (dispatch) => {
  dispatch({
    type:  LOGOUT_DOCTOR,
  });
};
