// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
const express = require('express');
const router = express.Router();
// Requiring our models
var db = require("../models");

// Routes
// =============================================================


  // GET route for getting all of the Beans
  router.get("/", (req, res) => {
    var query = {};
    if (req.query.customer_id) {
      query.CustomerId = req.query.customer_id;
    }
   
    db.Bean.findAll({
      where: query,
     // include: [db.Customer]
    }).then(function(dbBean) {
      var hbsObject = {
      flavors: dbBean
    };
    res.render("index",hbsObject);
    });
  });

 

  // Bean route for saving a new Bean
  router.post("/", (req, res) => {
    db.Bean.create(req.body).then(function(dbBean) {
      res.redirect('/');
    });
  });

  // DELETE route for deleting Beans
  router.delete("/:id", (req, res)  => {
    db.Bean.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbBean) {
      res.redirect('/');
    });
  });

  // PUT route for updating Beans
  router.put("/:id", function(req, res) {
   db.Bean.update(
     { devoured: true 
    }, 
     { where: { id: req.params.id } 
    }).then(() => {
        res.redirect("/");
    });
  });
module.exports = router;

 