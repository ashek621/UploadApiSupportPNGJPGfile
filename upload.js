const express=require('express');
const multer=require('multer');

const app=express();

let fileStorage=multer.diskStorage({
      destination:function(req,file,callBack){
              callBack(null,"./Pictures")
      },

      filename:function(req,file,callBack){
        callBack(null,file.originalname)
      }
})

let fileUpload=multer({storage:fileStorage}).single('myFile');


app.post("/",function(req,res){
 
    fileUpload(req,res,function(error){
   
      if(error){
      res.send("File Uploading Fail!!")
    }

    else{
      res.send("File Uploading Successful!")
    }
  })
})

app.listen(5050,function(){

  console.log("Server Run Success!");

})