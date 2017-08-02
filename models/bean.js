module.exports = function(sequelize, DataTypes) {
  var Bean = sequelize.define("Bean", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
      },
    
    flavor: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1, 30]
    },
    devoured:  {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    date: {
      type: DataTypes.DATE,
     
      defautlValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
    
  });

  Bean.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Bean.belongsTo(models.Customer, {
      foreignKey: {
      
      }
    });
  };

  return Bean;
};
