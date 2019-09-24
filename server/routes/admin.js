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
  connection.query('SELECT pk, id, name, is_superuser FROM users;', function(err, rows) {
    if (!err) {
      console.log('The solution is: ', rows);
      res.send(rows);
    } else {
      console.log('Error while performing Query.', err);
    }
  });
});

// 개별 유저 목록 조회
router.get('/users/:pk', function(req, res) {
  const userPk = req.params.pk;
  connection.query(`SELECT * FROM users WHERE pk=${userPk};`, function(err, rows) {
    if (!err) {
      console.log('The solution is: ', rows);
      res.send(rows);
    } else {
      console.log('Error while performing Query.', err);
    }
  });
});

// 카테고리 목록
router.get('/main/categories', function(req, res) {
  connection.query(`SELECT * FROM card_categories;`, function(err, rows) {
    if (!err) {
      console.log('The solution is: ', rows);
      res.send(rows);
    } else {
      console.log('Error while performing Query.', err);
    }
  });
});

// 미니 컨텐츠 목록
router.get('/mini/contents', function(req, res) {
  connection.query(`SELECT * FROM mini_contents`, function(err, rows) {
    if (!err) {
      console.log('The solution is: ', rows);
      res.send(rows);
    } else {
      console.log('Error while performing Query.', err);
    }
  });
});

// 개별 미니 개별 컨텐츠 조회
router.get('/mini/contents/:pk', function(req, res) {
  const contentPk = req.params.pk;
  connection.query(`SELECT * FROM mini_contents WHERE pk=${contentPk};`, function(err, rows) {
    if (!err) {
      console.log('The solution is: ', rows);
      res.send(rows);
    } else {
      console.log('Error while performing Query.', err);
    }
  });
});

// 미니 텍스트 목록
router.get('/mini/text', function(req, res) {
  connection.query(`SELECT * FROM mini_text`, function(err, rows) {
    if (!err) {
      console.log('The solution is: ', rows);
      res.send(rows);
    } else {
      console.log('Error while performing Query.', err);
    }
  });
});





module.exports = router;
