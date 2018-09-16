

    const mysql = require(`mysql`);

    module.exports = function (sql,value,callback) {

        let config = mysql.createConnection({
            //host 数据库的地址
            host:"localhost",
            user:"root",
            password:"123456",
            port:"3306",        //=>数据库的端口
            database:"test"     //=>使用哪个数据库
        }); //=>建立配置

        config.connect();
        //  进行数据库的操作 1.数据库代码 2.回调函数
        //  插入数据库的操作 1.数据库代码  2.动态的值[] 3.回调函数
        config.query(sql,value,(err,data) =>{
            callback && callback(err,data);
        });
        config.end(); //=>结束连接
    };




