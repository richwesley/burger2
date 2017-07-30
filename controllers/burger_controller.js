var express = require("express");
var router = express.Router();

// Import the model (cat.js) to use its database functions.
var flavor = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.

router.get("/", function(req, res) {
  flavor.all(function(data) {
    var hbsObject = {
      flavors: data
    };
    res.render("index",hbsObject);
  });

});


router.post("/", function(req, res) {
  flavor.create(["flavor", "devoured"], [req.body.flavor, req.body.devoured], function() {
    res.redirect("/");
  });
});


router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  flavor.update({
    devoured: req.body.devoured
  }, condition, function() {
    res.redirect("/");
  });
});



// Export routes for server.js to use.
module.exports = router;