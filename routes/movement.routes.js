module.exports = app => {
  const movement = require("../controllers/movement.controllers.js");

  var router = require("express").Router();

  // Retrieve all Movement
  router.get("/", movement.getMovementData);
  
  // Create a new Movement
  router.post("/", movement.postMovementData);

  // Update a Movement with movementid
  router.put("/", movement.putMovementData);

  // Delete a Movement with movementid
  router.delete("/", movement.deleteMovementData);

  app.use('/api/movement', router);
};