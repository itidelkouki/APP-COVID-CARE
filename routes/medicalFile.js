
const express=require("express")
const router=express.Router();
const medicalFileController=require("../controllers/medicalFileController")
const isAuth=require("../middlewares/isAuth")

// http://localhost:5000/api/medicalFile/newFile
// create a medicalFile
// 
router.post("/newFile",isAuth,medicalFileController.createFile)

// http://localhost:5000/api/medicalFile
// get  files
// 
router.get("/",isAuth,medicalFileController. getMedicalFile)

// http://localhost:5000/api/medicalFile/:id
// get a medicalFile by id
// 
router.get("/:id",isAuth,medicalFileController.getfileById)

//http://localhost:5000/api/medicalFile/deletemedicalFile/:idmedicalFile
// delete medicalFile
// 
router.delete("/deletemedicalFile/:id",isAuth,medicalFileController.deletemedicalFile)

// // http://localhost:5000/api/medicalFile/editMedicalfile/:id
// // edit medicalFile
// // 
router.put("/editMedicalfile/:id",isAuth,medicalFileController.editmedicalFile)


//  // http://localhost:5000/api/medicalFile/connectedPatient/me
// // get current medical file

router.get("/connectedPatient/me",isAuth,medicalFileController.getCurrentFile)


module.exports=router