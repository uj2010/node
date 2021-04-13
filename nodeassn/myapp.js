/*
Assignment 1 :Node.js

* used http endpoints to create api and routed it using if else and swithcase(As per iv. Do not use any framework like Express.js/Hapi.js for building the API endpoints in
this assignment)

*route in funcAssign as per url request

* function.js have stub codes for age calc,area and volume calc
*/
var http=require("http")
const querystring = require('querystring');

function funcAssign(req,res){
var urlParam=req.url
var urlType=urlParam.split("?")
//console.log(urlType[0])
var Uriparamters=querystring.parse(urlType[1])
//console.log(Uriparamters)
const func=require("./function.js")
res.writeHead(200,{"Content-Types":"text/plain"})
if(urlType[0]==="/age")
   {
      let ageInfo=func.getAge(Uriparamters)
      if (typeof(ageInfo) === "undefined")
      {res.write("@Unvalid Params@")}
      else{
        res.write(ageInfo)
        }
      res.end()
   }
if(urlType[0]==="/vegetables")
   {
     let filesys = require("fs")
     try
     {
     var data=filesys.readFileSync("./read.json" )
     console.log(data)
     }
     catch(err)
     {
         console.log(err)
     }
     res.write(data)
     res.end()
     //console.log(datat)
     
   }
if(urlType[0]==="/metrics")
   {
    let metric=func.getAreaVol(Uriparamters)
    if (typeof(metric) === "undefined")
          {res.write("@Unvalid Params@")}
    else{
        res.write(metric.toString())
    }
    res.end()
   }
}
http.createServer(funcAssign).listen(8080)
