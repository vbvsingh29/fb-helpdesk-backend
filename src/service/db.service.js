const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config()
mongoose.connect(process.env.DB_URI, {

})
.then((data) => console.log('MongoDB connected',data.connection._connectionString))
.catch(err => console.log(err));

module.exports = mongoose;
