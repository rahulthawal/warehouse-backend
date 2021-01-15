const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var whiteList = {
  origin: "http://localhost:3000"
};

app.use(cors(whiteList));

// parse requestuests of content-type - application/json
app.use(bodyParser.json());

// parse requestuests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


// Product Routes
require("./routes/product.routes")(app);

// Location Routes
require("./routes/location.routes")(app);

// Movement Routes
require("./routes/location.routes")(app);

// Warehouse Server Main route
app.get("/", (request, response) => {
  response.json({ message: "Welcome to Warehouse Application Server." });
});

// set port, listen for request
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Warehouse Application Server is running on port ${PORT}.`);
});