
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
  getMedicalFile:async (req,res)=>{
      try {
          const medicalFiles=await MedicalFile.find().populate("userId")
          res.json({medicalFiles})
      } catch (error) {
      }
  },
  getfileById:async (req,res)=>{
      try {
          const medicalFile= await MedicalFile.findById(req.params.id).populate("userId")
          res.json({msg:"medicaleFile loaded",medicalFile})
      } catch (error) {
          res.send("server error")
      }
  },
    editmedicalFile:async (req,res)=>{
      try {
        const editedmedicalFile=await  MedicalFile.findOneAndUpdate({_id:req.params.id},{$set:{...req.body}})
        res.json({msg:"medicalfile edited",editedmedicalFile})
    } catch (error) {
        res.send("server error")

    }
},
  deletemedicalFile:async (req,res)=>{
    
            try {
                const medicalFileDeleted=await MedicalFile.findOneAndDelete({_id:req.params.id})
                res.json({msg:"medicalfile deleted",medicalFileDeleted})
              } catch (error) {
                res.send("server error")
        
            }
        },
      
        getCurrentFile  : async (req, res) => {
          try {
              
              console.log('start');
              const medicalfile = await MedicalFile.findOne({userId: req.user._id  }).populate('userId');
              console.log('1',medicalfile);
      
              if(!medicalfile) {
                  return res.status(400).json({ msg: "No medicalfile for this user "});
              }
              
              
              res.json(medicalfile);
          } catch (err) {
              console.error(err.message);
              res.status(500).send("Server error ");
          }
      }
      
      
      
      
      
      
      
      
      };
