const express = require('express');
const router = express.Router();

const Beans = require('../models/bean.js');

//INDEX
router.get('/', (req, res) => {
  Beans.find({}, (err, foundBeans) => {
    res.json(foundBeans);
  })
});

//CREATE

//DELETE

//EDIT

//export 
module.exports = router;