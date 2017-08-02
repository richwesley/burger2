module.exports = function(sequelize, DataTypes) {
  var Customer = sequelize.define("Customer", {
    // Giving the Author model a name of type STRING
     id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    name: DataTypes.STRING

  });

  Customer.associate = function(models) {
  
    Customer.hasMany(models.Bean, {
      onDelete: "cascade"
    });
  };

  return Customer;
};
