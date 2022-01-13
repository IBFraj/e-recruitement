const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
    rh: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'rh'
    },
    title: {
        type: String,
        required: true
      },
      bio: {
        type: String
      },
     size: {
        type: String
      },
      typeOfcorporation: {
        type: String,
       
      },
     location: {
        type: String,
        required: true
      },
     since: {
        type: String
      },
      about: {
        type: String,
   
      },
     
      social: {
        youtube: {
          type: String
        },
        twitter: {
          type: String
        },
        facebook: {
          type: String
        },
        linkedin: {
          type: String
        },
        instagram: {
          type: String
        }
      },
      date: {
        type: Date,
        default: Date.now
      }

})
module.exports = Company = mongoose.model('company', CompanySchema)
