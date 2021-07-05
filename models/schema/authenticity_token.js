const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AuthenticityToken', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    token: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'AuthenticityToken',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "AuthenticityToken_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
