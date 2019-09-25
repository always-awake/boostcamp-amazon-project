const LocalStrategy = require('passport-local').Strategy;
const mysql = require('mysql2');
const dbConfig = require('./db.js');

const connection = mysql.createPool(dbConfig);

module.exports = (passport) => {
  passport.serializeUser((authUser, done) => {
    done(null, authUser);
  });
  passport.deserializeUser((authUser, done) => {
    done(null, authUser);
  });

  passport.use(new LocalStrategy({
    usernameField: 'id',
    passwordField: 'password',
    session: true,
    passReqToCallback: false,
    }, (id, password, done) => {
    connection.query(`SELECT * FROM users WHERE id='${id}';`, function(err, rows) {
      const user = rows[0];
      if (err) {
        console.log('데이터베이스 오류: ', err);
        return done(err);
      } else if (!user) {
        return done(null, false, { message: '아이디 잘못입력' });
      } else if (user.password !== password) {
        return done(null, false, { message: '비밀번호 잘못입력' })
      } else if (user.is_superuser === 0) {
        return done(null, false, { message: '관리자가 아닙니다.' })
      }
      const authUser = {
        pk: user['pk'],
        id: user['id'],
        name: user['name'],
        is_superuser: user['is_superuser'],
      };
      return done(null, authUser);
    });
  }));
};