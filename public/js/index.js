/**
 * Created by Administrator on 2017/12/4.
 */
window.onload = function(){

    //$("html").css('height', window.innerHeight);
    //alert(document.body.clientHeight);
    //alert(screen.availHeight);
    //alert(window.innerHeight);

    var $earn = $("#index-earn");
    var $data = $("#index-data");
    var $nav = $("#index-nav");
    var $show = $("#index-show");
    var $h1 = $show.children().first();

    pullDownRefresh();

    $earn.addClass('show-private');
    $data.addClass('show-private');
    $nav.addClass('show-private');
    $show.addClass('show-private');

    var myChart = echarts.init($('#charts')[0]);

    var option = {
        color: ['#3398DB'],
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        xAxis : [
            {
                type : 'category',
                data : ['10.1', '10.2', '10.3', '10.4', '10.5', '10.6', '10.7'],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis : [{
            name: '单位（元）'
        }],
        series : [{
            name:'收益',
            type:'bar',
            barWidth: '60%',
            data:[10, 52, 200, 334, 10, 10, 10]
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);


    let p = new Promise(function(resolve, reject){
        $.get('/indexData', function(data){
            resolve(data);
        });
    });

    p.then(function(data){
        console.log(data);
    });

    //$.get('/indexData', function(data){
    //    console.log(data);
    //    var {profit, number, total} = data;
    //
    //    if(total.num.length == 0){
    //        $h1.text('暂无数据');
    //    }else{
    //        $h1.text('最近七天收益');
    //    }
    //
    //    myChart.setOption({
    //        xAxis: {
    //            data: total.date
    //        },
    //        series:[{
    //            name:'收益',
    //            data : total.num
    //        }]
    //
    //    });                      //更新图标数据
    //    $earn.html(`<div class="col-xs-6"> <h2>今日收益</h2> <p>￥${profit.today}</p> </div>
    //                <div class="col-xs-6"> <h2>累计收益</h2> <p>￥${profit.total}</p> </div>`);
    //    $data.html(`<div class="col-xs-6"> <strong>总玩家数：</strong> <span>${number.totalNum}</span> </div>
    //                <div class="col-xs-6"> <strong>下级代理数：</strong> <span>${number.totalAgent}</span> </div>
    //                <div class="col-xs-6"> <strong>新增玩家数：</strong> <span>${number.newNum}</span> </div>
    //                <div class="col-xs-6"> <strong>新增代理数：</strong> <span>${number.newAgent}</span> </div>`);
    //});




};