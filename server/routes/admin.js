const dbConfig = require('../config/db.js');
const express = require('express');
const router = express.Router();
const mysql = require('mysql2');

const connection = mysql.createPool(dbConfig);


// 메인화면
router.get('/main', function(req, res) {
  connection.query('SHOW TABLES;', function(err, rows, fields) {
    if (!err) {
      console.log('The solution is: ', rows);
      res.send(rows);
    } else {
      console.log('Error while performing Query.', err);
    }
  });
});




module.exports = router;
