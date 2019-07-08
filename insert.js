let readlineSync = require('readline-sync');
const table = require('table');
let name = readlineSync.question('Give the name of the game!\n');
let desc = readlineSync.question('Give a description of the game!\n');

let str = 'insert into games (name, description) values ("' + name + '", "' + desc + '");';
console.log(str);

const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:linuxconfig.org@localhost/zeta_test');
// console.log(sequelize);
sequelize
  .authenticate()
  .then(() => {
    sequelize.query(str).then(result => {
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

sequelize
  .authenticate()
  .then(() => {
    sequelize.query('select * from games').then(result => {
      let rows = result[0];
      let matrix = [];
      for (let i = 0; i < rows.length; i++) {
        let row = rows[i];
        matrix.push([row.id, row.name, row.description]);
      }
      console.log(table.table(matrix));
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
