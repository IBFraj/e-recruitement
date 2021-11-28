const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const {check, validationResult } = require('express-validator');


const Profile = require('../../models/Profile');
const User = require('../../models/User');

// @route GET api/profile/me
// @desc test route
//@access Public
router.get('/me',auth, async(req, res) => {
    try{
        const profile = await Profile.findOne({user: req.user._id}).populate('user',['name','avatar']);
        if(!profile){
            return res.status(400).json({msg: 'There is no profile for this user'});
        }

        res.json(profile);
        
    }catch(err){
       console.error(err.message);
       res.status(500).send('Server error') 
    }
});
//POST create or update user profile
router.post(
    '/',
    auth,
    check('status', 'Status is required').notEmpty(),
    check('skills', 'Skills is required').notEmpty(),
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const {
        company,
        website,
        location,
        bio,
        status,
        githubusername,
        skills,
        youtube,
        twitter,
        instagram,
        linkedin,
        facebook,
      } = req.body;
      // build profile object
      const profileFields = {};
      profileFields.user = req.user._id;
      if(company) profileFields.company = company; 
      if(website) profileFields.website = website; 
      if(location) profileFields.location = location; 
      if(bio) profileFields.bio = bio; 
      if(status) profileFields.status = status; 
      if(githubusername) profileFields.githubusername = githubusername; 
      if(skills) {profileFields.skills = skills.split(',').map(skill => skill.trim()); }
      console.log(skills);
      //Build social object
      profileFields.social = {}
      if(youtube) profileFields.social.youtube = youtube;
      if(twitter) profileFields.social.twitter = twitter;
      if(facebook) profileFields.social.facebook = facebook;
      if(linkedin) profileFields.social.linkedin = linkedin;
      if(instagram) profileFields.social.instagram = instagram; 
      try{
          profile = await Profile.findOneAndUpdate
          ({user:req.user._id}, 
            {$set: profileFields}, 
            {new:true, upsert: true, setDefaultsOnInsert: true });
          return res.json(profile);
       
       

      }catch(err){
        console.error(err.message);
        res.status(500).send('Server error');
      }
  
    
});
// get all profiles
router.get('/', async(req,res) => {
  try{
    const profiles = await Profile.find().populate('user', ['name', 'avatar']);
    res.json(profiles)

  }catch (err) {
    console.error(err.message);
    res.status(500).send('server Error')
  }
});
// get  profile by user id
router.get('/user/:user_id', async(req,res) => {
  try{
    const profile = await Profile.findOne({user: req.params.user_id}).populate('user', ['name', 'avatar']);
    if(!profile)
      return res.status(400).json({ msg: 'There is no profile for this user'});
    
    res.json(profile)

  }catch (err) {
    console.error(err.message);
    res.status(500).send('server Error')
  }
});

// @route    DELETE api/profile
// @desc     Delete profile, user & posts
// @access   Private
router.delete('/', auth, async (req, res) => {
  try {
    // Remove user posts
    // Remove profile
    // Remove user
   
      
    await  Profile.findOneAndRemove({ user: req.user._id }),
    await  User.findOneAndRemove({ _id: req.user._id })
  ;

    res.json({ msg: 'User deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
// @route    PUT api/profile/experience
// @desc     Add profile experience
// @access   Private
router.put(
  '/experience',
  auth,
  check('title', 'Title is required').notEmpty(),
  check('company', 'Company is required').notEmpty(),
  check('from', 'From date is required and needs to be from the past')
    .notEmpty()
    .custom((value, { req }) => (req.body.to ? value < req.body.to : true)),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {
      title,
      company,
      location,
      from,
      to,
      current,
      description
    } = req.body;
    const newExp = {
      title,
      company,
      location,
      from,
      to,
      current,
      description
    }

    try {
      const profile = await Profile.findOne({ user: req.user._id });
// push == unshift
      profile.experience.unshift(newExp);

      await profile.save();

      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);
//delete exp by id
router.delete('/experience/:exp_id', auth, async(req, res) => {
  try {
    const profile = await Profile.findOne({user: req.user._id});
    //get remove index
    const removeIndex = profile.experience.map(item => item._id)
    .indexOf(req.params.exp_id);
    profile.experience.splice(removeIndex, 1);
    await profile.save();
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
// @route    PUT api/profile/education
// @desc     Add profile education
// @access   Private
router.put(
  '/education',
  auth,
  check('school', 'School is required').notEmpty(),
  check('degree', 'Degree is required').notEmpty(),
  check('fieldofstudy', 'Field of study is required').notEmpty(),
  check('from', 'From date is required and needs to be from the past')
    .notEmpty()
    .custom((value, { req }) => (req.body.to ? value < req.body.to : true)),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {
      school,
      degree,
      fieldofstudy,
      from,
      to,
      current,
      description
    } = req.body;
    const newExp = {
      school,
      degree,
      fieldofstudy,
      from,
      to,
      current,
      description
    }

    try {
      const profile = await Profile.findOne({ user: req.user._id });
// push == unshift
      profile.education.unshift(newExp);

      await profile.save();

      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);
//delete edu by id
router.delete('/education/:edu_id', auth, async(req, res) => {
  try {
    const profile = await Profile.findOne({user: req.user._id});
    //get remove index
    const removeIndex = profile.education.map(item => item._id)
    .indexOf(req.params.edu_id);
    profile.education.splice(removeIndex, 1);
    await profile.save();
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;