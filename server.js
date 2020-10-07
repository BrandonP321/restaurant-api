// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Star Wars Characters (DATA)
// =============================================================
var customers = [
  {
    ID: "1",
    name: "caitlin",
    email: "caitlin.bouroncle@gmail.com",
    phone: `800.666.2222`
  }
    
];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/views/index.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "/views/tables.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "/views/reservation.html"));
});

// Displays all characters
app.get("/api/tables", function(req, res) {
  return res.json(customers.slice(0, 5));
});

app.get("/api/waitlist", function(req, res) {
    return res.json(customers.slice(5));
});

// front end has make reservation button. When submit hit, it postst that info to tables. 
// If tables >=5 then it needs to post
// Create New customers - takes in JSON input
app.post("/api/tables", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newCustomers = req.body;

// You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  console.log(newCustomers);
  customers.push(newcustomers);
    res.json(newCustomers);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});