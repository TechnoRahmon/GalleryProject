const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const path = require('path')
const bodyParser = require('body-parser')

const app = express();
const PORT = 5000


const imagesRoutes = require('./Routes/imagesRoute')

app.set('view engine' , 'pug')

app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.json());

app.use(express.static(path.join(__dirname , 'public')))
app.use(morgan('dev'))



mongoose.connect('mongodb://localhost:27017/galleryDB' , ()=>{
        console.log('MongoDB connected . . .');
})


app.use('/' , imagesRoutes)

app.listen(PORT , ()=>{ console.log('Server is running on port  :'+PORT);})







