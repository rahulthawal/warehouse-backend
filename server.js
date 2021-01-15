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


// Routes
require("./routes/product.routes")(app);

// Warehouse Server Main route
app.get("/", (request, response) => {
  response.json({ message: "Welcome to Warehouse Application Server." });
});

// Product Routes - Auth
// app.get('/api/product', (request, response) => product.getProductData(request, response, db))
// app.post('/product', (request, response) => product.postTableData(request, response, db))
// app.put('/product', (request, response) => product.putTableData(request, response, db))
// app.delete('/product', (request, response) => product.deleteTableData(request, response, db))

// set port, listen for requestuests
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});