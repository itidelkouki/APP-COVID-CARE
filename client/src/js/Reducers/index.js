import { combineReducers } from 'redux';
import authReducer from './authReducer';
import profileReducer from './profileReducer';
import authPatientReducer from './authPatientReducer';
import MedicalFileReducer from './medicalFileReducer';
import appointmentReducer from './appointmentReducer';

export default combineReducers({ authReducer,profileReducer,authPatientReducer,appointmentReducer,MedicalFileReducer,
 });
