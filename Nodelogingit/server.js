//importing lib express
const express = require('express')
const app = express()

const bcrypt = require("bcrypt")


const users = []

app.use(express.urlencoded({extended:false}))

app.post("/register",async(req,res)=>{
    try{
        const hashedPassword = await bcrypt.hash(req.body.password,10)
        users.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword        
        })
        console.log(users)
        res.redirect("/login")
    }
    catch(e) {
        console.log(e)
        res.redirect("/register")
    }

})



//Routes for the web page url
app.get('/home',(req,res)=>{
    res.render("index.ejs")
})

app.get('/login',(req,res)=>{
    res.render("login.ejs")
})
app.get('/register',(req,res)=>{
    res.render("register.ejs")
})

console.log(users)
app.listen(3000)