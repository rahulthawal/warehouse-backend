module.exports = app => {
  const location = require("../controllers/location.controllers.js");

  var router = require("express").Router();

  // Retrieve all Location
  router.get("/", location.getLocationData);
  
  // Create a new Location
  router.post("/", location.postLocationData);

  // Update a Location with locationid
  router.put("/", location.putLocationData);

  // Delete a Location with locationid
  router.delete("/", location.deleteLocationData);

  app.use('/api/location', router);
};