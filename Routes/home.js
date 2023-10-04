const  express  = require('express');
const router = express.Router();
const db = require('../mongoDB/Postsmodel');
const user = require('../mongoDB/usermodel');
router.get('/:id', async(req,res)=>{
    const id = req.params.id;
    const data = await db.find();
    const objname = await user.findById(id);
    const name = objname.Username
     res.render('home',{data,id,name})
})
router.get('/', async(req,res)=>{
    const data = await db.find()
     res.render('home',{data})
})


module.exports =router;