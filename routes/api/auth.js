const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const bcrypt = require("bcryptjs")
const auth = require('../../middleware/auth');
const User = require('../../models/User');
const {check, validationResult } = require('express-validator');


// @route GET api/auth
// @desc test route
//@access Public
router.get('/',auth,async (req, res) => {
    try{
        const user = await User.findById(req.user._id).select('-password');
        res.json(user);

    } catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
    
});
// @route POST api/auth
// @desc authenticate user & get token
//@access Public
router.post('/',

    check('email','Please include a valid email').isEmail(),
    check('password', 'Password is required').exists()
,async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors : errors.array()});
    }
    const { email, password } = req.body;
    try {

    //see if user exist
        let user = await User.findOne({ email });
        if(!user){
            return res
            .status(400).json({errors : [{msg: 'invalid credentials'}] });
        }
       
    
       const isMatch = await bcrypt.compare(password,user.password);
        
       if(!isMatch){
           return res.status(400).json({errors: [{ msg: 'Invalid Credentials'}]});
       }
       const payload = {
           user: {
               _id:user._id
           }
       };
        
        jwt.sign(payload,"mysecret1",
        { expiresIn: '5 days' },
        (err, token) => {
            if (err) throw err;
            res.json({token});

        });
        //res.send('UserRegistred');

    } catch(err) {
        console.error(err.message);
        res.status(500).send('server error');

    }

    

   
})
module.exports = router;