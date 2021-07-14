// require mongoose
const mongoose = require('mongoose');

// Require Schema from mongoose
const Schema = mongoose.Schema;

// Create the MedicalFile schema
const MedicalFileSchema=new mongoose.Schema({
  userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User'
    }, 
 weight: {
    type: Number,
    min: 1,
    max: 442,
  },
  medicalHistory: {
  
        type: String, // Date
      },
      // condition: {
      //   type: String,
      //   minlength: 1,
      //   maxlength: 255,
      //   trim: true,
      // },
      // notes: {
      //   type: String,
      //   minlength: 1,
      //   maxlength: 1000,
      //   trim: true,
      // },
  
  
  allergiesName:{
        type: String,
        minlength: 1,
        maxlength: 255,
        trim: true,
      },
      bloodType: {
        type: String,
        enum: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
      },

  
  // medicationName:{
      //   type: String,
      //   minlength: 1,
      //   maxlength: 255,
      //   trim: true,
      // },
      // medicationDosage: {
      //   type: Number,
      //   min: 1,
      //   max: 10000,
      // },
      // manufacturer: {
      //   type: String,
      //   minlength: 1,
      //   maxlength: 255,
      //   trim: true,
      // },
  
 
});

module.exports=mongoose.model("MedicalFile",MedicalFileSchema)