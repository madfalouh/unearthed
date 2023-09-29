import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

import giftDAta from '../data/gifts.js'
<<<<<<< HEAD
import { getGifts } from '../controller/gifts.js'
=======
>>>>>>> e8e4c971c39e7d179452efae9fbe8a1babe188f6

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


const router = express.Router()


<<<<<<< HEAD
router.get('/', getGifts);
=======
router.get('/', (req, res) => {
  console.log("Accessed /gifts route");

  res.status(200).json(giftDAta)
})

>>>>>>> e8e4c971c39e7d179452efae9fbe8a1babe188f6

router.get('/:giftId', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../../client/public/gift.html'))
})

export default router