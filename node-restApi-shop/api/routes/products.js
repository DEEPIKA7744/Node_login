const express =  require("express");

const router = express.Router();
//handle incoming get req 
router.get("/",(req,res,next)=>{
    res.send("get products")
});

router.post("/",(req,res,next)=>{
    res.send("Add products")
});
router.get("/:productsId",(req,res,next)=>{
    const id = req.params.productsId;
    if(id=='special'){
        res.status(200).json({
            message:"Your product",
            id: id 
        });
    }else{
        res.status(200).json({
            message:'Your id is incorrect'
        })
    }

});

router.patch("/:productsId",(req,res,next)=>{
    res.send("update products")
});

router.delete("/productsId",(req,res,next)=>{
    res.send("Delete products")
});
module.exports = router;