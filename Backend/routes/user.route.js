const express= require('express');
const router = express.Router();
const {body}= require("express-validator");
const userController= require('../controllers/user.controller');


// here we are settiing yup the route as well as validating the data which we gonna receive from user
router.post('/register',
    [
        body('email').isEmail().withMessage('Invalid Email'),
        body('fullname.firstname').isLength({min: 3}).withMessage('First Name must be atleast 3 characters long'),
        body('password').isLength({min:6}).withMessage('Password must be atleast 6 characters long')
    ],

    userController.registerUser
)

module.exports= router;