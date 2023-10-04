const  express  = require('express');
const router = express.Router();
const db = require('../mongoDB/Postsmodel');
const user = require('../mongoDB/usermodel');
router.get('/', async(req,res)=>{
    const data = await db.find()
     res.render('home',{data})
})


module.exports =router;