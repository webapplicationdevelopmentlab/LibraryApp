const express = require('express');

const app = new express();
const nav = [
                {
                    link:'/login',name:'Login'
                },
                {
                    link:'/signup',name:'Signup'
                }
                

            ]
const nav1 =[
                {
                    link:'/books',name :'Books'
                },
                {
                    link:'/authors',name :'Authors'
                },
                {
                    link:'/addbook',name:'Add Book'
                },
                {
                    link:'/login',name:'Login'
                },
                {
                    link:'/signup',name:'Signup'
                }

]

   
const loginRouter = require('./src/routes/loginRoutes')(nav)
const signupRouter = require('./src/routes/signupRoutes')(nav)
const booksRouter = require('./src/routes/bookRoutes')(nav1)
const authorsRouter = require('./src/routes/authorRoutes')(nav1)
const addbookRouter = require('./src/routes/addbookRoutes')(nav1)
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/login',loginRouter);
app.use('/signup',signupRouter);
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/addbook',addbookRouter);
app.get('/',function(req,res){
    res.render("index",
    {
        nav,
        title:'Library'
    });
});
   
app.get('/',function(req,res){
    res.render("login",
    {
        nav,
        title:'Library'
    });
       
});
app.get('/',function(req,res){
    res.render("signup",
    {
        nav,
        title:'Library'
    });
       
});
app.get('/',function(req,res){
    res.render("books",
    {
        nav1,
        title:'Library'
    });
       
});
app.get('/',function(req,res){
    res.render("book",
    {
        nav1,
        title:'Library'
    });
       
});
app.get('/',function(req,res){
    res.render("authors",
    {
        nav1,
        title:'Library'
    });
       
});
app.get('/',function(req,res){
    res.render("author",
    {
        nav1,
        title:'Library'
    });
       
});
app.get('/',function(req,res){
    res.render("addbook",
    {
        nav1,
        title:'Library'
    });
       
});




app.listen(5030);