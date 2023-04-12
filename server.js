require('dotenv').config();
const express =require('express');
const mongoose = require('mongoose');
const app= express();
const   PORT = 4000;
const flowersA= require('./models/flowerdata');
const Flower = require('./models/Flower');



app.set('view engine','jsx');

app.engine('jsx',require('jsx-view-engine').createEngine())
app.use(express.urlencoded({extended:false}));
app.use((req,res,next)=>{
    console.log(req.url);
    next();//runs next middleware
  })

//mount routes
app.get('/',(req,res)=>{

    res.send('<h1>welcome to flower shop</h1>');
})


/**
 * INDEX.jsx template shows all flowers
 */
app.get('/flowers',(req,res)=>{
    
  //res.render('flowers/Index',{flowerArr:flowerArr})

   Flower.find({},(error,allFlowers)=>{
          res.render('flowers/Index',{flowers:allFlowers})
    })
})

app.post('/flowers',(req,res)=>{
    console.log(req.body);

    //res.redirect('/flowers');
    if(req.body.readyToBloom === 'on'){
        req.body.readyToBloom=true;
        }else{
        req.body.readyToBloom=false;
       }


    Flower.create(req.body,(error,createdFlower)=>{
        //res.send(createdFlower);
      
          res.redirect('/flowers')
      
        })
})
/**
 * New template route:return form to create new route
 */
app.get('/flowers/new',(req,res)=>{
    res.render('flowers/New');
    
       
   })

/**
 * show routes
 */
 app.get('/flowers/:id',(req,res)=>{

    console.log(req.params);
   // res.render('/flowers/Show',{flowerArr:flowerArr[req.params.id]})

    Flower.findById(req.params.id,(error,foundFlower)=>{
        res.render('flowers/Show',{flower:foundFlower})
     })

 })


app.listen(4000,function(){
    console.log(`listening to port :${PORT}`);
    mongoose.set('strictQuery',true);
    mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        //useCreateIndex: true
      })
      mongoose.connection.once('open',()=>{
        console.log('connected to mangoDB');
    })
})