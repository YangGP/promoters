/**
 * Created by Administrator on 2017/12/5.
 */
window.onload = function(){

    var $getAgent = $("#get-agent");
    var $body = $("#table-body");
    var $id = $("#agent-id");
    var $search = $("#search");
    var $data = $("#user-data");

    $search.addClass('show-private');
    $data.addClass('show-private');

    pullDownRefresh();

    $getAgent.click(function(e){

        e.preventDefault();
        console.log($id.val());

    });

    $.get('/myAgent', function(data){

        console.log(data);

        if(data.length == 0){
            //$body.html('暂无数据');
        }else{
            var text = '';

            for(var i = 0; i < data.length; i++){
                text += `<tr><td>${data[i].id}</td>
                    <td>${data[i].regTime}</td>
                    <td>${data[i].recentLog}</td>
                    <td class="myagent-td">${data[i].total}</td>
                    <td class="myagent-td">${data[i].commit}</td></tr>`;
            }

            $body.html(text);


        }

    });

};