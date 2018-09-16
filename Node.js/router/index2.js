

        const express = require('express'),
            router = express.Router();


        router.get('/',(req,res) => {
            const json = {
                "name":"surenjun",
                "age":18,
            };
            res.render('index.ejs',{data : json});
            //ejs可省略  用于响应模板引擎文件的 {}后面为传递的数据
        });

        module.exports = router;