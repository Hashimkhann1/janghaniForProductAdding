import express from 'express'
import { addProduct } from './Controller/Controller.js'
import { getImage, uploadImage } from './Controller/ImageController.js'
import upload from '../Uploader/Uplod.js'


const router = express.Router()

router.post('/add/product' , addProduct)
router.post('/file/upload' , upload.single('file') , uploadImage)
router.get('/file/:filename' , getImage)

export default router