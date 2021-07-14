const Doctor=require("../models/doctor")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
module.exports={
    register:async(req,res)=>{
        const { name, lastName, email, password } = req.body;
        try {
          // Simple Validation
          /*  if (!name || !lastName || !email || !password) {
            return res.status(400).json({ msg: 'Please enter all fields!' });
          } */
      
          // Check for existing doctor
          let doctor = await Doctor.findOne({ email });
      
          if (doctor) {
            return res.status(400).json({ msg: 'Doctor already exists' });
          }
      
          // Create new doctor
          doctor = new Doctor({ name, lastName, email, password});
      
          // Create Salt & hash
          const salt = 10;
          const hashedPassword = await bcrypt.hash(password, salt);
      
          // Replace doctor password with hashed password
          doctor.password = hashedPassword;
      
          // Save the doctor
          await doctor.save();
      
          // sign doctor
          const payload = {
            id: doctor._id,
          };
      
          // Generate token
          const token = await jwt.sign(payload, process.env.secretOrKey, {
            expiresIn: '7 days',
          });
      
          res.status(200).send({ msg: 'Doctor registred with success', doctor, token });
        } catch (error) {
          res.status(500).send({ msg: 'Server Error' });
        }
      },

    login:async(req,res)=>{
        const { email, password } = req.body;
  try {
    //simple Validation
    /* if (!email || !password) {
      return res.status(400).send({ msg: 'Please enter all fields' });
    } */

    // Check for existing doctor
    let doctor = await Doctor.findOne({ email });

    if (!doctor) {
      return res.status(400).send({ msg: 'Bad Credentials! email' });
    }

    //Check password
    const isMatch = await bcrypt.compare(password, doctor.password);

    if (!isMatch) {
      return res.status(400).send({ msg: 'Bad Credentials! password' });
    }

    // sing doctor
    const payload = {
      id: doctor._id,
    };

    // Generate token
    const token = await jwt.sign(payload, process.env.secretOrKey, {
      expiresIn: '7 days',
    });

    res.send({ msg: 'Logged in with success', doctor, token });
  } catch (error) {
    res.status(500).send({ msg: 'Server Error' });
  }
},
    getCurrentUser:(req,res)=>{
        res.status(200).send({ doctor: req.doctor })
        
    }

}