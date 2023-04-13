const {User}=require('../models')
const bcrypt=require('bcrypt')
const jwt= require('jsonwebtoken')
require('dotenv').config()

async function signUp(req,res){
    const First_Name=req.body.First_Name;
    const Middle_Name=req.body.Middle_Name;
    const Last_Name=req.body.Last_Name;
    const Email=req.body.Email;
    const Password=bcrypt.hashSync(req.body.Password,8);
    const Department=req.body.Department;

    try{
        const result= await User.create({First_Name,Middle_Name,Last_Name,Email,Password,Department})
        // console.log(result)
        res.status(200).send({msg:"Signed Up successfully"})
    }
    catch(err){
        console.log("error in creation of categories", err)
        res.status(500).send({msg:"Invalid input or Email id already exists or Internal server error"})
    }

}


async function signIn(req,res){

    const Email=req.body.Email;
    const Password=req.body.Password;
    try{
        const result=await User.findOne({where:{
            Email:Email
        }})
        if(result){
            const validPassword=bcrypt.compareSync(Password,result.Password)
            if(!validPassword){
                res.status(400).send({msg:"Email or password incorrect"})
            }
        
            const token =await jwt.sign({id:result.id},process.env.secretKey,{expiresIn:'1h'})
            res.send({msg:"Signed In successFully",token:token})
        }
        else{
            res.status(400).send({msg:"Email or password incorrect"})
        }

    }
    catch(err){
        console.log(err)
        res.status(500).send({msg:'Internal server errr'})
    }
}

module.exports={signUp,signIn}