const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    rh: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'rh'
    },
    titleCompany: {
        type: String,
      
    },
    titleJob: {
      type: String,
    
  },
  Contrat: {
    type: String,
  
},
    typeOfcorporation: {
      type: String,
     
    },
    location: {
      type: String,
   
    },
    size: {
      type: String
    },

    jobType: {
        type: String,
        
      },
      salary: {
        type: String
      },
      experienceLevel: {
        type: String
      },
     careerLevel: {
        type: String,
       
      },
      softSkills: {
        type: [String],
        
      },
      technicalSkills: {
        type: [String],
        
      },
   
      description: {
        type: String
      },
      yourRole: {
        type: String
      },
      doing: {
        type: String
      },
     
      
      date: {
        type: Date,
        default: Date.now
      }

})
module.exports = Job = mongoose.model('job', JobSchema)
