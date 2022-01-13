const mongoose = require('mongoose');

const SavedJSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    job: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'job'
    },
   

})
module.exports =  SavedJ = mongoose.model(' savedJ', SavedJSchema)