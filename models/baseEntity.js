/**
 *----------------------------------------------
 * Author: xujie
 * Create Time: 2016/06/07 15:15
 * Desc: (这里写描叙)
 * 父类对象
 * Changed list:
 *        Change author:(若修改请指明修改者)
 *        Change desc:(修改描叙)
 *        Change time:(修改的时间)
 *----------------------------------------------
 **/
var util = require('util');
var EventEmitter = require('events').EventEmitter;

var baseEntity = function(opts){
    EventEmitter.call(this);

    this.id = opts.id || '0';
};
util.inherits(baseEntity, EventEmitter);


module.exports = baseEntity;