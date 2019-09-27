const express = require('express');
const router = express.Router();
const dbConfig = require('../config/db');
const mysql = require('mysql2');
const connection = mysql.createPool(dbConfig);


/**
 * 메인 캐로셀의 카테고리 목록(카드)을 조회하는 api
 * @return JSON
 */
router.get('/main/categories', (req, res) => {
  connection.query(`SELECT * FROM card_categories;`, function(err, rows) {
    if (!err) {
      console.log('The solution is: ', rows);
      res.send(rows);
    } else {
      console.log('Error while performing Query.', err);
    }
  });
});

/**
 * 메인 캐로셀의 컨텐츠 목록을 조회하는 api
 * @return JSON
 */
router.get('/main/contents', function(req, res) {
  connection.query(`SELECT * FROM main_contents`, function(err, rows) {
    if (!err) {
      console.log('The solution is: ', rows);
      res.send(rows);
    } else {
      console.log('Error while performing Query.', err);
    }
  });
});

/**
 * 미니 캐로셀의 컨텐츠 목록을 조회하는 api
 * @return JSON
 */
router.get('/mini/contents', (req, res) => {
  connection.query(`SELECT * FROM mini_contents`, function(err, rows) {
    if (!err) {
      console.log('The solution is: ', rows);
      res.send(rows);
    } else {
      console.log('Error while performing Query.', err);
    }
  });
});

/**
 * 미니 캐로셀의 텍스트 부분의 데이터를 조회하는 api
 * @return JSON
 */
router.get('/mini/text', (req, res) => {
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
