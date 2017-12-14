/**
 * Created by Administrator on 2017/12/6.
 */
window.onload = function(){

    var $body = $("#table-body");
    var $start = $("#start-time");
    var $end = $("#end-time");
    var $profit = $("#get-profit");
    var $money = $("#get-money");
    var $time = $("#search-time");
    var $data = $("#user-data");

    $money.addClass('show-private');
    $time.addClass('show-private');
    $data.addClass('show-private');

    pullDownRefresh();

    $profit.click(function(){
        console.log($start.val(),$end.val());
    });

    $.get('/defaultProfit',function(data){
        if(data.length == 0){
            $body.html('暂无数据');
        }else{
            var text = '';

            for(var i = 0; i < data.length; i++){
                text += `<tr><td>${data[i].pic}</td>
                <td>${data[i].id}</td>
                <td>${data[i].regTime}</td>
                <td class="myprofit-td">${data[i].money}</td></tr>`;
            }

            $body.html(text);


        }

    });

};