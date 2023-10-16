import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

import { getCars, getCarById, addCar, updateCarById, deleteCarById  } from '../controller/cars.js'



const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


const router = express.Router()


router.get('/cars', getCars);
router.get('/cars/:carId', getCarById);
router.post('/cars', addCar);
router.patch('/cars/:carId', updateCarById);
router.delete('/cars/:carId', deleteCarById);


export default router