import path from 'path'
import express  from 'express'
import dotenv from 'dotenv'
import bodypParser from 'body-parser'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'



const __dirname = path.resolve() // why __dirname is not working 
dotenv.config({path:path.resolve(__dirname , '.env')}) 
const port  = process.env.PORT

const app = express()

//third party middlwares 
app.use(bodypParser.json())
app.use(cookieParser())

app.use(morgan('dev'))



app.listen(port, ()=> console.log("listenig at" + port))