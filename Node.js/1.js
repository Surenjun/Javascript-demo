
//当前文件的路径
console.log(__filename);

//当前文件的目录
console.log(__dirname);

console.log(process.cwd());

//process node进程的工作目录 全局下的一个对象
//console.log(process.cwd());

//怎么引用模块

//require('./1.js');       //=>引入当前目录下的1.js 后缀可省略 ./1

//核心模块   1.是安装好node就有的模块  2.node_modules这个文件夹下的模块
//require('./')和require('/')  是有区别的

//4.模块的加载机制:  文件名 > 文件名.js > 文件名.json > 文件名.node

//5.模块之间的相互使用
   let a = `surenjun`;

   module.exports = a; //告诉引用的文件 可以使用