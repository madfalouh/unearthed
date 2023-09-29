import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

import giftDAta from '../data/gifts.js'
import { getGifts } from '../controller/gifts.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


const router = express.Router()


router.get('/', getGifts);

router.get('/:giftId', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../../client/public/gift.html'))
})

export default router