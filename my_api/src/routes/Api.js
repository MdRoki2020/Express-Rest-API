const express=require('express');
const router=express.Router();
const HelloController=require('../controllers/HelloController')


//this is my first GET routing....
router.get('/hello-get',HelloController.HelloGet);

router.post('/hello-post',HelloController.HelloPost);


module.exports=router;