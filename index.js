//引入所需模块
require.config({
    paths:{
        jquery:'lib/jquery-2.1.1.min'
    }
});
//如果所需模块与当前的index.js在同一目录下，则不需要进行所需模块的引入，直接在将文件名放入（即juqery改为jquery-2.1.1.min.js）
define(['jquery'],function ($) {
    'user strict';
    $(function () {
        $("#rqBox").html('<h1>rq引入模块化学习！</h1>');
    });
});


