

    const express = require('express'),
        router = express.Router();

    router.get('/',(req,res) => {
        // res.send()响应数据的方法之一
        // res.sendFile() 绝对路径 响应一个文件的方法
        // res.json()  响应json数据
        // ../上一级目录  ./ 当前目录    /  根目录 F:/
        res.sendFile(process.cwd() + '/views/index.html')
    });


    //router.get('/',(req,res) => {}) 这里的网址能用正则匹配

    //http://127.0.0.1:233/admin/1234
    router.get('/1234',(req,res) => {
        res.sendFile(process.cwd() + '/views/index.html')
    });

    router.get('/123',(req,res) => {
        res.send('Word')
    });

    module.exports = router;