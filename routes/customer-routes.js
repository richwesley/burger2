const express = require('express');
const router = express.Router();
// Requiring our models
var db = require("../models");



  router.get("/customers", function(req, res) {
  
    db.customer.findAll({
     // include: [db.Bean]
    }).then(function(dbCustomer) {
        var hbsObject = {
      name: dbCustomer
    };
    res.render("eater",hbsObject);
    });
  });

  router.get("/api/customers/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Customer.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Bean]
    }).then(function(dbCustomer) {
      res.json(dbCustomer);
    });
  });

  router.post("/customers", function(req, res) {
    db.Customer.create(req.body).then(function(dbCustomer) {
      res.redirect('/customer');
    });
  });

  router.delete("/api/customers/:id", function(req, res) {
    db.Customer.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbCustomer) {
      res.json(dbCustomer);
    });
  });

module.exports = router;
