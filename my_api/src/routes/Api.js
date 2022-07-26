const express=require('express');
const router=express.Router();
const HelloController=require('../controllers/HelloController');
const StudentsController=require('../controllers/StudentsController');
const JWTpractice=require("../controllers/JWTpractice")
const TokenVerifyMiddleware =require('../middleware/TokenVerifyMiddleware');
const TokenIssueController =require('../controllers/TokenIssueController')


//this is my first GET routing....
router.get('/hello-get',HelloController.HelloGet);

router.post('/hello-post',HelloController.HelloPost);


//Mongoos 
router.get('/TokenIssue',TokenIssueController.TokenIssue);
router.post('/InsertStudent',TokenVerifyMiddleware,StudentsController.InsertStudent);
router.get('/ReadStudent',TokenVerifyMiddleware,StudentsController.ReadStudent);
router.post('/UpdateStudent/:id',TokenVerifyMiddleware,StudentsController.UpdateStudent);
router.get('/DeleteStudents/:id',TokenVerifyMiddleware,StudentsController.DeleteStudents);



//create JWT token
router.get("/CreateToken",JWTpractice.CreateToken)
//Decode JWT token
router.get("/DecodeToken",JWTpractice.DecodeToken)






module.exports=router;