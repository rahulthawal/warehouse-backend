module.exports = app => {
  const location = require("../controllers/location.controllers.js");

  var router = require("express").Router();

  // Retrieve all Location
  router.get("/", location.getLocationData);
  
  // Create a new Location
  router.post("/", location.postLocationData);

  // Update a Location with id
  router.put("/", location.putLocationData);

  // Delete a Location with id
  router.delete("/", location.deleteLocationData);

  app.use('/api/location', router);
};