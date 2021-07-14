const Appointment = require("../models/Appointment");
const User=require("../models/User")
module.exports = {
    createAppointment: async (req, res) => {
    //   const { weight, medicalHistory,  allergiesName,bloodType} = req.body;
    try {
      const newAppointment = new Appointment({    
        userId: req.user._id,
        ...req.body,
      });
      const appointment= await newAppointment.save();
      // console.log("1",appointment)
      const user = await User.findOne({ _id: req.user._id });
      // console.log("2",user)
      user.Appointments.push (appointment._id);
      // console.log("3",user)
      await user.save();
    // console.log("4",user)
      res.json({ msg: "appointment created", appointment, user });
    } catch (error) {
      res.status(500).json(error.message);
    }
  },
  getAppointment:async (req,res)=>{
    try {
        const appointments=await Appointment.find().populate("userId")
        res.json({appointments})
    } catch (error) {
    }
},
deleteAppointment:async (req,res)=>{
            try {
                const appointmentDeleted=await Appointment.findOneAndDelete({_id:req.params.id})
                res.json({msg:"appointment deleted",appointmentDeleted})
              } catch (error) {
                res.send("server error")
            }
        }};
