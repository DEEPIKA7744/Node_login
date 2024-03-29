import  express from 'express';
import { v4 as uuidv4 } from 'uuid';


const router = express.Router(); 
let users = []


//all routes here are starting with /users
router.get('/',(req,res)=>{
    res.send(users);
});

router.post('/',(req,res)=>{
    const user = req.body;//from body new user is added
    
    //uuid is the npm package for rand userid\
    users.push({...user, id:uuidv4()});//pushing the user enters name to the get it get added
    res.send(`User with the username ${user.firstName} added`);
});

// /users/2 =>req.params {id:2}

router.get('/:id',(req,res)=>{
    const {id} =req.params;
    const foundUser = users.find((user)=>user.id==id);
    res.send(foundUser);
})
router.delete('/:id',(req,res)=>{
    const {id} =req.params;
    //id to delete 123

    //deepika 123
    //gowtham 321
    //if 321 not eq to 123 keep 321 not deleeted
    users =users.filter((user) => user.id!== id);
    res.send(`User with the id ${id} deleeted`)
});

router.patch('/:id',(req,res)=>{
    const {id} = req.params;
    const {firstName,lastName,age}=req.body;
    const user =users.find((user)=> user.id===id);
    if(firstName) user.firstName=firstName;
    if(lastName) user.lastName=lastName;
    if(age) user.age=age;
    
    
    res.send(`User with the id ${id} has been updated`);  
})
export default router;