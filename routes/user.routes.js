const {getAllUser, getUserbyId, deleteUser, createAdmin, getAllAdmin, getAdminbyId, updateAdmin, updateUser, createUser}=require('../controller/user.controller')
const { verifyToken, isAdmin } = require('../middleware/auth')
module.exports=function(app){
   
    app.post('/api/admin',[verifyToken,isAdmin],createAdmin)
    app.get('/api/admin',[verifyToken,isAdmin],getAllAdmin)
    app.get('/api/admin/:id',[verifyToken,isAdmin],getAdminbyId)
    app.put('/api/admin/:id',[verifyToken,isAdmin],updateAdmin)
   
    app.post('/api/user',[verifyToken,isAdmin],createUser)
    app.get('/api/user',[verifyToken,isAdmin],getAllUser)
    app.get('/api/user/:id',[verifyToken],getUserbyId)
    app.put('/api/user/:id',[verifyToken],updateUser)


    app.delete('/api/user/:id',[verifyToken,isAdmin],deleteUser)
}