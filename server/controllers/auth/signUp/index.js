import User from '../../../../database/models/users/index.js'

function signUp(req, res){
    const user  = new User(req.body)
    user.save((err, user)=>{
        if(err){
            return res.status(400).json({
                err
            })
        }
        res.json({
            user
        })
    })
}

export default signUp