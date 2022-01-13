const express = require('express');
const router = express.Router();

const authU = require('../../middleware/auth');
const auth = require('../../middleware/auth1');

const Job = require('../../models/Job');
const Applicant = require('../../models/Applicant');

//POST create or update post
router.post(
    '/:id',
    authU,
    async (req, res) => {
  
      // build profile object
      const applicantFields = {};
      applicantFields.user = req.user._id;
      applicantFields.job = await Job.findById(req.params.id)

      try{

          applicant = await Applicant.findOneAndUpdate
          ({user:req.user._id}, 
            {$set: applicantFields}, 
            {new:true, upsert: true, setDefaultsOnInsert: true });
           
          return res.json(applicant);
  
      }catch(err){
        console.error(err.message);
        res.status(500).send('Server error');
      }
  
});
router.get('/',auth, async(req,res) => {
    try{
      const applicant = await Applicant.find().populate('user', ['name']) .populate('job', ['careerLevel']);
      if(!applicant)
        return res.status(400).json({ msg: 'There is applicant for this job'});
      
      res.json(applicant)
  
    }catch (err) {
      console.error(err.message);
      res.status(500).send('server Error')
    }
  });


module.exports = router;