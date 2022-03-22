import express from 'express'
import { addProduct } from './Controller/Controller.js'


const router = express.Router()

router.post('/add/product' , addProduct)


export default router