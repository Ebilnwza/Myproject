const  express  = require('express');
const router = express.Router();
const db =require('../mongoDB/usermodel')
router.get('/',(req,res)=>{
    res.render('register')
})
router.post('/', async (req, res) => {
    const { Username, Password, confirmPassword, email, phone } = req.body;

    try {
      const newdb = new db({
        Username
        ,Password
        ,email
        ,phone
      })
  
      const savedUser = await newdb.save();
       res.redirect('login');
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
module.exports = router;