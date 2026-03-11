const ensureAuth = require('../midllewares/Auth');

const router=require('express').Router();

router.get('/',ensureAuth,(req,res)=>{
    res.status(200).json([
        
        {
            name:"vikram",
            position:"junior developer"
        } 
         
    ])
});

module.exports=router;