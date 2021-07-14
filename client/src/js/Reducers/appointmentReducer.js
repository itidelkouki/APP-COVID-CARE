import { POST_APPOINTMENTS,
    USER_LOADING,
    GET_APPOINTMENTS,
    DELETE_APPOINTMENT,
    AUTH_ERRORS} from '../constants/ActionsTypes';
   const initialState = {
       token: localStorage.getItem('token'),
         isAuth: true,
         isLoading: true,
         msg: null,
       };
       const appointmentReducer = (state = initialState, { type, payload }) => {
         switch (type) {
           case USER_LOADING:
             return {
               ...state,
               isLoading: true,
             };
       case POST_APPOINTMENTS:
         //console.log(payload);
             return {
                 ...state,
                 isLoading: false,
                 //isAuth: true,
                 msg: payload.msg,//({ msg: "appointment created", appointment, user });
                 ...payload,
               };
               case GET_APPOINTMENTS:
                 // localStorage.getItem('token');
                 return {
                   ...state,
                   isLoading: false,
                  // isAuth: true,
                   ...payload,
                 };
                 case  DELETE_APPOINTMENT:
               //  localStorage.getItem('token');
                 return{
                   ...state,
                   isLoading: false,
                   isAuth: true,
                   msg: payload.msg,
                   // ...payload,
                 }
                 case AUTH_ERRORS:
                   // localStorage.removeItem('token');
                     return {
                       ...state,
                       token: null,
                       isAuth: false,
                       user: null,
                       isLoading: false,
                     };
               default:
                 return state;
             }
             }
     export default  appointmentReducer;
   
   
  
   
   
   
   
   
   
   
   