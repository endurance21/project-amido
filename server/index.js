import path from 'path'
import  express  from 'express'
import dotenv from 'dotenv'

const __dirname = path.resolve() // why __dirname is not working 
dotenv.config({path:path.resolve(__dirname , '.env')}) 
const port  = process.env.PORT

const app = express()





app.listen(port, ()=> console.log("listenig at" + port))