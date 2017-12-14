/**
 *----------------------------------------------
 * Author: xujie
 * Create Time: 2017/02/06 14:16
 * Desc: 消息代码
 * Changed list:
 *        Change author:(若修改请指明修改者)
 *        Change desc:(修改描叙)
 *        Change time:(修改的时间)
 *----------------------------------------------
 **/

module.exports = {
    //幸运之星礼品屋

    //weChatValidate: {
    //    token: 'Jke34iL98f4Fw0cxFUipm',
    //    appID: 'wxf8d99c6b9ce5fc01',                        //第三方用户的唯一凭证
    //    appSecret: '3ccc91554dd126bb2f441aaa56a337af' ,     //第三方用户唯一凭证的密钥
    //    notify_url: 'http://promoter.shxyzx.cn/pay_over',   //微信付款后的回调地址
    //    mch_id: '1445051402',                               //商户号
    //    key : 'hLhUbbgFhjL78bjkbV6KJ6KJBHhKJjbh',           //key值 签名用
    //    url : 'promoter.shxyzx.cn',                         //域名
    //    //vip_index授权地址
    //    vipIndexUrl : 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxf8d99c6b9ce5fc01&redirect_uri=http%3A%2F%2Fpromoter.shxyzx.cn%2Findex&response_type=code&scope=snsapi_userinfo&state=STATE&#wechat_redirect',
    //    //vip_giftMall授权地址
    //    vipGiftMallUrl : 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxf8d99c6b9ce5fc01&redirect_uri=http%3A%2F%2Fpromoter.shxyzx.cn%2Fvip_giftMall&response_type=code&scope=snsapi_userinfo&state=STATE&#wechat_redirect',
    //    //unConvertible授权地址
    //    unConvertibleUrl : 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxf8d99c6b9ce5fc01&redirect_uri=http%3A%2F%2Fpromoter.shxyzx.cn%2FunConvertible&response_type=code&scope=snsapi_userinfo&state=STATE&#wechat_redirect',
    //    //convertible授权地址
    //    convertibleUrl : 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxf8d99c6b9ce5fc01&redirect_uri=http%3A%2F%2Fpromoter.shxyzx.cn%2Fconvertible&response_type=code&scope=snsapi_userinfo&state=STATE&#wechat_redirect',
    //
    //    //分享是二维码携带的路由
    //    redirectURL: 'http://promoter.shxyzx.cn/shareBind',
    //    //与幸运之星服务器的交互的地址和端口号
    //    reqAddress:'http://114.55.95.171:3050'
    //}

    //雀友安徽麻将公众号

    weChatValidate: {
        token: 'Jke34iL98f4Fw0cxFUipm123',
        appID: 'wx9964eb410862d356',                        //第三方用户的唯一凭证
        appSecret: '6157b3d52591fb81b199941f71919b32' ,     //第三方用户唯一凭证的密钥
        notify_url: 'http://protest.shxyzx.cn/pay_over',     //微信付款后的回调地址
        mch_id: '1445051402',                               //商户号
        key : 'hLhUbbgFhjL78bjkbV6KJ6KJBHhKJjbh',           //key值 签名用
        //url : 'protest.shxyzx.cn',                           //域名
        url : 'kun.s1.natapp.cc',                           //域名
        //vip_index授权地址
        //vipIndexUrl : 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxf8d99c6b9ce5fc01&redirect_uri=http%3A%2F%2Fprotest.shxyzx.cn%2Findex&response_type=code&scope=snsapi_userinfo&state=STATE&#wechat_redirect',
        vipIndexUrl : 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxf8d99c6b9ce5fc01&redirect_uri=http%3A%2F%2Fkun.s1.natapp.cc%2Findex&response_type=code&scope=snsapi_userinfo&state=STATE&#wechat_redirect',
        //vip_giftMall授权地址
        vipGiftMallUrl : 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxf8d99c6b9ce5fc01&redirect_uri=http%3A%2F%2Fprotest.shxyzx.cn%2Fvip_giftMall&response_type=code&scope=snsapi_userinfo&state=STATE&#wechat_redirect',
        //unConvertible授权地址
        unConvertibleUrl : 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxf8d99c6b9ce5fc01&redirect_uri=http%3A%2F%2Fprotest.shxyzx.cn%2FunConvertible&response_type=code&scope=snsapi_userinfo&state=STATE&#wechat_redirect',
        //convertible授权地址
        convertibleUrl : 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxf8d99c6b9ce5fc01&redirect_uri=http%3A%2F%2Fprotest.shxyzx.cn%2Fconvertible&response_type=code&scope=snsapi_userinfo&state=STATE&#wechat_redirect',
        //分享是二维码携带的路由
        //redirectURL: 'http://protest.shxyzx.cn/shareBind',
        redirectURL: 'http://kun.s1.natapp.cc/shareBind',
        //与幸运之星服务器的交互的地址和端口号
        reqAddress:'http://114.55.219.50:3050'
    }

};
