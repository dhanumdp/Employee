const express=require('express');
var router=express.Router();
//importing the database model
var {Employee} = require('../models/employee');

var ObjectId = require('mongoose').Types.ObjectId;

//routings
router.get('/list',function(req,res){
    Employee.find(function(err,docs){
        if(!err)
        {
            res.send(docs);
        }
         else
            console.log('Error Occured in Retrieving Employees :'+JSON.stringify(err,undefined,2));
    });
});

router.post('/insert',function(req,res){
    var emp = new Employee({
        name : req.body.name,
        position : req.body.position,
        office : req.body.office,
        salary: req.body.salary
    });
    emp.save(function(err,doc){
        if(!err)
            {
                res.send(doc);
            }
            else
            {
                console.log('Error in Employee Save :'+ JSON.stringify(err,undefined,2));
            }
    });
});

router.get('/list/:id',function(req,res){
        if(!ObjectId.isValid(req.params.id))
            return res.status(400).send(`No record with given id: ${req.params.id}` );
        Employee.findById(req.params.id,function(err,doc){
            if(!err)
                res.send(doc);
            else    
                console.log('Error in Retrieving Employee '+JSON.stringify(err,undefined,2));
            
    })
})

router.put('/update/:id',function(req,res){
   /* if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id: ${req.params.id}` );*/
    var emp={
        name:req.body.name,
        position:req.body.position,
        office:req.body.office,
        salary:req.body.salary
    };

    Employee.findByIdAndUpdate(req.params.id,{$set : emp},{new : true},function(err,doc){
        if(!err)
            res.send(doc);
        else
            console.log('Error is Updating Employee : '+JSON.stringify(err,undefined,2));
    });
});


router.delete('/delete/:id',function(req,res){
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id: ${req.params.id}` );
    Employee.findByIdAndRemove(req.params.id, function(err,doc){
        if(!err)
        res.send(doc);
    else
        console.log('Error is Deleting Employee : '+JSON.stringify(err,undefined,2));

    });

});


module.exports=router;
 
