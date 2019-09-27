const {
  dataUpdateQuery,
  getTableFieldList,
  getTableList,
  getSingleData,
  getTable
} = require('./utils/query.js');
const dbConfig = require('../config/db.js');
const express = require('express');
const router = express.Router();
const mysql = require('mysql2');
const connection = mysql.createPool(dbConfig);
const passport = require('passport');
const multer = require('multer');
const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'media/static_root');
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  }),
});

/**
 * 유저의 로그인 여부에 따라 다른 화면 렌더링
 */
router.get('/', (req, res) => {
  (req.user !== undefined) ?
      res.redirect('/admin/main') : res.redirect('admin/login');
});

/**
 * 회원 가입 폼 렌더링
 */
router.get('/accounts', (req, res) => {
  let errorMsg = null;
  res.render('signup', {errorMsg: errorMsg});
});

/**
 * 로그인 폼 렌더링
 */
router.get('/login', (req, res) => {
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

/**
 * 로그인
 * passport 모듈 사용
 */
router.post('/login', passport.authenticate('local', {
  successRedirect: '/admin/main',
  failureRedirect: '/admin/login',
  failureFlash: true,
}));

/**
 * 로그아웃
 * passport 모듈 사용
 * 로그아웃이 성공적으로 완료되면 로그인 폼 렌더링
 */
router.get('/logout', (req, res) => {
  req.logout();
  req.session.save(() => {
    res.redirect('/admin/login');
  })
});

/**
 * 메인화면 렌더링
 * 데이터 베이스 내 테이블에 따라 동적으로 화면 렌더링
 */
router.get('/main', (req, res) => {
  if (req.user !== undefined) {
    connection.query(getTableList(), function(err, rows) {
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
        console.log('데이터베이스 오류: ', err);
      }
    });
  } else {
    res.send('허용되지 않은 접근');
  }
});

/**
 * 새로운 데이터 생성 폼 렌더링
 * 각 데이터의 구조(필드 수)에 따라 유동적 변경된 폼 렌더링
 */
router.get('/:tableName/new', (req, res) => {
  if (req.user !== undefined) {
    const { tableName } = req.params;
    connection.query(getTableFieldList(tableName), function(err, columns) {
      if (!err) {
        const fields = [];
        for (let column of columns) {
          if (!column['COLUMN_NAME'].includes('pk'))
            fields.push(column['COLUMN_NAME'])
        }
        res.render('add', {
          tableName: tableName,
          fields: fields,
          userName: req.user.name,
        });
      } else {
        console.log('데이터베이스 오류: ', err);
      }
    });
  } else {
    res.send('허용되지 않은 접근');
  }

});

/**
 * 새로운 데이터 생성 - 미완성
 */
router.post('/:tableName/new', upload.single('uploadImg'), (req, res) => {
  if (req.user !== undefined) {
    const { tableName } = req.params;
    const fieldList = Object.keys(tableName);
    const userPk = req.user.pk;

    let query = '';
    if (tableName === 'users') {
      console.log('유저 생성');
      console.log(req.body);

    } else if (req.file) {
      console.log('사진이 포함된 데이터 생성');
      const uploadImg = req.file;
      const imgUrl = uploadImg.path;
      const fieldList = Object.keys(req.body);
      let subQuery = '';
      let fieldListQuery = '';

      // 필드 리스트 쿼리 부분 생성
      for (let field of fieldList) {
        fieldListQuery += `${field}, `;
      }
      fieldListQuery = fieldListQuery.substring(0, fieldListQuery.length - 2);
      console.log(subQuery.substring(0, subQuery.length -2));
    } else {
      console.log('사진이 포함되지 않고, 유저가 아닌 데이터 생성');
    }
  }
});

/**
 * 개별 데이터 조회
 * request param의 테이블 이름, 개별 데이터의 pk로 조회
 */
router.get('/:tableName/:pk', (req, res) => {
  const { tableName, pk } = req.params;
  if (req.user !== undefined) {
    connection.query(getSingleData(tableName, pk), function(err, row) {
      if (!err) {
        res.render('detail', {
          tableName: tableName,
          fields: Object.keys(row[0]),
          data: row[0],
          userName: req.user.name,
        });
      } else {
        console.log('데이터베이스 오류: ', err);
      }
    });
  } else {
    res.send('허용되지 않은 접근');
  }
});

/**
 * 개별 데이터 수정
 */
router.post('/:tableName/:pk', (req, res) => {
  if (req.user !== undefined) {
    connection.query(dataUpdateQuery(req.params, req.body), function(err, row) {
      if (!err) {
        res.redirect(`/admin/${req.params.tableName}`);
      } else {
        console.log('데이터베이스 오류: ', err);
      }
    });
  } else {
    res.send('허용되지 않은 접근');
  }
});

/**
 * 각 테이블 조회
 * request param의 테이블 이름으로 조회
 */
router.get('/:tableName', (req, res) => {
  if (req.user !== undefined) {
    const { tableName } = req.params;
    connection.query(getTable(tableName), function(err, rows) {
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
        console.log('데이터베이스 오류: ', err);
      }
    });
  } else {
    res.send('허용되지 않은 접근');
  }
});

module.exports = router;
