const express = require('express'),
    router = express.Router();
    sql = require('../module/mysql.js'); //引入mysql文件里的模块

router.get('/',(req,res) => {
    res.render("login");
});

router.post('/',(req,res) => {
    const  user = req.body.user,
           password = req.body.password;
    sql(`select * from users where userName = ?`,[user],(err,data)=>{

        if(!data.length){
            //可以注册
            sql('INSERT INTO `users`(`userName`,`password`) VALUES (?,?)',[user,password],(err,data)=>{
                if(err){
                    res.render('err.js');
                    return;
                }
                res.render('login',{ result : "成功"});
            })
        }else{
            //不可以注册
            console.log("不可以注册");

        }
    });
});
module.exports = router;