const mongoose = require('mongoose');
const env = require('dotenv');
env.config({ path: './config.env' });

const app = require('./app');
const DB = process.env.DATABASE;
mongoose
  .connect(DB, {})
  .then((res) => {
    console.log('Database ishladi');
  })
  .catch((err) => console.log(err));

//===========================================mongoose scheme=======================




const PORT = process.env.PORT || 8000;
app.listen(PORT, env.url);
