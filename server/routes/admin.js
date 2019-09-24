const dbConfig = require('../config/db.js');
const express = require('express');
const router = express.Router();
const mysql = require('mysql2');

const connection = mysql.createPool(dbConfig);

router.get('/', function(req, res) {
  res.send('어드민 페이지');
});

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

// 유저 목록 조회
router.get('/users', function(req, res) {
  connection.query('SELECT * FROM users;', function(err, rows) {
    if (!err) {
      console.log('The solution is: ', rows);
      res.send(rows);
    } else {
      console.log('Error while performing Query.', err);
    }
  });
});




module.exports = router;
