/**
 * Created by Administrator on 2017/12/4.
 */
window.onload = function(){

    //$("html").css('height', window.innerHeight);

    var $head = $("#profit-head");
    var $body = $("#table-body");
    var $earned = $("#profit-earned");
    var $detail = $("#profit-detail");
    var $h1 = $detail.children().first();

    $head.addClass('show-private');
    $earned.addClass('show-private');
    $detail.addClass('show-private');

    pullDownRefresh();

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
                data : ['小鸡','小鸭','小狗','小驴','小蚊子','小苍蝇','小猫','小鸡','小鸭','小狗','小驴','小鸟'],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis : [{
            name: '收益额 (元)'
        }],
        series : [{
            name:'总收益',
            type:'bar',
            barWidth: '60%',
            data:[1000, 2000, 3000, 2000, 1000, 2000, 3000,2000,1000,2000,3000,2000]
        }],
        dataZoom: [{
            type: "inside",
            show: false,
            //start: 70,
            //end: 100,
            startValue: 0,
            endValue: 4,
            preventDefaultMouseMove: false
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);


    $.get('/profitData', function(data){
        console.log(data);
        var {machine, profit, total} = data;

        var tableInner = '';
        for(var i = 0; i < profit.length; i++){
            tableInner += `<tr>
            <td>${profit[i].name}</td>
            <td class="profit-td">${profit[i].profit}</td>
            </tr>`
        }

        if(total.num.length == 0){
            $h1.text('暂无数据');
        }else{
            $h1.text('机台总收益');
        }

        myChart.setOption({
            xAxis: {
                data: total.type
            },
            series:[{
                name:'总收益',
                data : total.num
            }]

        });
        $head.html(`<div class="col-xs-6"> <strong>机台类型：</strong> <span>${machine.type}</span> </div>
                    <div class="col-xs-6"> <strong>机台数量：</strong> <span>${machine.num}</span> </div>
                    <div class="col-xs-6"> <strong>机台数量：</strong> <span>99</span> </div>
                    <div class="col-xs-6"> <strong>空闲机台：</strong> <span>${machine.empty}</span> </div>`);
        $body.html(tableInner);
    });

};