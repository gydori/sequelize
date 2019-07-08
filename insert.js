// insert into games (name, description) values("", "");

let readline = require('readline-sync');
let name = readline.question('Give the name of the game!\n');
let desc = readline.question('Give a description of the game!\n');

let str = 'insert into games (name, description) values ("' + name + '", "' + desc + '");';
console.log(str);

const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:linuxconfig.org@localhost/zeta_test');
// console.log(sequelize);
sequelize
  .authenticate()
  .then(() => {
    sequelize.query(str).then(result => {
      console.log('beszúrtam');
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
