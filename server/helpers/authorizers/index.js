import expressJwt from 'express-jwt'
console.log(process.env.PRIVATE_JWT_KEY)
function authorizer(){
    return expressJwt({
        secret:process.env.PRIVATE_JWT_KEY,
        userProperty:'auth'
    })
}

export default authorizer