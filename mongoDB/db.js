const mongoose = require('mongoose');
mongoose.set('strictQuery',true)
const connectDB = mongoose.connect('mongodb+srv://645021000882:S3PikXQ0DLCjIOML@cluster.wge2nvq.mongodb.net/Posts', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then((client) => {
    console.log('Connected to MongoDB Atlas');
    const db = client.connection.db;
  })
  .catch((error) => console.error('Error connecting to MongoDB Atlas:', error));

module.exports = connectDB;
