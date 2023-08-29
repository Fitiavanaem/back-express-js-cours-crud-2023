const express=require("express");
const app=express();
const mongoose = require('mongoose');
const bodyParser=require('body-parser');

const RouterProducts=require('./router/product');

mongoose.connect('mongodb+srv://faralahy:emma16@cluster-marketplace.sfxxbky.mongodb.net/Monfirstdata?retryWrites=true&w=majority', 
  {useNewUrlParser: true,})
  .then(() => console.log('Connexion réussie à MongoDB'))
  .catch((err) => console.error('Erreur de connexion à MongoDB', err));

app.use(bodyParser.json());
app.use('/api/products/',RouterProducts);


module.exports = app;