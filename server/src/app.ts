import express, {Express} from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import * as dotenv from 'dotenv'

dotenv.config()
const app = express()
const Port = process.env.PORT ?? 3500


app.listen(Port, () => {
  console.log(`Server running on ${Port}`)
})