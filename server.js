const express = require('express');
const path = require('path');
const Sequelize = require('sequelize');



const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PW,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3001,
    },
  );

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log('Server listening on: http://localhost:' + PORT);
});
