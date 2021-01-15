module.exports = app => {
  const product = require("../controllers/product.controllers.js");

  var router = require("express").Router();

  // Retrieve all product
  router.get("/", product.getProductData);
  
  // Create a new product
  router.post("/", product.postProductData);

  // Update a product with id
  router.put("/", product.putProductData);

  // Delete a product with id
  router.delete("/", product.deleteProductData);

  app.use('/api/product', router);
};