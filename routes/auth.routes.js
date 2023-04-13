const { signUp, signIn } = require("../controller/auth")

module.exports=function(app){
    app.post('/api/user/signup',signUp)
    app.post('/api/user/signin',signIn)
}