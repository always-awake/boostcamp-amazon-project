const dbConfig = require('../config/db.js');
const express = require('express');
const router = express.Router();
const mysql = require('mysql2');
const passport = require('passport');

const connection = mysql.createPool(dbConfig);

router.get('/', function(req, res) {
  console.log(req)
  res.send('어드민 페이지');
});

// 회원가입
router.get('/accounts', function(req, res) {
  let errorMsg = null;
  res.render('signup', {errorMsg: errorMsg});
});

// 로그인 폼 로딩
router.get('/login', function(req, res) {
  const { error } = req.flash();
  let errorMsg = null;
  if (error) {
    errorMsg = error[0];
    if (errorMsg === 'Missing credentials') {
      errorMsg = '아이디 또는 비밀번호를 다시 입력해주세요.'
    }
  }
  res.render('login', {errorMsg: errorMsg});
});

// 로그인
router.post('/login', passport.authenticate('local', {
  successRedirect: '/admin/main',
  failureRedirect: '/admin/login',
  failureFlash: true,
}));

// 로그아웃
router.get('/logout', function(req, res) {
  req.logout();
  req.session.save(() => {
    res.redirect('/admin/login');
  })
});

// 메인화면
router.get('/main', function(req, res) {
  if (req.user !== undefined) {
    connection.query('SHOW TABLES;', function(err, rows) {
      const tableList = [];
      if (!err) {
        const databaseInfo = Object.keys(rows[0])[0];
        const databaseName = databaseInfo.substring(10, databaseInfo.length).toUpperCase();
        for (let table of rows) {
          tableList.push(table[databaseInfo]);
        }
        res.render('main', {
          tableList: tableList,
          databaseName: databaseName,
          userName: req.user.name
        });
      } else {
        console.log('Error while performing Query.', err);
      }
    });
  } else {
    res.send('허용되지 않은 접근임');
  }
});

// 개별 데이터 조회
router.get('/:tableName/:pk', function(req, res) {
  const { tableName, pk, } = req.params;
  if (req.user !== undefined) {
    connection.query(`SELECT * FROM ${tableName} WHERE pk=${pk};`, function(err, row) {
      if (!err) {
        res.render('detail', {
          tableName: tableName,
          fields: Object.keys(row[0]),
          data: row[0],
          userName: req.user.name,
        });
      } else {
        console.log('데이터베이스 오류', err);
      }
    });
  } else {
    res.send('허용되지 않은 접근임');
  }
});

// 각 테이블 조회 (by table name)
router.get('/:tableName', function(req, res) {
  const { tableName } = req.params;
  connection.query(`SELECT * FROM ${tableName};`, function(err, rows) {
    if (!err) {
      const fieldList = Object.keys(rows[0]);
      res.render('table', {
        tableName: tableName,
        fieldList: fieldList,
        dataList: rows,
        dataLength: rows.length,
        userName: req.user.name,
      });
} else {
      console.log('데이터베이스 오류', err);
    }
  });
});

// 유저 목록 조회
router.get('/users', function(req, res) {
  connection.query(`SELECT pk, id, name, is_superuser FROM users;`, function(err, rows) {
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

// 메인 컨텐츠 목록
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

// 개별 메인 컨텐츠 목록
router.get('/main/contents/:pk', function(req, res) {
  const contentPk = req.params.pk;
  connection.query(`SELECT * FROM main_contents WHERE pk=${contentPk};`, function(err, rows) {
    if (!err) {
      console.log('The solution is: ', rows);
      res.send(rows);
    } else {
      console.log('Error while performing Query.', err);
    }
  });
});




module.exports = router;
