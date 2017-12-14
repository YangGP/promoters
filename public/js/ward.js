/**
 * Created by Administrator on 2017/12/5.
 */
window.onload = function(){

    //$("html").css('height', window.innerHeight);

    var $record = $("#ward-record");
    var $head = $("#ward-head");
    var $earned = $("#ward-earned");
    var $detail = $("#ward-detail");

    $head.addClass('show-private');
    $earned.addClass('show-private');
    $detail.addClass('show-private');

    pullDownRefresh();

    //$.get('/wardRecord', function(data){
    //    console.log(data);
    //    var {wardDetail} = data;
    //
    //    if(wardDetail.length == 0){
    //        $record.html('暂无数据');
    //    }else{
    //        var text = '';
    //
    //        for(var i = 0; i < wardDetail.length; i++){
    //            text += `<tr>
    //                    <td>${wardDetail[i].id}</td>
    //                    <td>${wardDetail[i].name}</td>
    //                    <td>${wardDetail[i].data}</td>
    //                    <td>${wardDetail[i].state}</td>
    //                    </tr>`
    //        }
    //
    //        $record.html(text);
    //    }
    //})


};