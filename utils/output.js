 function finalData(arr){
   const output=[]
    arr.forEach(ele => {
        let obj={   
                First_Name:ele.First_Name,
                Middle_Name:ele.Middle_Name,
                Last_Name:ele.Last_Name,
                Email:ele.Email,
                Department:ele.Department       
        }
        output.push(obj)
   });
   return output;
}

function finalDataOne(ele){
    let obj={   
        First_Name:ele.First_Name,
        Middle_Name:ele.Middle_Name,
        Last_Name:ele.Last_Name,
        Email:ele.Email,
        Department:ele.Department       
}
return obj
}

module.exports={finalData,finalDataOne}