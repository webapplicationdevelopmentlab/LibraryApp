const express = require('express');
const addbookRouter = express.Router();
function router(nav1){
    var addbook =[
                    {
                        title:"Mathilikal",
                        author:"Basheer"
                    }
                ]
                addbookRouter.get('/',function(req,res){
                    res.render("addbook",{
                        
                        nav1,
                        title:'Library',
                        addbook
                
                    })
                })
                return addbookRouter;
}
module.exports=router;