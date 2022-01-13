const mongoose = require('mongoose');

const ApplicantSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    job: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'job'
    },
   

})
module.exports =  Applicant = mongoose.model(' applicant', ApplicantSchema)