$(function () {
    var mescroll = new MeScroll('mescroll', {
        down: {
            offset: 40
        },
        up: {
            offset: 30,
            load: {
                use: true,
                delay: 500
            },
            clearEmptyId: 'datalist',
            empty: {  // 如果列表第一页为空 显示页面模板
                // warpId : null ,     //父布局的id; 如果此项有值,将不使用clearEmptyId的值;
                icon: '../images/mescroll-empty.png',   //图标路径
                tip: "暂无相关数据~",     // 底部显示的字
                btntext: "去逛逛 >",      // 按钮    
                btnClick: function () {
                    // 执行点击按钮事件逻辑
                },
                supportTap: false
            },
            htmlLoading: '<p class="upwarp-progress mescroll-rotate"></p><p class="upwarp-tip">加载中...</p>',
            htmlNodata: '<p class="upwarp-nodata">-- 到底啦 --</p>',
            callback: upCallback
        }
    })
    // data 渲染的数据 appDomid 填充的盒子
    function setDom(data, appDomid) {
        for (var i in data) {
            var str = `<dt>
                    <img class="lazy" data-original="${data[i].bookCover}" alt="">
                </dt>
                <dd>
                    <p class="title">${data[i].bookName}</p>
                    <p class="desc">${data[i].bookInfo}</p>
                    <p class="time">${data[i].bookPrice}</p>
                </dd>`
            var Dl = document.createElement('dl');
            Dl.setAttribute('class', 'navbar-content');
            Dl.innerHTML = str;
            document.getElementById(appDomid).appendChild(Dl);
        }
        
    }

    function getData(curpage, pagesize, successcb, errorcb) {
        $.ajax({
            url: '/getList',
            type: 'get',
            dataType: 'json',
            async: true,
            data: {
                pageSize: pagesize,
                page: curpage
            },
            success: function (res) {
                var dataArr = [];
                console.log(res);
                dataArr = res;
                successcb(dataArr)
            },
            error: function (err) {
                errorcb();
            }
        })
    }

    function upCallback(page) {
        setTimeout(function () {
            getData(page.num, page.size, function (data) {
                mescroll.endSuccess(data.length);
                setDom(data, 'datalist');
                needShowlazy();   // 执行
            }, function () {
                mescroll.endErr();
            })
        }, 2000)
    }

    document.getElementById('mescroll').onscroll = function() {
        needShowlazy(); // 执行
    }
    // 判断是否需要使用懒加载 已有图片不需重复加载
    function needShowlazy() {
        for(var i = 0; i < $('img.lazy').length; i++){
            var _this = $('img.lazy').eq(i);
            if(_this.attr('src') == undefined){
                _this.lazyload({
                    effect: 'fadeIn'
                })
            }
        }
    }
})