'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Likes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Likes.init({
    likeId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    postId:{type: DataTypes.INTEGER, unique: false, allowNull: false },
    ID: {type: DataTypes.STRING, unique: false, allowNull: false }
  }, {
    sequelize,
    modelName: 'Likes',
  });
  return Likes;
};