const express= require('express')
const connectDB = require('./mongoDB/db')
const bodyParser =require('body-parser')
const app = express();
const PORT= 3000;
const home = require('./Routes/home')
const Post = require('./Routes/Post')
const login = require('./Routes/login')
const register = require('./Routes/register')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use('/home',home)
app.use('/createPost',Post)
app.use('/register',register);
app.use('/login',login);
app.set('view engine','ejs')
app.listen(PORT,()=>{
    console.log(`App Server is running at port ${PORT} `)

})