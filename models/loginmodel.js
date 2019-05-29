var user = require('./../utils/mongoo-connection');

function Model() {

}
Model.prototype.find = function(req,callback){
if (req.body) {
    user.find({"email": req.body.email}, function (err, data) {
        console.log(data);
        if (err) {
            callback(err, null);
        } else {
            if (data.length) {
                user.find({"password": req.body.password}, function (err, data) {
                    if (data.length) {
                        callback(null, {"msg": "Sucessfully LogIn"});
                    } else
                        callback(null, {"msg": "InCorrect UserName or PassWord"});
                });
            } else
                callback(null, {"msg": "User Not Registered please SignUp"})
        }
    })

}
};
module.exports =  Model;