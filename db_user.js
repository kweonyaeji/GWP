const mysql = require('mysql');  // mysql 모듈 로드
const db_info = {  // mysql 접속 설정
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'myyj4093!',
    database: 'gwp_db'
};

module.exports = {
    init: function () {
        return mysql.createConnection(db_info);
    },
    connect: function(conn) {
        conn.connect(function(err) {
            if(err) console.error('mysql connection error : ' + err);
            else console.log('mysql is connected successfully!');
        });
    }
}