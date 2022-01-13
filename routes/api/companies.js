const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth1');
const {check, validationResult } = require('express-validator');


const Company = require('../../models/Company');
const RH = require('../../models/RH');

// @route GET api/profile/me
// @desc test route
//@access Public
router.get('/rh',auth, async(req, res) => {
    try{
        const company = await Company.findOne({rh: req.rh._id}).populate('rh');
        if(!company){
            return res.status(400).json({msg: 'There is no company for this rh'});
        }

        res.json(company);
        
    }catch(err){
       console.error(err.message);
       res.status(500).send('Server error') 
    }
});
//POST create or update company
router.post(
    '/',
    auth,
    check('title', 'Title is required').notEmpty(),
    check('location', 'Location is required').notEmpty(),
   
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const {
        title,
       bio,
       size,
       typeOfcorporation,
       location,
       about,
        youtube,
        twitter,
        instagram,
        linkedin,
        facebook,
      } = req.body;
      // build profile object
      const companyFields = {};
      companyFields.rh = req.rh._id;
      if(title) companyFields.title =title; 
      if(bio) companyFields.bio = bio; 
      if(size) companyFields.size = size; 
      if( typeOfcorporation) companyFields.typeOfcorporation = typeOfcorporation; 
      if(location) companyFields.location = location; 
      if(about) companyFields.about = about; 
      
      //Build social object
      companyFields.social = {}
      if(youtube) companyFields.social.youtube = youtube;
      if(twitter) companyFields.social.twitter = twitter;
      if(facebook) companyFields.social.facebook = facebook;
      if(linkedin) companyFields.social.linkedin = linkedin;
      if(instagram) companyFields.social.instagram = instagram; 
      try{
          company = await Company.findOneAndUpdate
          ({rh:req.rh._id}, 
            {$set: companyFields}, 
            {new:true, upsert: true, setDefaultsOnInsert: true });
          return res.json(company);
       
       

      }catch(err){
        console.error(err.message);
        res.status(500).send('Server error');
      }
  
    
});
// get all companies
router.get('/', async(req,res) => {
  try{
    const companies = await Company.find().populate('rh');
    res.json(companies)

  }catch (err) {
    console.error(err.message);
    res.status(500).send('server Error')
  }
});
/* // get  company by rh id
router.get('/:rh_id', async(req,res) => {
  try{
    const company = await Company.findOne({rh: req.params.rh_id}).populate('rh');
    if(!company)
      return res.status(400).json({ msg: 'There is no company for this rh'});
    
    res.json(company)

  }catch (err) {
    console.error(err.message);
    res.status(500).send('server Error')
  }
}); */

// @route    DELETE api/profile
// @desc     Delete profile, user & posts
// @access   Private
router.delete('/', auth, async (req, res) => {
  try {
    // Remove user posts
    // Remove profile
    // Remove user
   
      
    await  Company.findOneAndRemove({ rh: req.rh._id }),
    await  RH.findOneAndRemove({ _id: req.rh._id })
  ;

    res.json({ msg: 'Rh deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});




   


module.exports = router;