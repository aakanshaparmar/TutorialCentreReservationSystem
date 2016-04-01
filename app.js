var express = require("express");
var app     = express();
var path    = require("path");


app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
  });
  app.get('/signUp.html',function(req,res){
    res.sendFile(path.join(__dirname+'/signUp.html'));
    });
   
app.get('/studentSignIn.html',function(req,res){
    res.sendFile(path.join(__dirname+'/studentSignIn.html'));
    });
   
app.get('/tutorSignIn.html',function(req,res){
    res.sendFile(path.join(__dirname+'/tutorSignIn.html'));
    });
   
app.get('/endMessage.html',function(req,res){
    res.sendFile(path.join(__dirname+'/endMessage.html'));
    });
   
app.get('/selectTimes.html',function(req,res){
    res.sendFile(path.join(__dirname+'/selectTimes.html'));
    });
   
app.get('/profile.html',function(req,res){
    res.sendFile(path.join(__dirname+'/profile.html'));
    });

app.get('/studentProfile.html',function(req,res){
    res.sendFile(path.join(__dirname+'/studentProfile.html'));
    });
   

      app.listen(80);

    
console.log("Running at Port 3000");
