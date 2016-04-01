var express = require("express");
var app     = express();
var path    = require("path");


app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'index.html'));
  //__dirname : It will resolve to your project folder.
  });
  
  app.get('/about',function(req,res){
    res.sendFile(path.join(__dirname+'/react-0.14.8/about.html'));
    });
  
   app.get('/sitemap',function(req,res){
      res.sendFile(path.join(__dirname+'/react-0.14.8/sitemap.html'));
      });
  
      app.listen(80);

    
console.log("Running at Port 3000");
