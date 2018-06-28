/*
 * @Author: zhaoyangyue 
 * @Date: 2018-06-28 15:36:44 
 * @Last Modified by: zhaoyangyue
 * @Last Modified time: 2018-06-28 17:40:24
 * @desc: 插件需1.7以上版本JQUERY支持
 */
;(function($){
    $.fn.tab = function(options) {
        var options = $.extend({
            activeIndex: 0,
            tabBox: '',
            contentBox: '',
            mouseType: 'mouseover'
        }, options);
        var _this = $(this);
        _this.find(options.tabBox).children().eq(options.activeIndex).addClass('select');
        _this.find(options.contentBox).eq(options.activeIndex).css('display', 'block');

        _this.find(options.tabBox).children().on(options.mouseType, function() {
            var activeIndex = $(this).index();
            _this.find(options.tabBox).children().eq(activeIndex).addClass('select').siblings().removeClass('select');
            _this.find(options.contentBox).eq(activeIndex).css('display', 'block').siblings(options.contentBox).css('display', 'none');
        })
    }

    $.fn.myswiper = function(options) {
        var options = $.extend({
            swiperWrap: '.container',
            url: '../banner.json',
            data: [],
            activeIndex: 0,
            autoPlay: false,
            plagination: false,
            callback: function() {}
        }, options)

        // if(options.url === '' || options.url === undefined || options.url === null && data){
        //     console.log('url不存在')
        // } 
        // if(options.data === '' || options.data === undefined || options.data === null && data){
        //     console.log('data不存在')
        // } 
        // if(options.url && options.data){
            
        // }
        if(options.url){
            var xmlHttp;
            if(window.XMLHttpRequest){
                xmlHttp = new XMLHttpRequest();
            }else{
                xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
            }
            xmlHttp.open('get', options.url, false);
            xmlHttp.send();
            // xmlHttp.onreadystatechange = function(){
                if(xmlHttp.status === 200 && xmlHttp.readyState === 4){
                    console.log(JSON.parse(xmlHttp.responseText))
                    options.data = JSON.parse(xmlHttp.responseText);
                }
            // }
        }
        var plagination = [], slider = [];
        for(var i = 0, length = options.data.length; i < length; i++){
            slider.push('<li class="slide"><img src="'+ options.data[i].img +'" alt=""></li>');
            if(options.plagination){
                if(i == 0){
                    plagination.push('<li class="select"></li>');
                }else{
                    plagination.push('<li></li>');
                }
            }
        }
        this.children('.wrapper').html(slider.join(' '));
        this.children('.focusBox').html(plagination.join(' '))
        // var width = this.children('.wrapper').find('li').width() * options.data.length;
        // this.children('.wrapper').width(width)
        var _this = this;
        if(options.autoPlay){
            var time = options.autoPlay || 2000;
            var i = 1;
            var timer = setInterval(function() {
                _this.children('.wrapper').find('li').eq(i).css('left', '0').animate({
                    left: '-100%'
                })
                i++;
                if(i > options.data.length){
                    i = 0;
                }
            }, time)
        }
    }
})(jQuery)