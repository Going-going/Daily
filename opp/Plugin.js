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
            navigation: true,
            callback: function() {}
        }, options)

        if(options.url){
            var xmlHttp;
            if(window.XMLHttpRequest){
                xmlHttp = new XMLHttpRequest();
            }else{
                xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
            }
            xmlHttp.open('get', options.url, false);
            xmlHttp.send();
            if(xmlHttp.status === 200 && xmlHttp.readyState === 4){
                console.log(JSON.parse(xmlHttp.responseText))
                options.data = JSON.parse(xmlHttp.responseText);
            }
        }
        var plagination = [], slider = [], $this = $(this);
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

        changePosition();
        goSlide();

        if(options.autoPlay){
            var time = typeof options.autoPlay === 'number' ? options.autoPlay : 2000;

            var i = 1;
            var timer = setInterval(autoPlay, time)
        }

        if(options.navigation){
            navigation()
            // $this.children('.wrapper').append('<a href="javascript:;" class="arrow arrowLeft"></a><a href="javascript:;" class="arrow arrowRight"></a>')
        }
        function autoPlay(){
            var p = $this.children('.wrapper').find('.slide').eq(0).width() * i;
            animateSlide(p)
            matchPla();
            i++;
            if(i > options.data.length - 1){
                i = 0;
            }
        }
        function navigation() {
            var scrollLeft = parseFloat($this.children('.wrapper').css('left'));
            alert(scrollLeft <= 0)
            if(scrollLeft <= 0){
                $this.children('.wrapper').append('<a href="javascript:;" class="arrow arrowRight"></a>')
            }else{
                $this.children('.wrapper').append('<a href="javascript:;" class="arrow arrowLeft"></a><a href="javascript:;" class="arrow arrowRight"></a>')
            }
        }
        function animateSlide(p){
            $this.children('.wrapper').stop().animate({
                left: '-' + p + 'px'
            });
        }

        function addClass(currIndex) {
            $this.children('.wrapper').find('.slide').eq(currIndex).addClass('active').siblings().removeClass('active');
            $this.children('.focusBox').children().eq(currIndex).addClass('select').siblings().removeClass('select');
        }

        // slide样式
        function changePosition() {
            $this.children('.wrapper').find('.slide').each(function(index, item) {
                var l = $this.children('.wrapper').find('.slide').eq(0).width() * index;
                item.style.left = l + 'px';
            })
        }

        // 改变底部小圆点位置
        function matchPla() {
            $this.children('.wrapper').find('.slide').each(function(index, item) {
                var scrollLeft = parseFloat($this.children('.wrapper').css('left'));
                var currLeft = parseFloat(item.style.left);
                if(currLeft == Math.abs(scrollLeft)){

                    var curindex = $(item).index();
                    if(curindex >= options.data.length - 1){
                        curindex = -1;
                    }
                    addClass(curindex+1)
                }
            })
        }
        // 点击小圆点跳转到响应slide
        function goSlide() {
            $this.hover(function() {
                if(timer) clearInterval(timer);
            }, function () {
                timer = setInterval(autoPlay, time)
            })
            $this.children('.focusBox').children().on('click', function () {
                i = $(this).index();
                addClass($(this).index())
                var p = $this.children('.wrapper').find('.slide').eq(0).width() * $(this).index()
                animateSlide(p)
            })
        }

    }
})(jQuery)