const express = require('express'); 
const authorsRouter = express.Router();
function router(nav1){
    
    var authors =[
        {
            author:'APJ Abdul Kalam',
            title:'Wings Of Fire',
            genre:'Autobiography',
            img:"apj.jpg"

        },
        {
            author:'Benyamin',
            title:'Adujivitam',
            genre:'Noval',
            img:"benyamin.jpg"
        },
        {
            title:'Balyakalasaki',
            author:'Vaikom Muhammed Basheer',
            genre:'Noval',
            img:"basheer1.jpg"
        },
        {
            author:'Vaikom Muhammed Baheer',
            title:'Pathummayude aadu',
            genre:'Noval',
            img:"basheer1.jpg"
        },
        {
            author:'O V Vijayan',
            title:'Khasakkinte Ithihasam',
            genre:'Noval',
            img:"ov.jpg"
        },
        {
            author:'Kamala Suraiyya',
            title:'Ente Katha',
            genre:'Autobiography',
            img:"surayya.jpg"
        },
        {
            author:'Malayattoor Ramakrishnan',
            title:'Verukal',
            genre:'Noval',
            img:"rama.jpg"
        },
        {
            author:'Thakazhi Sivasankara Pillai',
            title:'Randidangazhi',
            genre:'Noval',
            img:"tsp.jpg"
        },
        {
            author:'M Mukundan',
            title:'Mayyazhippuzhayude Theerangalil',
            genre:'Noval',
            img:"m.jpg"
        },
        {
            author:'O N V Kurup',
            title:'Bhoomikku Oru Charamageetham',
            genre:'Poem',
            img:"kurup.jpg"
        }
    
    
    
    
    
    ]
    
    
    authorsRouter.get('/',function(req,res){
        res.render("authors",{
            
            nav1,
            title:'Library',
            authors
    
        })
    })
    
    authorsRouter.get('/:id',function(req,res){
        const id =req.params.id
        res.render('author',{
            nav1,
            title:'Library',
            author:authors[id],
            
    
        })
    })
    return authorsRouter;

}

module.exports = router;