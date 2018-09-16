

    const http = require(`http`),
        express = require('express'),
        app = express(),
        bodyParser = require('body-parser');

    //设置引擎的目录
    app.set("views",__dirname + "/views");

    //设置使用的模板引擎是什么
    app.set("view engine","ejs");

    //设置静态资源目录 js img css
    app.use("/abc",express.static(__dirname + "/public")); //  /abc/img 只有访问abc路径是才能调用

    app.use(bodyParser.json());                            //=>用来接收post方式
    app.use(bodyParser.urlencoded({extented:true}));  //可以接收任何数据类型的数据

    app.use('/',require('./router/index3'));

    app.use('/login',require('./router/login'));

    http.createServer(app).listen(233);