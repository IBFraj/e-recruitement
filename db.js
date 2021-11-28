const mongoose = require("mongoose");
const mongodbconnect = async () => {
  try {
    const url = "mongodb://localhost:27017/devconnector";
  
    return await mongoose.connect(url, {
      useNewUrlParser: true,
    
      useUnifiedTopology: true,
    });
  } catch (err) {
    console.error(err);
    throw err;
  }
};
module.exports = mongodbconnect;
