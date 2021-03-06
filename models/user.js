const { Model } = require('sequelize')
const UserSchema = require('./schema/user')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.AuthenticityTokens = this.hasMany(models.AuthenticityToken)
      User.Requests = this.hasMany(models.Request, { onDelete: 'CASCADE', hooks: true })
    }
  }

  const { tableAttributes } = UserSchema(sequelize, DataTypes)
  User.init(tableAttributes, {
    sequelize,
    modelName: 'User',
  })
  return User
}