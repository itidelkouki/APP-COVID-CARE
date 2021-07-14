// require Json web token
const jwt = require('jsonwebtoken');

// Require the user Schema
const Doctor = require('../models/doctor');

const isAuthDoctor = async (req, res, next) => {
  try {
    const token = req.headers['x-auth'];

    // Check for token
    if (!token)
      return res.status(401).send({ msg: 'No Token, authorization denied' });

    // Verify Token
    const decoded = await jwt.verify(token, process.env.secretOrkey);

    // Add User from payload
    const doctor = await Doctor.findById(decoded.id);

    //Check for user
    if (!doctor) {
      return res.status(401).send({ msg: 'authorization denied' });
    }

    // Create user
    req.doctor = doctor;

    next();
  } catch (error) {
    return res.status(400).json({ msg: 'Token is not valid' });
  }
};

module.exports = isAuthDoctor;
