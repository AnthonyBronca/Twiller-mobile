'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reply = sequelize.define('Reply', {
    userId: DataTypes.NUMBER,
    tweetId: DataTypes.NUMBER,
    commentId: DataTypes.NUMBER,
    reply: DataTypes.STRING
  }, {});
  Reply.associate = function (models) {
    // associations can be defined here
    Reply.belongsTo(models.User, {
      foreignKey: 'userId'
    }),
      Reply.belongsTo(models.Tweet, {
        foreignKey: 'tweetId'
      }),
      Reply.belongsTo(models.Comment, {
        foreignKey: 'commentId'
      })
  };
  return Reply;
};


// Comment.belongsTo(models.User, {
//   foreignKey: 'userId'
// }),
// Comment.belongsTo(models.Tweet, {
//   foreignKey: 'tweetId'
// })
// Comment.hasMany(models.Reply, {
//   foreignKey: 'commentId'
// })
// };
