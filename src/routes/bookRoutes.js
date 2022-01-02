const express = require('express'); 
const booksRouter = express.Router();
function router(nav1){
    
    var books =[
        {
            title:'Wings Of Fire',
            author:'APJ Abdul Kalam',
            genre:'Autobiography',
            img:"wingsoffire.jpg"

        },
        {
            title:'Adujivitam',
            author:'Benyamin',
            genre:'Noval',
            img:"Adujivitam.jpg"
        },
        {
            title:'Balyakalasaki',
            author:'Vaikom Muhammed Basheer',
            genre:'Noval',
            img:"download.jpg"
        },
        {
            title:'Pathummayude aadu',
            author:'Vaikom Muhammed Baheer',
            genre:'Noval',
            img:"basheer.jpg"
        },
        {
            title:'Khasakkinte Ithihasam',
            author:'O V Vijayan',
            genre:'Noval',
            img:"vijayan.jpg"
        },
        {
            title:'Ente Katha',
            author:'Kamala Suraiyya',
            genre:'Autobiography',
            img:"kamala.jpg"
        },
        {
            title:'Verukal',
            author:'Malayattoor Ramakrishnan',
            genre:'Noval',
            img:"malayattoor.jpg"
        },
        {
            title:'Randidangazhi',
            author:'Thakazhi Sivasankara Pillai',
            genre:'Noval',
            img:"thagazhi.jpg"
        },
        {
            title:'Mayyazhippuzhayude Theerangalil',
            author:'M Mukundan',
            genre:'Noval',
            img:"mukundan.jpg"
        },
        {
            title:'Bhoomikku Oru Charamageetham',
            author:'O N V Kurup',
            genre:'Poem',
            img:"onv.jpg"
        }
    
    
    
    
    
    ]
    
    
    booksRouter.get('/',function(req,res){
        res.render("books",{
            
            nav1,
            title:'Library',
            books
    
        })
    })
    
    booksRouter.get('/:id',function(req,res){
        const id =req.params.id
        res.render('book',{
            nav1,
            title:'Library',
            book:books[id],
            
    
        })
    })
    return booksRouter;

}

module.exports = router;