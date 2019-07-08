const Sequelize = require('sequelize');
const table = require('table');
const sequelize = new Sequelize('mysql://root:linuxconfig.org@localhost/zeta_test');
// console.log(sequelize);
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
