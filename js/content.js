/**
 * Created by hanshiqiang1 on 2017/2/21.
 */
/*$('#a1').click(function () {
    alert(1);
});*/
$(function () {
    var pages={
        '关于我们':'About',
        '业务单元':'Unit',
        '服务案例':'Service',
        '团队':'Team',
        '加入我们':'Join',
        '联系我们':'Contact'
    };
    //底部导航
    $('#nav .show').on('click',function () {
        // var title=$(this).text().toLowerCase();
        $(this).addClass('active').siblings().removeClass('active');
        //导航切换
        ($('#container-navs ').children().length>1)?$('#container-navs li:last-child').remove():'';

        $('#content').scrollTop(0);

        var title=$(this).text();

        $('#container-navs').append('<li><small>>> </small><span>'+title+'</span></li>');
        //内容切换
        $('#mainContent').load('html/'+pages[title]+'.html');
        $('#container-nav').fadeIn();
        $('#content').fadeIn();
    });
    //关闭按钮
    /*$('#closeD').click(function () {
        $('#content').fadeOut();
        $('#mainContent').html('');
    });*/
    var shut=function () {
        $('#container-nav').fadeOut();
        $('#content').fadeOut();
        $('.show').removeClass('active');
    }
    $('#home').click(shut);
    $('#logo').click(shut);

});