const express =  require("express");

const router = express.Router();

router.get("/",(req,res,next)=>{
    res.send("get orders")
});

router.post("/",(req,res,next)=>{
    res.send("Add orders")
});
router.get("/:ordersId",(req,res,next)=>{
    res.status(200).json({
        message:"Order details",
        orderId: req.params.ordersId
    });
    

});


router.delete("/:ordersId",(req,res,next)=>{
    res.status(200).json({
        message:"Order deleted",
        orderId: req.params.ordersId
    });
});
module.exports = router;