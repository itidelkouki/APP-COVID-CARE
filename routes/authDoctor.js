
// Require router from express
const router = require('express').Router();

const auth=require("../controllers/authdoctorController")
// Require the isAuth middleware
const isAuthDoctor = require('../middlewares/isAuthDoctor');

// require validators
const {
  validator,
  registerRules,
  loginRules,
} = require('../middlewares/validator');



//@route POST api/auth/register
//@desc Register new doctor
//@access Public
router.post('/register', registerRules(), validator,auth.register);


//@route POST api/auth/login
//@desc Login doctor
//@access Public
router.post('/login', loginRules(), validator, auth.login);


//@route GET api/auth/doctor
//@desc Get authentified doctor
//@access Private
router.get('/doctor', isAuthDoctor, auth.getCurrentUser );


module.exports = router;
