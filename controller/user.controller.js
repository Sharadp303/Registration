const {User}=require('../models')
const bcrypt=require('bcrypt')
const {finalData,finalDataOne}=require('../utils/output')

async function createAdmin(req,res){
    const First_Name=req.body.First_Name;
    const Middle_Name=req.body.Middle_Name;
    const Last_Name=req.body.Last_Name;
    const Email=req.body.Email;
    const Password=bcrypt.hashSync(req.body.Password,8);
    const Role='admin';
    const Department=req.body.Department;

    try{
        const result= await User.create({First_Name,Middle_Name,Last_Name,Email,Password,Role,Department})    
        // console.log(result)
        res.status(200).send({msg:"Admin created successfully"})
    }
    catch(err){
        console.log("error in creation of categories", err)
        res.status(500).send({msg:"Invalid input or Email id already exists or Internal server error"})
    }

}

async function getAllAdmin(req,res){
    try{
        const result = await User.findAll({where:{Role:'admin'}})
        const newResult=await finalData(result)
        res.status(200).send(newResult)
    }
    catch(err){
        console.log(err)
        res.status(500).send({msg:"Internal server error"})
        
    }
}

async function getAdminbyId(req,res){
    const id=req.params.id
    try{
        const result = await User.findOne({where:{id:id,Role:'admin'}})
        if(!result){
            res.status(400).send({msg:"Invalid id for admin"})
        }
        const newResult=await finalDataOne(result)
        res.status(200).send(newResult)
    }
    catch(err){
        console.log(err)
        res.status(500).send({msg:"Internal server error"})
        
    }
}


async function updateAdmin(req,res){
    const id=req.params.id;
    const data=req.body;

    try{
           const admin=await User.findOne({where:{id:id,Role:'admin'}})
           if(admin){
                admin.First_Name=data.First_Name?data.First_Name:admin.First_Name;
                admin.Middle_Name=data.Middle_Name?data.Middle_Name:admin.Middle_Name;
                admin.Last_Name=data.Last_Name?data.Last_Name:admin.Last_Name;
                admin.Email=data.Email?data.Email:admin.Email;
                admin.Role=data.Role?data.Role:admin.Role;
                admin.Department=data.Department?data.Department:admin.Department;

            admin.save()
            res.status(200).send({msg:"Admin updated Successfully"}) 
           }
           else{
            res.status(400).send({msg:"admin id does not exist"})
           }
    }
    catch(err){
        console.log(err)
        res.status(500).send({masg:"Internal server error"})
    }
}

async function createUser(req,res){
    const First_Name=req.body.First_Name;
    const Middle_Name=req.body.Middle_Name;
    const Last_Name=req.body.Last_Name;
    const Email=req.body.Email;
    const Password=bcrypt.hashSync(req.body.Password,8);
    const Department=req.body.Department;

    try{
        const result= await User.create({First_Name,Middle_Name,Last_Name,Email,Password,Department})    
        // console.log(result)
        res.status(200).send({msg:"User created successfully"})
    }
    catch(err){
        console.log("error in creation of categories", err)
        res.status(500).send({msg:"Invalid input or Email id already exists or Internal server error"})
    }

}

async function getAllUser(req,res){
    try{
        const result = await User.findAll()
        const newResult=await finalData(result)
        res.status(200).send(newResult)
        
    }
    catch(err){
        console.log(err)
        res.status(500).send({msg:"Internal server error"})
        
    }
}

async function getUserbyId(req,res){
    const id=req.params.id
    try{
        const result = await User.findOne({where:{id:id}})
        const newResult=await finalDataOne(result)
        res.status(200).send(newResult)
    }
    catch(err){
        console.log(err)
        res.status(500).send({msg:"Internal server error"})
        
    }
}

async function updateUser(req,res){
    const id=req.params.id;
    const data=req.body;

    try{
        const user=await User.findOne({where:{id:id,Role:'user'}})
        if(user){
             user.First_Name=data.First_Name?data.First_Name:user.First_Name;
             user.Middle_Name=data.Middle_Name?data.Middle_Name:user.Middle_Name;
             user.Last_Name=data.Last_Name?data.Last_Name:user.Last_Name;
             user.Email=data.Email?data.Email:user.Email;
             user.Role=data.Role?data.Role:user.Role;
             user.Department=data.Department?data.Department:user.Department;
    
         user.save()
         res.status(200).send({msg:"User updated Successfully"}) 
        }
        else{
         res.status(400).send({msg:"User id does not exist"})
        }
    }
    catch(err){
        console.log(err)
        res.status(500).send({masg:"Internal server error"})
    }
}

async function deleteUser(req,res){
    const userId=req.params.id
    try{
        const result = await User.destroy({where:{
                                    id:userId
                                }})
        res.status(200).send("User deleted Succesfully")
    }
    catch(err){
        console.log(err)
        res.status(500).send({msg:"Internal server error"})
        
    }
}

module.exports={
   createUser,getAllUser,getUserbyId,deleteUser,createAdmin,getAllAdmin,getAdminbyId,updateAdmin,updateUser
}