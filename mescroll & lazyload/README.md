# mescroll && lazyload

> 引入各种所需文件

> img 添加属性(不需要src)

```html
<img class="lazy" data-original="${data[i].bookCover}" alt="">
```
> 添加初始化事件(不混合使用mescroll)

```javascript
 $('img.lazy').lazyload({
    effect: 'fadeIn',
    // 各种参数
})
// 或者(所有图片都生效)
 $('img').lazyload({
    effect: 'fadeIn',
    // 各种参数
})
```
> 添加初始化事件(混合使用mescroll)

```javascript
// upCallback添加needShowlazy事件
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
// 添加滚动事件
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
```

# 预览页面

> node server.js  模拟数据

> 浏览器运行http://localhost:9000/index.html