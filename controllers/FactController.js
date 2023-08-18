var express = require('express');
var bodyParser = require('body-parser');
var Fact = require('../models/Fact');

var router = express.Router();

router.use(bodyParser.json());

router.get('/env', (req,res) => {
    console.log(process.env);
    res.send({
        key1: process.env.DB_USER,
        key2: process.env.DB_PASSWORD
    });
});

router.post('/createFact', (req, res) => { 
    Fact.create(req.body.newFactObj,(err, fact) => { 
      if (err) {
        return res.status(500).send(err);
      }
      return res.status(200).send(fact)
    });
});

router.get('/randomFact', (req, res) => {
    Fact.aggregate([{ $sample: {size: 1} }], (err,retrievedFact) => {
        if (err) {
          return res.status(500).send(err);
        }
        return res.status(200).send(retrievedFact);
    })
});

router.get('/author/:userName', (req, res) => {
    Fact.find({ userName: req.params.userName },(err,retrievedFactsObj) => {
      if (err) {
        return res.status(500).send(err);
      }
      return res.status(200).send(retrievedFactsObj);
    })
});

router.get('/:factId', (req, res) => {
    Fact.find({ "_id": req.params.factId },(err,retrievedFactObj) => {
      if (err) {
        return res.status(500).send(err);
      }
      return res.status(200).send(retrievedFactObj);
    })
});

router.put('/updateFact/:factId',(req,res) => {
    Fact.findByIdAndUpdate(req.params.factId, req.body.editFactObj,{new:true},(err, updatedFact)=>{
        if (err) {
          return res.status(500).send(err);
        }
        return res.status(200).send(updatedFact);
    });
});

router.delete('/deleteFact/:factId',(req, res) => {
    Fact.deleteOne({ "_id" : req.params.factId }, (err, deletedFact) => {
        if (err) {
            return res.status(500).send(err);
        }
        return res.status(200).send(deletedFact);
    });
});


module.exports = router;
