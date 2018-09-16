

const http = require(`http`),
    express = require('express'),
    // 初始化
    app = express();

    // 响应浏览器的方法
    //第一个参数访问的路径  2.回调

    app.get('/',(req,res) => {
        // 响应数据的方法之一

        res.send(`Hello Word!!!`)
    });

    // 访问当前路径的时候  使用index文件里 的路由方法
    // 访问当前路径的时候   交给index处理
    //  比如 http://www.baidu.com/

    //  http://localhost:233
    app.use('/',require('./router/index'));

    //http://localhost:233/admin
    app.use('/admin',require('./router/index'));

    //app.use('/',require('./routor/index'));

    http.createServer(app).listen(233);