/**
 * Created by Administrator on 2017/12/12.
 */

let pullDownRefresh = function(){                                   //移动端页面下拉刷新，只适用无scroll页面

    let startY, endY, freshFlag;

    let body = document.querySelector('body');

    body.addEventListener('touchstart', function(e){
        startY = e.changedTouches[0].clientY;         //点击屏幕时记录Y坐标。
    });

    body.addEventListener('touchmove', function(e){

        endY = e.changedTouches[0].clientY;

        let st = $(this).scrollTop();

        if (endY - startY >= 75 && st == 0) {                       //如果滚动条高度等于0，到顶，且下拉高度超过100，刷新页面

            //if(!freshFlag){
            //    freshFlag = setTimeout(()=>{
            //        startY = !startY;
            //        endY = !endY;
            //        freshFlag = !freshFlag;
            //        location.reload(true);
            //    }, 500);
            //}

            console.log(body.style.top)

        }

    });


};

