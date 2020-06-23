import express from 'express'
import signUp from  '../../../controllers/auth/signUp/index.js'
const router  = express.Router()

router.post('/signUp',signUp)

export default router