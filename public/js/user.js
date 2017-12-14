/**
 * Created by Administrator on 2017/12/6.
 */
window.onload = function(){

    //$("html").css('height', window.innerHeight);

    var $head = $("#user-head");
    var $advertise = $("#user-advertise");
    var $detail = $("#user-detail");
    var $indicator = $("#indicator");
    var $item = $("#carousel-item").children();

    $head.addClass('show-private');
    $advertise.addClass('show-private');
    $detail.addClass('show-private');

    pullDownRefresh();

    $.post('/userData', function(data){
        var {name, phone, regTime, pic} = data;

        var text = `<div class="col-xs-4">
                        <img src="${pic}" alt=""/>
                        <a class="btn-private code" href="qrcode.html">我的二维码</a>
                        </div>
                        <div class="rgt-head col-xs-8">
                        <div class="ipt-box row">
                        <label class="control-label">昵称</label>
                        <div class="content">
                        <input type="text" disabled class="form-control" value="${name}">
                        </div>
                        </div>
                        <div class="ipt-box row">
                        <label class="control-label">手机号</label>
                        <div class="content">
                        <input type="text" disabled class="form-control" value="${phone}">
                        </div>
                        </div>
                        <div class="ipt-box row">
                        <label class="control-label">加入时间</label>
                        <div class="content">
                        <input type="text" disabled class="form-control" value="${regTime}">
                        </div>
                        </div>
                        <div class="ipt-box row">
                        <label class="control-label">推广好友</label>
                        <div class="content">
                        <a id="share" class="btn-private" href="">分享</a>
                        </div>
                        </div>
                        </div>`;
        $head.html(text);
    });


    $indicator.on('click', function(e){

        var index = e.target.dataset.slideTo;

        $(e.target).addClass('active-indicator').siblings().removeClass('active-indicator');
        $($item[index]).addClass('active-item').siblings().removeClass('active-item');

    });

    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        autoplay: 3000,
        autoplayDisableOnInteraction: false,

        // 如果需要分页器
        pagination: '.swiper-pagination',
        paginationClickable: true
    })



};