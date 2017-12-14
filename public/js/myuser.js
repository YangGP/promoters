/**
 * Created by Administrator on 2017/12/5.
 */
window.onload = function(){

    var $getUser = $("#get-user");
    var $body = $("#table-body");
    var $id = $("#user-id");
    var $search = $("#search");
    var $data = $("#user-data");

    $search.addClass('show-private');
    $data.addClass('show-private');

    pullDownRefresh();

    $getUser.click(function(e){

        e.preventDefault();
        console.log($id.val());

    });

    $.get('/myUser', function(data){

        console.log(data);

        if(data.length == 0){
            $body.html('暂无数据');
        }else{
            var text = '';

            for(var i = 0; i < data.length; i++){
                text += `<tr><td><img src="${data[i].pic}" alt=""/></td>
                    <td>${data[i].id}</td>
                    <td>${data[i].regTime}</td>
                    <td>${data[i].recentLog}</td>
                    <td class="myuser-td">${data[i].totalMoney}</td></tr>`;
            }

            $body.html(text);


        }

    });

};