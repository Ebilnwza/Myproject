const  express  = require('express');
const router = express.Router();
const db = require('../mongoDB/Postsmodel');
const user = require('../mongoDB/usermodel')
router.get('/:id', async(req,res)=>{
    const id = req.params.id;
    const data = await user.findById(id);
    res.render('createPost',{id,data})
})
router.post('/', async (req, res) => {
    const {author,title, content } = req.body;
    const id = req.body.id;
    try {
      const newdb = new db({
        idauthor :req.body.idauthor,
        author,
        title,
        content,
      });
      const savedPost = await newdb.save();
       res.redirect(`home/${id}`);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });




module.exports =router;