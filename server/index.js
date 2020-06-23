import  express  from 'express'
import dotenv from 'dotenv'
dotenv.config({path:"../.env"})

const app = express()

const port  = process.env.PORT

app.get('/', (req, res)=>res.send('hello'))
app.post('/auth',(req, res)=>{res.send('bonjour')})
app.get('/submit',(req, res)=>{res.send('lol')})
app.get('/fetch',(req,res)=>{res.send('ee ehe e he heh e')})


app.listen(port, ()=> console.log("listenig at" + port))