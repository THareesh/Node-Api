var Model = require('./../models/loginmodel');
   sm = new Model();
 function Controller(){

 }
Controller.prototype.post=function(req,res){
    sm.find(req,function(err,data){
        if(err){
            res.send(err)
        }else{
            res.send(data)
        }
    })
}
module.exports = Controller;