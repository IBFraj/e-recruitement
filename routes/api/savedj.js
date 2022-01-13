const express = require('express');
const router = express.Router();

const authU = require('../../middleware/auth');
const auth = require('../../middleware/auth1');
const Company = require('../../models/Company');

const Job = require('../../models/Job');
const SavedJ = require('../../models/SavedJ');


router.post(
    '/:id',
    authU,
    async (req, res) => {
  

      const applicantFields = {};
      applicantFields.user = req.user._id;
      applicantFields.job = await Job.findById(req.params.id)

      try{

          applicant = await SavedJ.findOneAndUpdate
          ({user:req.user._id}, 
            {$set: applicantFields}, 
            {new:true, upsert: true, setDefaultsOnInsert: true });
           
          return res.json(applicant);
  
      }catch(err){
        console.error(err.message);
        res.status(500).send('Server error');
      }
  
});
router.get('/',authU, async(req,res) => {
    try{
      const applicant = await Applicant.find({user:req.user._id}).populate('user') .populate('job', ['careerLevel','location','jobType','company']);
      if(!applicant)
        return res.status(400).json({ msg: 'There is applicant for this job'});
     
      res.json(applicant)
  
    }catch (err) {
      console.error(err.message);
      res.status(500).send('server Error')
    }
  });


module.exports = router;