const express=require('express');
const router=express.Router();
const HelloController=require('../controllers/HelloController');
const StudentsController=require('../controllers/StudentsController');


//this is my first GET routing....
router.get('/hello-get',HelloController.HelloGet);

router.post('/hello-post',HelloController.HelloPost);


//Mongoos 
router.post('/InsertStudent',StudentsController.InsertStudent);

router.get('/ReadStudent',StudentsController.ReadStudent);

router.post('/UpdateStudent/:id',StudentsController.UpdateStudent);

router.get('/DeleteStudents/:id',StudentsController.DeleteStudents);


module.exports=router;