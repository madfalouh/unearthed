import express from 'express'
import giftsRouter from './routes/gifts.js'
import cors from 'cors';

const app = express()

app.use(cors())

app.use('/public', express.static('./public'))
app.use('/scripts', express.static('./public/scripts'))

app.get('/', (req, res) => {
  res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">UnEarthed API</h1>')
})

app.use('/gifts', giftsRouter);   

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`)
});
app.use('/gifts', giftsRouter)