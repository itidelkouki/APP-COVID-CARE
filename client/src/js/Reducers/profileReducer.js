import {
    CREATE_PROFILE,
    GET_PROFILE,
    GET_PROFILE_BY_ID,
    GET_PROFILES,
    AUTH_ERRORS,
    LOGOUT_USER,
    CLEAR_PROFILE,
    //GET_AUTH_USER,
    USER_LOADING,EDIT_PROFILES
    
} from '../constants/ActionsTypes';

const initialState = {

    profiles: [],
    isAuthDoctor: false,
    loading: true,
    msg: null,
    profileById: null,
    profile:null,
    //error: {},
    token: localStorage.getItem('token'), //null
   // isAuthDoctor: false,
    //msg: null,
}



const profileReducer= (state = initialState, { type, payload }) => {
    switch (type) {
        case USER_LOADING:
        return {
          ...state,
          loading: true,
        };
    
        case CREATE_PROFILE:
        console.log(payload) ;
        return {
          ...state,
          loading: false,
          isAuthDoctor: true,
          msg: payload.msg,
          ...payload,
        };
       
        case GET_PROFILE:
        case EDIT_PROFILES:
                return {
                  ...state,
                  loading: false,
                  isAuthDoctor: true,
                  ...payload,
                  //profile: payload,
                  msg: payload.msg,
                };

        
            case GET_PROFILES:
                console.log(payload);
                return {
                    ...state,
                    profiles: payload.profiles,
                    isAuthDoctor:true,
                    loading: false
                };
       
        case CLEAR_PROFILE:
            return {
                ...state,
                loading: false,
                isAuthDoctor: true,
                msg: payload.msg,
                profile:null,
               // ...payload,

            };
            case LOGOUT_USER:
                localStorage.removeItem('token');
                return {
                  ...state,
                  token: null,
                  isAuthDoctor: false,
                  profile:null,
                  profileById: null,
                  loading: false,
                  msg:null
                };
                
                case AUTH_ERRORS:
                    localStorage.removeItem('token');
                      return {
                        ...state,
                        token: null,
                        isAuthDoctor: false,
                        user: null,
                        isLoading: false,
                      };

        default:
            return state;
    }
}

export default profileReducer;