const express=require("express")
const router=express.Router();
const appointmentController=require("../../controllers/appointmentController")
const isAuth=require("../../middlewares/isAuth")
// http://localhost:5000/api/appointment/newAppointment
// create an Appointment
// 
router.post("/newAppointment",isAuth,appointmentController.createAppointment)
// http://localhost:5000/api/appointment
// get appointments
// 
router.get("/",isAuth,appointmentController.getAppointment)
// http://localhost:5000/api/appointment:id
// get an appointment by id
// // 
// router.get("/:id",isAuth,appointmentController.getfileById)
//http://localhost:5000/api/appointment/deleteAppointment/:idAppointment
// delete an appointment
// 
router.delete("/deleteAppointment/:id",isAuth,appointmentController.deleteAppointment)
// // http://localhost:5000/api/medicalFile/editMedicalfile/:id
// // edit medicalFile
// // 
// router.put("/editMedicalfile/:id",isAuth,appointmentController.editmedicalFile)
module.exports=router