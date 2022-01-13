const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth1');
const authU = require('../../middleware/auth');
const {check, validationResult } = require('express-validator');
const checkObjectId = require('../../middleware/checkObjectId');



const Job = require('../../models/Job');
const RH = require('../../models/RH');



//POST create or update post
router.post(
    '/',
    auth,
   
    async (req, res) => {
     
      
      // build profile object
      
      
      try{
       
        
        const newJob = new Job({
          rh: req.rh._id,
        
          titleCompany : req.body.titleCompany,
          titleJob  : req.body.titleJob,
         contrat : req.body.contrat,
        typeOfcorporation : req.body.typeOfcorporation,
        location : req.body.location,
         size: req.body.size,
        jobType: req.body.jobType,
        salary: req.body.salary,
        experienceLevel: req.body.experienceLevel,
        careerLevel: req.body.careerLevel,
        softSkills: req.body. softSkills,
        technicalSkills: req.body.technicalSkills,
        description: req.body.description,
        yourRole: req.body. yourRole,
        doing: req.body. doing,
        });
  
        const job = await newJob.save();
  
        res.json(job);
       

      }catch(err){
        console.error(err.message);
        res.status(500).send('Server error');
      }
  
    
});
// get all jobs
router.get('/', async(req,res) => {
  try{
    const jobs = await Job.find().populate('rh') ;
    res.json(jobs)

  }catch (err) {
    console.error(err.message);
    res.status(500).send('server Error')
  }
});
router.get('/:id',  checkObjectId('id'), async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);

    if (!job) {
      return res.status(404).json({ msg: 'job not found' });
    }

    res.json(job);
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server Error');
  }
});
// get  jobs by rh  id
router.get('/rh', auth,async(req,res) => {
  try{
    const jobs = await Job.find({rh: req.rh._id}).populate('rh') .populate('company', ['title','typeOfcorporation','size','location']);
    if(!jobs)
      return res.status(400).json({ msg: 'There is no jobs for this company'});
    
    res.json(jobs)

  }catch (err) {
    console.error(err.message);
    res.status(500).send('server Error')
  }
});

// @route    DELETE api/profile
// @desc     Delete profile, user & posts
// @access   Private
/* router.delete('/', auth, async (req, res) => {
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
}); */


/* //delete exp by id
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
}); */


module.exports = router;