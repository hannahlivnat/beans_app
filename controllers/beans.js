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
router.post('/', (req, res) => {
  Beans.create(req.body, (err, createdBeans) => {
    res.json(createdBeans);
  })
})

//DELETE
router.delete('/:id', (req, res) => {
  Beans.findByIdAndRemove(req.params.id, (err, deletedBean) => {
    res.json(deletedBean);
  })
});

//EDIT
router.put('/:id', (req, res) => {
  Beans.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  }, (err, updatedBean) => {
    res.json(updatedBean);
  })
});

//export 
module.exports = router;