import express from 'express'
import giveUser from '../../controllers/users/index.js'
import authorizer from '../../helpers/authorizers/index.js'
const router  = express.Router()

router.get('/user/:id',authorizer(),function(req, res){
    res.json(
        {
            user:req.user
        }
    )
})
router.param('id',giveUser)

export default router