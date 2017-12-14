//var request = require('request');
//var url = require('url');
//var myTools = require('../utils/myTools');
//var wxTools = require('../utils/wxTools');
//var utils = require('../utils/utils');
//var weChatConst = require('../utils/wechatConst');
/*
 * GET home page.
 */

var indexData = {                       //首页测试数据
    profit: {
        today: 1200,
        total: 9999999
    },
    number: {
        totalNum: 110101010,
        newNum: 15,
        totalAgent: 20,
        newAgent: 5
    },
    total: {
        date: ['10.29','10.30','10.31','11.1','11.2','11.3','11.4'],
        num: []
    }

};

var profitData = {                      //营收测试数据
    machine: {
        type: 10,
        num: 99,
        empty: 15
    },
    profit: [{
        name: '小黄鸡',
        profit: 300
    },{
        name: '小黄鸭',
        profit: 99999999
    },{
        name: '小黄狗',
        profit: 300
    },{
        name: '小黄驴',
        profit: 0
    },{
        name: '小黄猫',
        profit: 300
    },{
        name: '小蚊子',
        profit: 300
    }],
    total: {
        type: ['小鸡','小鸭','小狗','小驴','小蚊子','小苍蝇','小猫'],
        num: [5200,6500,3100,2000,1000,100,6000]
    }
};

var wardData = {                        //奖品测试数据
    wardDetail: []
};

var userData = {                        //用户测试数据
    name: '杨光萍',
    phone: 18502870142,
    regTime: '2017-12-06',
    pic: 'img/head_non.png'
};

var myUser = [{                         //我的用户测试数据
    pic: '',
    id: 12345,
    regTime: '2017-11-11',
    recentLog: '2017-12-05',
    totalMoney: 9999
},{
    pic: '',
    id: 12345,
    regTime: '2017-11-11',
    recentLog: '2017-12-05',
    totalMoney: 9999
},{
    pic: '',
    id: 12345,
    regTime: '2017-11-11',
    recentLog: '2017-12-05',
    totalMoney: 9999
}];

var myAgent = [];                       //我的代理测试数据

var profitDefault = [{pic: '', id: 12345, regTime: '2017-11-11', money: 150},       //我的营收测试数据
    {pic: '', id: 12345, regTime: '2017-11-11', money: 150},
    {pic: '', id: 12345, regTime: '2017-11-11', money: 150},
    {pic: '', id: 12345, regTime: '2017-11-11', money: 150},
    {pic: '', id: 12345, regTime: '2017-11-11', money: 150},
    {pic: '', id: 12345, regTime: '2017-11-11', money: 150},
    {pic: '', id: 12345, regTime: '2017-11-11', money: 150},
    {pic: '', id: 12345, regTime: '2017-11-11', money: 150},
    {pic: '', id: 12345, regTime: '2017-11-11', money: 150},
    {pic: '', id: 12345, regTime: '2017-11-11', money: 150},
    {pic: '', id: 12345, regTime: '2017-11-11', money: 150},
    {pic: '', id: 12345, regTime: '2017-11-11', money: 150},
    {pic: '', id: 12345, regTime: '2017-11-11', money: 150},
    {pic: '', id: 12345, regTime: '2017-11-11', money: 150}];


var checkUser = function(){




};

module.exports = function(app){
    
    app.get('/', function(req, res) {
        
        res.render('index', { title: 'Express' });
        
    });

    app.get('/indexData', function(req, res, next){

        res.send(indexData);

    });

    app.get('/profitData', function(req, res, next){

        res.send(profitData);

    });

    app.get('/wardRecord', function(req, res, next){

        res.send(wardData);

    });

    app.post('/userData', function(req, res, next){

        res.send(userData);

    });

    app.get('/myUser', function(req, res, next){

        res.send(myUser);

    });

    app.get('/myAgent', function(req, res, next){

        res.send(myAgent);

    });

    app.get('/defaultProfit', function(req, res, next){

        res.send(profitDefault);

    });
};
