(function() {
	// 获取元素
	function $(argument) {
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
	function WinObject(attr, val) {
		// if(!val){
		return document.documentElement[attr] || document.body[attr];
		// }else{
		//     document.documentElement[attr] = val;
		//     document.body[attr] = val;
		// }
	}

	// 获取 元素样式
	function getStyle(element, css) {
		var style = null;
		// window.getComputedStyle(ele, '伪类') || ele.currentStyle(IE) 
		if(window.getComputedStyle) {
			style = window.getComputedStyle(element, null)
		} else {
			style = element.currentStyle;
		}
		return style[css];
	}
	// console.log(getStyle($('#lazy-wrap'), 'height'))  // 6222px
	var arr = ["test/1.jpg", "test/2.jpg", "test/3.jpg", "test/4.jpg", "test/5.jpg", "test/6.jpg", "test/7.jpg", "test/8.jpg", "test/9.jpg", "test/10.jpg", "test/11.jpg", "test/12.jpg", "test/13.jpg", "test/14.jpg", "test/15.jpg", "test/16.jpg", "test/17.jpg", "test/18.jpg", "test/19.jpg", "test/20.jpg", "test/21.jpg", "test/22.jpg", "test/23.jpg", "test/24.jpg", "test/25.jpg", "test/26.jpg", "test/27.jpg", "test/28.jpg", "test/29.jpg", "test/30.jpg", "test/31.jpg", "test/32.jpg", "test/33.jpg", "test/34.jpg", "test/35.jpg", "test/36.jpg", "test/37.jpg", "test/38.jpg", "test/39.jpg", "test/40.jpg", "test/41.jpg", "test/42.jpg", "test/43.jpg", "test/44.jpg", "test/45.jpg", "test/46.jpg", "test/47.jpg", "test/48.jpg", "test/49.jpg", "test/50.jpg"]
	var index = 0;

	function setDom(data) {
		data.forEach(function(item, index) {
			var oDiv = document.createElement('div');
			oDiv.setAttribute('class', 'lazy-img');
			oDiv.setAttribute('data-src', item);
			$('#lazy-wrap').appendChild(oDiv);
		})
		showImg($('.lazy-img'));
	}
	// img的外层盒子 是否进入可是区域 显示
	function showImg(wrapBox) {
		for(var i = 0; i < wrapBox.length; i++) {
			var inside = wrapBox[i].offsetTop - WinObject('scrollTop');
			// 判断是否进入可视区域  加载图片
			if(inside < WinObject('clientHeight')) {
				(function(index) {
					if(!wrapBox[index].innerHTML){
						var img = new Image();
						img.src = wrapBox[index].getAttribute('data-src');
						img.onload = function() {
							setTimeout(function() {
								wrapBox[index].innerHTML = '';
								wrapBox[index].appendChild(img);
								wrapBox[index].style.animation = 'fadeIn 3s ease';
							}, 500)
						}
					}
				})(i)
			}
		}
	}
	setDom(arr);
	window.onscroll = function() {
		showImg($('.lazy-img'));
	}
})()