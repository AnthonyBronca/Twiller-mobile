'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      */
    return queryInterface.bulkInsert('Tweets', [
      { userId: 1, tweet: 'My first tweet', imgUrl: '', createdAt: new Date(), updatedAt: new Date() },
      { userId: 2, tweet: 'My first tweet', imgUrl: '', createdAt: new Date(), updatedAt: new Date() },
      { userId: 3, tweet: 'Ordered "How to Scam" book months ago but still not arrived. Starting to think it coule be ... but no I\'m sure it\'s coming soon.', imgUrl: '', createdAt: new Date(), updatedAt: new Date() },
      { userId: 4, tweet: 'Some airlines charge extra to pick your seat, including for parents who want to sit next to their child on a plane. Congress should pass the Junk Fee Protection Act so we can crack down on these fees and give hard-working Americans just a little bit more breathing room.', imgUrl: '', createdAt: new Date(), updatedAt: new Date() },
      { userId: 5, tweet: 'Twiller the last 24hrs 👀 ', imgUrl: 'https://newtwiller.s3.amazonaws.com/trophy.png', createdAt: new Date(), updatedAt: new Date() },
      { userId: 6, tweet: 'A gift that lasts all year round. The next time you use any reusable cup at Starbucks, including the Red Cup, you\'ll get 25 Bonus Stars. 🌟 *At participating stores on in-store beverage purchases (max 3x/day). For benefit, you must have made at least 1 Star earning transaction.', imgUrl: 'https://newtwiller.s3.amazonaws.com/coffee.jpg', createdAt: new Date(), updatedAt: new Date() },
      { userId: 1, tweet: 'Does anyone know where to watch the new star wars show?', imgUrl: '', createdAt: new Date(), updatedAt: new Date() },
      { userId: 2, tweet: "I'm building a twitter clone!", imgUrl: '', createdAt: new Date(), updatedAt: new Date() },
      { userId: 3, tweet: 'Congrats Falcon & Starlink teams!', imgUrl: 'https://newtwiller.s3.amazonaws.com/starlink.jpg', createdAt: new Date(), updatedAt: new Date() },
      { userId: 4, tweet: 'I remain committed to bringing us in line with every other major economy in the world by passing a national program of paid and medical leave.', imgUrl: 'https://newtwiller.s3.amazonaws.com/biden+walk.jpg', createdAt: new Date(), updatedAt: new Date() },
      { userId: 2, tweet: 'Ever wonder what is at the end of a rainbow?', imgUrl: '', createdAt: new Date(), updatedAt: new Date() },
      { userId: 2, tweet: 'OOOO I am verified!', imgUrl: '', createdAt: new Date(), updatedAt: new Date() },
      { userId: 1, tweet: 'I can make replies to tweets too!', imgUrl: '', createdAt: new Date(), updatedAt: new Date() },
      { userId: 7, tweet: 'Hello! My name is Wattson! I am apex legend, and this is my favorite pal Nessie!!!', imgUrl: 'https://newtwiller.s3.amazonaws.com/1654883613529.jpeg', createdAt: new Date(), updatedAt: new Date() },
      { userId: 9, tweet: 'Just published: front page of the Financial Times UK edition Saturday February 4', imgUrl: 'https://newtwiller.s3.amazonaws.com/ftpost.jpg', createdAt: new Date(), updatedAt: new Date() },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      */
    return queryInterface.bulkDelete('Tweets', null, {});
  }
};
