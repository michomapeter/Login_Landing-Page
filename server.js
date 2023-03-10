const  express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const User = require('./models/user')

const db ="mongodb+srv://michomapeter_21:michoma123@cluster0.d8jqq.mongodb.net/?retryWrites=true&w=eventsdb"
mongoose.connect(db ,err =>{
    if(err){
        console.error('Error' + err)
    }else{
        console.log('connected to the database')
    }
})

const PORT = 3000


const app = express()

app.use(bodyParser.json())

app.get('/' ,function(req,res){

    res.send('Backend server is running')
})

app.get('/register' ,(req,res)=>{
     let userData = req.body
    let user = new User(userData)
    user.save((error ,registeredUser)=>{
        if (error){
            console.log(error)
        }
        else{
            res.status(200).send(registeredUser)
        }
    })
})

app.listen(PORT ,function(){
    console.log('Server is running on localhost' + PORT)
});