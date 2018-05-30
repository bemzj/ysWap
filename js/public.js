$(function () {
    //返回上一个页面
    $('.returnNav').on('click',function () {
        window.history.go(-1);
    });
    //删除不良数据
    $('.delete1').prevAll().remove();
    $('.delete2').nextAll().remove();
});