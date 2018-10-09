var express = require('express');
var router = express.Router();
var db = require('../services/dbConnection');

router.get('/insert',function(req,res,next){
    res.send("Non sense0");
});

router.post('/insert',function(req,res,next){

    var firstname = req.query.firstname;
    var middlename = req.query.middlename;
    var lastname = req.query.lastname;
    var rollno = req.query.rollno;
    var batch = req.query.batch;
    var department = req.query.department;
    var section = req.query.section;
    var dob = req.query.dob;
    var bloodgroup = req.query.bloodgroup;
    var email = req.query.email;
    var mobile = req.query.mobile;
    var password = req.query.password;
    console.log(firstname,middlename,lastname,rollno,mobile);
    

    db.query("INSERT INTO `student_details`(`fisrt_name`,`middle_name`, `last_name`, `rollno`, `batch`, `department`, `section`, `date_of_birth`, `blood_group`, `email`, `student_mobile`, `password`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)",[firstname,middlename,lastname,rollno,batch,department,section,dob,bloodgroup,email,mobile,password],function(err,data,fields){
        if(err)
            throw err;
        else{
            res.json(data);
        }
    });
})


module.exports = router;
