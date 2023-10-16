import express from 'express'
import carsRouter from './routes/cars.js'
import cors from 'cors';

const app = express()

app.use(cors())

app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">Cars</h1>')
})

app.use('/', carsRouter);   

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`)
});
app.use('/',carsRouter)
