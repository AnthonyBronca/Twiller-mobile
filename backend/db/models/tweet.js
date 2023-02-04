'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tweet = sequelize.define('Tweet', {
    userId: DataTypes.INTEGER,
    tweet: DataTypes.STRING,
    imgUrl: DataTypes.STRING
  }, {});
  Tweet.associate = function (models) {
    // associations can be defined here
    Tweet.belongsTo(models.User, {
      foreignKey: 'userId'
    }),
      Tweet.hasMany(models.Like, {
        foreignKey: 'tweetId',
        onDelete: 'CASCADE',
        hooks: true
      }),
      Tweet.hasMany(models.Retweet, {
        foreignKey: 'tweetId',
        onDelete: 'CASCADE',
        hooks: true
      }),
      Tweet.hasMany(models.Comment, {
        foreignKey: 'tweetId',
        onDelete: 'CASCADE',
        hooks: true
      }),
      Tweet.hasMany(models.Reply, {
        foreignKey: 'tweetId',
        onDelete: 'CASCADE',
        hooks: true
      })
  };
  return Tweet;
};

/*
Tweet.hasMany(models.Comment, {
      foreignKey: "songId",
      onDelete: "CASCADE",
      hooks: true,
    });
*/
