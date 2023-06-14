const express =  require("express");
const app = express();
const productsRoutes = require('./api/routes/products')
const orderRoutes = require('./api/routes/orders')
const morgan = require("morgan");

app.use(morgan('dev'));//calls next it is for login
app.use(express.json());
//route which handles the req

app.use('/products',productsRoutes)
app.use('/orders',orderRoutes)
app.use((req,res,next)=>{
    const error = new Error('Not found');
    error.status=404;
    next(error);
})
app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    res.json({
        error:{
            message:error.message
        }
    })
})
module.exports = app; 