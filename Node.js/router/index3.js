

    const express = require('express'),
        router = express.Router(),
        sql = require('../module/mysql.js'); //引入mysql文件里的模块

    router.get('/',(req,res) => {
        sql('SELECT * FROM `users`',(err,data) =>{
            res.render('index.ejs',{data : data});
        });

    });

    router.get('/post',(req,res) => {
        res.render('post.ejs')
    });

    router.get('/reg',(req,res)=>{  //获取点get方式提交的内容
        //？代表动态数据
        sql('INSERT INTO `users`(`userName`,`password`) VALUES (?,?)',[req.query['name'],req.query['pass']],(err,data)=>{
            res.json({
                "success":"成功"
            })
        })

    });

    router.post('/reg',(req,res)=>{
        console.log(req.body);
    });

    //      router.use()和router.all()  可以接收get和post两种方式
    module.exports = router;