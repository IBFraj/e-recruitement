const mongodbconnect = require("./db");
const express = require('express');
const app = express();
app.use(express.json({extended: false}));
var bodyParser = require('body-parser');
app.get('/', (req, res) => res.send('API Running'));
const PORT = process.env.PORT || 5000;
//Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/rh', require('./routes/api/rhs'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/auth1', require('./routes/api/auth1'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/job', require('./routes/api/jobs'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/company', require('./routes/api/companies'));
app.use('/api/apply', require('./routes/api/applicants'));
app.use('/api/save', require('./routes/api/savedj'));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
const mongodbs = async () => {
    try {
      const connection = await mongodbconnect();
  
      if (connection) {
        console.log("db connect  ..");
        app.listen(PORT, () => console.log(`server started on port ${PORT}`));
      }
    } catch (err) {
      console.error(err);
      throw err;
    }
  };
  
  mongodbs();