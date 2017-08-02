const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const path = require("path");
const app = express();
const exphbs = require("express-handlebars");
 
const PORT = process.env.PORT || 3000;


app.use(express.static("public"));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));

app.set("view engine", "handlebars");

var db = require("./models");

// Routes
// =============================================================
const routes = require("./routes/bean-routes.js")
app.use('/', routes)
const Routes = require("./routes/customer-routes.js")
app.use('customer', routes)

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
      });

});