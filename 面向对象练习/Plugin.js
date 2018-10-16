/*
 * @Author: zhaoyangyue 
 * @Date: 2018-06-28 15:36:44 
 * @Last Modified by: zhaoyangyue
 * @Last Modified time: 2018-07-02 15:11:43
 * @desc: 插件需1.7以上版本JQUERY支持
 */
; (function ($) {
    $.fn.tab = function (options) {
        var options = $.extend({
            activeIndex: 0,
            tabBox: '',
            contentBox: '',
            mouseType: 'mouseover'
        }, options);
        var _this = $(this);
        _this.find(options.tabBox).children().eq(options.activeIndex).addClass('select');
        _this.find(options.contentBox).eq(options.activeIndex).css('display', 'block');

        _this.find(options.tabBox).children().on(options.mouseType, function () {
            var activeIndex = $(this).index();
            _this.find(options.tabBox).children().eq(activeIndex).addClass('select').siblings().removeClass('select');
            _this.find(options.contentBox).eq(activeIndex).css('display', 'block').siblings(options.contentBox).css('display', 'none');
        })
    }

    $.fn.myswiper = function (options) {
        var options = $.extend({
            swiperWrap: '.container',
            url: '../banner.json',
            data: [],
            activeIndex: 0,
            autoPlay: false,
            plagination: false,
            navigation: true,
            callback: function () { }
        }, options);
        var current = 0,
            plagination = [],
            slider = [],
            $this = $(this);

        // 渲染
        if (options.url) getData();
        for (var i = 0, length = options.data.length; i < length; i++) {
            if (i == 0) {
                slider.push('<li class="slide active"><img src="' + options.data[i].img + '" alt=""></li>');
            } else {
                slider.push('<li class="slide"><img src="' + options.data[i].img + '" alt=""></li>');
            }
        }
        this.children('.wrapper').html(slider.join(' '));
        changePosition();
        
        // 底部圆点
        if (options.plagination) {
            $this.append('<ul class="focusBox clearfix"></ul>');
            for (var i = 0, length = options.data.length; i < length; i++) {
                if (i == 0) {
                    plagination.push('<li class="select"></li>');
                } else {
                    plagination.push('<li></li>');
                }
            }
            this.children('.focusBox').html(plagination.join(' '));
            // 点击小圆点匹配
            $this.children('.focusBox').children().on('click', function () {
                // if(timer) clearInterval(timer);
                current = $(this).index();
                goSlide(current)
            })
        }
        // 自动播放
        if (options.autoPlay) {
            var time = typeof options.autoPlay === 'number' ? options.autoPlay : 2000;
            var timer = setInterval(autoPlay, time);
            $this.hover(function () {
                if (timer) clearInterval(timer);
            }, function () {
                timer = setInterval(autoPlay, time);
            })
        }
        // 左右箭头
        if (options.navigation) navigation();

        function getData() {
            var xmlHttp;
            if (window.XMLHttpRequest) {
                xmlHttp = new XMLHttpRequest();
            } else {
                xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
            }
            xmlHttp.open('get', options.url, false);
            xmlHttp.send();
            if (xmlHttp.status === 200 && xmlHttp.readyState === 4) {
                console.log(JSON.parse(xmlHttp.responseText))
                options.data = JSON.parse(xmlHttp.responseText);
            }
        }
        function autoPlay() {
            if (current > options.data.length - 2) {
                current = 0;
            } else {
                current++;
            }
            goSlide(current);

        }
        function navigation() {
            $this.append('<a href="javascript:;" class="arrow arrowLeft"></a><a href="javascript:;" class="arrow arrowRight"></a>')

            $this.find('.arrowRight').on('click', function () {
                if (current > options.data.length - 2) {
                    current = options.data.length - 1;
                } else {
                    current++;
                }
                goSlide(current);
            })
            $this.find('.arrowLeft').on('click', function () {
                if (current <= 0) {
                    current = 0;
                } else {
                    current--;
                }
                goSlide(current);
            })
        }
        function animateSlide(p) {
            $this.children('.wrapper').stop().animate({
                left: '-' + p + 'px'
            });
        }

        function addClass() {
            var index = 0;
            $this.children('.wrapper').find('.slide').each(function (k, v) {
                if ($(this).hasClass('active')) {
                    index = $(this).index();
                }
            })
            $this.children('.wrapper').find('.slide').eq(index).addClass('active').siblings().removeClass('active');
            $this.children('.focusBox').children().eq(index).addClass('select').siblings().removeClass('select');
        }

        // slide样式
        function changePosition() {
            $this.children('.wrapper').find('.slide').each(function (index, item) {
                var l = $this.children('.wrapper').find('.slide').eq(0).width() * index;
                item.style.left = l + 'px';
            })
        }
        function goSlide(i) {
            $this.children('.wrapper').find('.slide').eq(current).addClass('active').siblings().removeClass('active');
            addClass();
            var p = $this.children('.wrapper').find('.slide').eq(0).width() * current;
            animateSlide(p);
        }
    }
})(jQuery)