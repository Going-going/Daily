// 获取元素
function $(argument){
    switch(argument[0]) {
        case '#': 
            return document.getElementById(argument.substring(1));
            break;
        case '.':
            return document.getElementsByClassName(argument.substring(1));
            break;
        default:
            return document.getElementsByTagName(argument) || argument.getElementsByName(element);
            break;
    }
}

// 获取window对象的
console.log(window.innerHeight, window.innerWidth)  // 浏览器可视宽高(包括浏览器滚动条)
console.log(document.documentElement.clientHeight, document.documentElement.clientWidth)  //浏览器可视宽高(不包括浏览器滚动条)
console.log(document.documentElement.offsetHeight, document.documentElement.offsetWidth)
console.log(document.body.offsetHeight, document.body.offsetWidth)  // 浏览器可视宽高
console.log(document.body.clientHeight, document.body.clientWidth)
function WinObject(attr, val) {
    // if(!val){
        return document.documentElement[attr] || document.body[attr];
    // }else{
    //     document.documentElement[attr] = val;
    //     document.body[attr] = val;
    // }
}
// console.log(WinObject('clientHeight'))
// console.log($('#lazy-wrap').offsetHeight)

var index = 0;
for(var i = 0; i < $('.lazy-img').length; i++){
    var inside = $('.lazy-img')[i].offsetTop - WinObject('scrollTop');
    if(inside < WinObject('clientHeight')){
        $('.lazy-img')[i].children[0].setAttribute('src', 'test/'+(i+1)+'.jpg');
        index = i;
    }
}
window.onscroll = function() {
    for(var i = index; i < $('.lazy-img').length; i++){
        var inside = $('.lazy-img')[i].offsetTop - WinObject('scrollTop');
        if(inside < WinObject('clientHeight')){
            (function(index){
                var src = $('.lazy-img')[index].children[0].getAttribute('data-src');
                console.log(src);
                setTimeout(function() {
                    $('.lazy-img')[index].children[0].setAttribute('src', src)
                },500)
            })(i)
        }
    }
}
