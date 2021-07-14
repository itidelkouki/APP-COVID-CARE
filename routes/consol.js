/*
const MedicalFile = require("../models/MedicalFile");
const User=require("../models/User")
module.exports = {
    createFile: async (req, res) => {
      const { weight, medicalHistory,  allergiesName,bloodType} = req.body;
    try {
      const newFile = new MedicalFile({    
        userId: req.user._id,
        ...req.body,
      });
      const medicalfile = await newFile.save();
      // console.log("1",medicalfile)
      const user = await User.findOne({ _id: req.user._id });
      // console.log("2",user)
      user.MedicalFiles.push (medicalfile._id);
      // console.log("3",user)
      await user.save();
    // console.log("4",user)
      res.json({ msg: "medicalFile created", medicalfile, user });
    } catch (error) {
      res.status(500).json(error.message);
    }
  },
10:12
w hethilel payload
10:12
import { POST_MEDICALFILES,AUTH_ERRORS,USER_LOADING,GET_MEDICALFILES} from "../constants/fileactionTypes";
const initialState = {
    isAuth: true,
    isLoading: true,
    msg: null,
  };
  const medicalFileReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case USER_LOADING:
        return {
          ...state,
          isLoading: true,
        };
  case POST_MEDICALFILES:
    console.log(payload);
        return {
            ...state,
            isLoading: false,
            isAuth: true,
            msg: payload.msg,//({ msg: "medicalFile created", medicalfile, user });
            ...payload,
          };
10:14
export const getfiles = () => async (dispatch) => {
    dispatch(userLoading());
    try {
      //headers
      const config = {
        headers: {
          'x-auth': localStorage.getItem('token'),
        },
      };
      const res = await axios.get('http://localhost:5000/api/medicalFile/', config);
      dispatch({
        type: GET_MEDICALFILES,
        payload: res.data, // {user: req.user}
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: AUTH_ERRORS,
      });
    }
  };
//***************
//Set the user loading
const userLoading = () => (dispatch) => {
    dispatch({
      type: USER_LOADING,
    });
  };
// Post MedicalFile
export const createFile = (newFile) => async (dispatch) => {
    dispatch(userLoading());
    try {
      const config = {
        headers: {
          'x-auth': localStorage.getItem('token'),
        }
    }
      const res = await axios.post('/api/medicalFile/newFile', newFile,config);
      console.log("res1",res)
      dispatch({
        type: POST_MEDICALFILES,
        payload: res.data,//{ msg: "medicalFile created", medicalfile, user });
      });
    } catch (error) {
      // console.log(error);
      // // BA3ED
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

*/

//SAIDA
/*const deletedeal = (e) => {
    e.preventDefault();
    dispatch(deleteDeal(deal._id));
    history.push("/");
  };
New
9:34
export const deleteDeal = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/deals/${id}`);
    dispatch(listDeals());
    console.log("le deal est supprimé");
  } catch (error) {
    dispatch({ type: GET_DEALS_FAILED, payload: error });
    console.log(error);
  }
};
9:34
const deal = dealList.find((deal) => deal._id === match.params.id);
9:36
<button
                    type="submit"
                    name="Submit"
                    onClick={(e) => deletedeal(e)}
                    className="exclusive"
                  >
                    <span>Supprimer le Deal</span>
                  </button>*/