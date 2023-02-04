'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      */
    return queryInterface.bulkInsert('Users', [
      { username: 'Demo', fullname: 'Demo User', email: 'demo@demo.com', bio: 'I am the demo user', profilePic: 'https://newtwiller.s3.amazonaws.com/twitter-egg.jpg', hashedPassword: 'twiller', verified: false, state: 'Florida', country: 'USA', link: '' },
      { username: 'abronca', fullname: 'AnthonyBronca', email: 'abronca@admin.io', bio: 'Welcome to my twitter clone! Feel free to check my portfolio!', profilePic: 'https://newtwiller.s3.amazonaws.com/anthony-profile.jpg', hashedPassword: 'twiller', verified: true, state: 'Florida', country: 'USA', link: 'https://newtwiller.s3.amazonaws.com/wave.jpg' },
      { username: 'Elon Musk', fullname: 'elonmusk', email: 'elonmusk@demo.com', bio: 'CEO of Real Twitter', profilePic: 'https://newtwiller.s3.amazonaws.com/elon.jpg', hashedPassword: 'twiller', verified: true, state: 'California', country: 'USA', link: 'https://newtwiller.s3.amazonaws.com/1500x500.jpg' },
      { username: 'Joe Biden', fullname: 'JoeBiden', email: 'biden@demo.com', bio: '', profilePic: 'https://newtwiller.s3.amazonaws.com/biden.jpg', hashedPassword: 'biden', verified: true, state: 'Washington, DC', country: 'USA', link: 'https://newtwiller.s3.amazonaws.com/bidenheader.jpg' },
      { username: 'UCF Knights', fullname: 'UCFKnights', email: 'knights@ucf.com', bio: '👋 @Big12Conference', profilePic: 'https://newtwiller.s3.amazonaws.com/ucflogo.jpg', hashedPassword: 'chargeon', verified: true, state: 'Florida', country: 'USA', link: 'https://newtwiller.s3.amazonaws.com/ucfheader.jpg' },
      { username: 'Starbucks Coffee', fullname: 'Starbucks', email: 'starbucks@demo.com', bio: "Make today a good day. 💚", profilePic: 'https://newtwiller.s3.amazonaws.com/starbuckslogo.jpg', hashedPassword: 'starbucks', verified: false, state: 'Washington', country: 'USA', link: 'https://newtwiller.s3.amazonaws.com/starbucksheader.jpg' },
      { username: 'Wattson', fullname: 'Natalie Paquette', email: 'wattson@apex.com', bio: 'NESSIESSS!!!! Hehee', profilePic: 'https://newtwiller.s3.amazonaws.com/wattson-profile.jpg', hashedPassword: 'twiller', verified: false, state: 'Paris', country: 'France', link: '' },
      { username: 'Nessie', fullname: 'Nessie Apex', email: 'nessie@demo.com', bio: 'cute little plushie', profilePic: 'https://newtwiller.s3.amazonaws.com/1655236694455.png', hashedPassword: 'twiller', verified: false, state: 'Florida', country: 'USA', link: '' },
      { username: 'Financial Times', fullname: 'FinancialTimes', email: 'finance@demo.com', bio: 'The best of FT Journalism, including breaking news and analysis.', profilePic: 'https://newtwiller.s3.amazonaws.com/financial.jpg', hashedPassword: 'twiller', verified: false, state: 'New York', country: 'USA', link: 'https://newtwiller.s3.amazonaws.com/ftheader.jpg' },
      { username: 'App Academy', fullname: 'App Academy', email: 'aa@aa.io', bio: 'Immersive software engineering programs. No experience required. Pay $0 until you\'re hired. Join an online info session to learn more', profilePic: 'https://newtwiller.s3.amazonaws.com/1655236371746.png', hashedPassword: 'appacademy', verified: false, state: 'California', country: 'USA', link: 'https://newtwiller.s3.amazonaws.com/aaheader.jpg' }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      */
    return queryInterface.bulkDelete('Users', null, {});
  }
};
