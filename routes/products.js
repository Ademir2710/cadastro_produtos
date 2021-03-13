var express = require('express');
const model = require('../model/products')

var router = express.Router();

let products = [{
  id: 1,
  name: "Geladeira",
  price: 800,
  type: "eletronic"
}, {
  id: 2,
  name:"Arroz",
  price: 30,
  type: "food"
}]

const types = [{
  id: "eletronic",
  label: "Eletronicooooo"
}, {
  id: "food",
  label: "Alimenticiooooo"
}, {
  id: "drugs",
  label: "Farmaceuticooooo"
}, {
  id: "Ademir",
  label: "Ademir o cara"
} ];

router.get('/', function(req, res) {
res.render('products', { name: "Cadastro de produtos", types: types });
});

router.post('/', function(req, res) {
  const newProdutc = req.body
  newProdutc.id = parseInt(Math.random() * 100000)

  products.push(newProdutc);
  console.log(req.body)
  res.render('products', { name: "Cadastro de produtos", types: types });
});

  router.get("/lista", function(req, res){
  res.render('productsList',{products: products});
  })
  
  router.delete("/:id", function(req, res) {
  console.log("Chamando o metodo delete")
  console.log (req.params.id)

   products = products.filter(function(product){
     return product.id !== parseInt(req.params.id)
   })

  res.render('productsList',{products: products});
  })
  

  console.log("Ademir Dev")
  module.exports = router;