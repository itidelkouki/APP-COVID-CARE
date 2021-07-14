import axios from "axios"
import { POST_APPOINTMENTS,AUTH_ERRORS,USER_LOADING, GET_APPOINTMENTS,DELETE_APPOINTMENT} from '../constants/ActionsTypes';
//get Appointments
export const getAppointment = () => async (dispatch) => {
    dispatch(userLoading());
    try {
      const config = {
        headers: {
          'x-auth': localStorage.getItem('token'),
        }
    }
      const res = await axios.get('http://localhost:5000/api/appointment/', config);
      dispatch({
        type: GET_APPOINTMENTS,
        payload: res.data, // {user: req.user}
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: AUTH_ERRORS,
      });
    }
  };
  ////Set the user loading
const userLoading = () => (dispatch) => {
    dispatch({
      type: USER_LOADING,
    });
  };
// Post Appointment
export const createAppointment = (newAppointment) => async (dispatch) => {
    dispatch(userLoading());
    try {
      const config = {
        headers: {
          'x-auth': localStorage.getItem('token'),
        }
    }
      const res = await axios.post('http://localhost:5000/api/appointment/newAppointment', newAppointment,config);
      console.log("res1",res)
      dispatch({
        type: POST_APPOINTMENTS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: AUTH_ERRORS,
      });
    }};
  //Delete  Appointment
  export const deleteAppointment =(appointmentId) => async (dispatch) => {
    // console.log(idAppointment);
    dispatch(userLoading());
    try {
      const config = {
        headers: {
          'x-auth': localStorage.getItem('token'),
        }
    }
      const res = await axios.delete("http://localhost:5000/api/appointment/deleteAppointment"+appointmentId ,config);
      console.log("resOne",res)
      // console.log("idDelete",appointmentId)
      dispatch({
        type: DELETE_APPOINTMENT,
        payload: res.data, 
      });
      // dispatch(getMedicalFile());
    } catch (error) {
      console.log(error);
      dispatch({
        type: AUTH_ERRORS,
      });
    }
  };
















