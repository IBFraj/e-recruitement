const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken');
//const config = require('config')
const {check, validationResult } = require('express-validator');


const RH = require('../../models/RH');

// @route GET api/users
// @desc test route
//@access Public

router.post('/',
    check('name', 'Name is required').notEmpty(),
    check('email','Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({min: 6})
,async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors : errors.array()});
    }
    const {name, email, password } = req.body;
    try {

    //see if rh exist
        let rh = await RH.findOne({ email });
        if(rh){return res
            .status(400).json({errors : [{msg: 'rhalready exists'}] });
        }
        const avatar = 
            gravatar.url(email, {
              s: '200',
              r: 'pg',
              d: 'mm'
            });
            
          
    
        rh = new RH({
            name,
            email,
            avatar,
            password
        });
        const salt = await bcrypt.genSalt(10);
        rh.password = await bcrypt.hash(password, salt);
      
         await rh.save();
       const payload = {
           rh: {
               _id:rh._id
           }
       };
      
        jwt.sign(payload,"mysecret2",
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