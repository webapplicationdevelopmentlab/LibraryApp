const express = require('express');
const loginRouter = express.Router();
function router(nav){
    var login =[
                    {
                        username : "user",
                        password : "pass"
                    }
                ]
                loginRouter.get('/',function(req,res){
                    res.render("login",{
                        
                        nav,
                        title:'Library',
                        login
                
                    })
                })
                return loginRouter;
}
module.exports=router;