var orm = require("../config/orm.js");

var flavor = {
  all: function(cb) {
    orm.selectAll("flavors", function(res) {
      cb(res);
    });
  },
 
  create: function(cols, vals, cb) {
    orm.insertOne("flavors", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.updateOne("flavors", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

module.exports = flavor;