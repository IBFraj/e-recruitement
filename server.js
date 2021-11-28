const mongodbconnect = require("./db");
const express = require('express');
const app = express();
app.use(express.json({extended: false}));
app.get('/', (req, res) => res.send('API Running'));
const PORT = process.env.PORT || 5000;
//Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/profile', require('./routes/api/profile'));
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