const express = require('express');
const signupRouter = express.Router();
function router(nav){
    var signup =[
                    {
                        emailid :"kerala@gmail.com",
                        username : "user",
                        mobileno :"12345678910",
                        password : "pass"
                    }
                ]
                signupRouter.get('/',function(req,res){
                    res.render("signup",{
                        
                        nav,
                        title:'Library',
                        signup
                
                    })
                })
                return signupRouter;
}
module.exports=router;

