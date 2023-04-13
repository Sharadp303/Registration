const jwt=require('jsonwebtoken')
const {User}=require('../models')
async function verifyToken(req,res,next){
    const token=req.headers['x-access-token'];
    if(token){
        try{
            const result= await jwt.verify(token,process.env.secretKey)
            if(result){
                req.userId=result.id;
                next()
            }
            else{
                res.status(400).send({msg:"auth token is expired or wrong"})
            }
        }
        catch(err){
            res.status(400).send({msg:"auth token is expired"})
            return;
        }

    }
    else{
        res.status(401).send({msg:'auth token is missing'})
        return;
    }

}

async function isAdmin(req,res,next){
        const userId=req.userId;
        try{
            const result=await User.findOne({where:{id:userId}})
            if(result.Role=='admin'|'Admin')
             {
                next()
             }
            else{
                res.status(400).send({msg : 'User does not have admin access'})
                return;
            }
        }
        catch(err){
            res.status(500).send({msg:'Internal Server Error'})
        }
}

module.exports={verifyToken,isAdmin}