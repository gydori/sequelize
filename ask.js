let readlineSync = require('readline-sync');
const table = require('table');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:linuxconfig.org@localhost/zeta_test');

console.log('Do you want to insert new data? (y/n)');
let key = readlineSync.keyIn();

switch (key) {
  case 'y':
    let name = readlineSync.question('Give the name of the game!\n');
    let desc = readlineSync.question('Give a description of the game!\n');

    let str = 'insert into games (name, description) values ("' + name + '", "' + desc + '");';
    console.log(str);
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
    break;
  case 'n':
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
    break;
  default:
    console.log('That\'s not an option');
}
