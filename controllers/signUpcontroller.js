var Model = require('./../models/signUpmodel'),
    mo = new Model();
function Controller(){

}
Controller.prototype.post=function(req,res){
    if(!req.body.email){
        res.send("please enter email")
    }
    else if(!req.body.name){
        res.send("please enter name")
    }
    else if(req.body.password && req.body.password.length>5){
        mo.find(req,function(err,data){
            if(err){
                res.send(err);
            }else{
                res.send(data);
            }

        });
    }else{
        res.send("minimum password 6 characters ")
    }
}
Controller.prototype.getAll=function(req,res){
    mo.findAll(req,function (err,data) {
        if(err){
            res.send(errr);
        }else{
            res.send(data);
        }
    })
};

Controller.prototype.getById=function(req,res){
    console.log(req.params.id);
    mo.findById(req.params.id,function (err,data) {
         if(err){
             res.send(errr);
         }else{
             res.send(data);
         }
    })
};
Controller.prototype.update=function(req,res){
    mo.change(req.params.id,req.body,function (err,data) {
        if(err){
            res.send(errr);
        }else{
            res.send(data);
        }
    })
};
Controller.prototype.remove=function(req,res){
    mo.delete(req.params.id,function (err,data) {
        if(err){
            res.send(errr);
        }else{
            res.send(data);
        }
    })
};




module.exports = Controller;