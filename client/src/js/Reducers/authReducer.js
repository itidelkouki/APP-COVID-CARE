import {
  DOCTOR_LOADING,
  LOGIN_DOCTOR,
  REGISTER_DOCTOR,
  LOGOUT_DOCTOR,
  GET_AUTH_DOCTOR,
    AUTH_ERRORS,
  } from '../constants/ActionsTypes';
  
  const initialState = {
    token: localStorage.getItem('token'), //null
    doctor: null,
    isAuthDoctor: false,
    loading: true,
    msg: null,
  };
  
  const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case DOCTOR_LOADING:
        return {
          ...state,
          loading: true,
        };
      case REGISTER_DOCTOR:
      case LOGIN_DOCTOR:
        localStorage.setItem('token', payload.token);
        return {
          ...state,
          loading: false,
          isAuthDoctor: true,
          msg: payload.msg,
          ...payload,
         // doctor:payload.doctor
        };
      case GET_AUTH_DOCTOR:
        console.log(payload);
        return {
          ...state,
          loading: false,
          isAuthDoctor: true,
          ...payload,
        };
      case AUTH_ERRORS:
      case LOGOUT_DOCTOR:
        localStorage.removeItem('token');
        return {
          ...state,
          token: null,
          isAuthDoctor: false,
          doctor: null,
          loading: false,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;