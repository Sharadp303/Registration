const express= require('express')
const bcrypt=require('bcrypt')
const cors=require('cors')
const app =express()
const {sequelize,User} =require('./models')

app.use(express.json())
app.use(cors())

require('./routes/user.routes')(app);
require('./routes/auth.routes')(app);

app.listen(4000,async()=>{
    console.log('server working on localhost:4000')
    await init(); 
})

async function init(){
    try{
       await sequelize.sync({force:true})
       const defaultUsers=[
        {
            "First_Name":"Sharad",
            "Last_Name":"Patel",
            "Email":"sharad@gmail.com",
            "Password":bcrypt.hashSync("123456",8),
            "Role":"admin",
            "Department":"Development team"
        },
        {
            "First_Name":"Rahul",
            "Last_Name":"Patel",
            "Email":"rahul@gmail.com",
            "Password":bcrypt.hashSync("123456",8),
            "Role":"admin",
            "Department":"Development team"
        },
        {
            "First_Name":"Nimish",
            "Last_Name":"Patel",
            "Email":"nimish@gmail.com",
            "Password":bcrypt.hashSync("123456",8),
            "Role":"user",
            "Department":"Development team"
        },
       ]

       await User.bulkCreate(defaultUsers);
    }
    catch(err){
        console.log(err)        
    }
}



