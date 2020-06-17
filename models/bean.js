const mongoose = require('mongoose');

const beanSchema = new mongoose.Schema({
  name:String,
  img:String,
  origin:String,
  recipename:String,
  recipelink:String
});

const Beans = mongoose.model('Bean', beanSchema);

module.exports = Beans;
