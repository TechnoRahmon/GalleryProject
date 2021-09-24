const Router = require('express').Router();
const imageController = require('./../controller/imageController')
const { upload } = require('./../middleware/uploadFile')



Router
    .route('/')
        .get(imageController.home)

Router
    .route('/send')
        .post( upload.single('image'),  imageController.new)

        
module.exports = Router;