import expressJwt from 'express-jwt'
function authorizer(){
    return expressJwt({
        secret:process.env.PRIVATE_JWT_KEY,
        userProperty:'auth'
    })
}

export const isAuth = (req, res, next) => {
    console.log(req.auth)
    let user = req.user&& req.auth && req.user._id == req.auth._id;
    if (!user) {
        return res.status(403).json({
            error: 'Access denied'
        });
    }
    next();
};

export const isAdmin = (req, res, next) => {
    if (req.user.role === 0) {
        return res.status(403).json({
            error: 'Admin resourse! Access denied'
        });
    }
    next();
};


export default authorizer