const mongoose = require('mongoose');
mongoose.set('strictQuery',true)
const useSchema = new mongoose.Schema({
  Username: {
    type: String,
  },
  Password: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
});

const Users = mongoose.model('users', useSchema); //สร้าง collectrionชื่อ users

module.exports = Users;
