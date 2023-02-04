'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullname: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    bio: DataTypes.STRING,
    profileURL: DataTypes.STRING,
    hashedPassword: DataTypes.STRING,
    verified: DataTypes.BOOLEAN,
    state: DataTypes.STRING,
    link: DataTypes.STRING,
    country: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};