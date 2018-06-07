# 使用

## 引入lazy.css和lazy.css (可修改)


## 页面结构

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
		<link rel="stylesheet" type="text/css" href="lazy.css" />
		<style type="text/css">
			* {
				margin: 0;
				padding: 0;
			}
			// 样式自己写
		</style>
		<title></title>
	</head>

	<body>
		<ul id="demo">
			
		</ul>
	</body>
	<script src="lazy.js"></script>

</html>
```
## lazy.js修改

```javascript
// 渲染dom
var arr = ["test/1.jpg", "test/2.jpg", "test/3.jpg", "test/4.jpg", "test/5.jpg", "test/6.jpg", "test/7.jpg", "test/8.jpg", "test/9.jpg", "test/10.jpg", "test/11.jpg", "test/12.jpg", "test/13.jpg", "test/14.jpg", "test/15.jpg", "test/16.jpg", "test/17.jpg", "test/18.jpg", "test/19.jpg", "test/20.jpg", "test/21.jpg", "test/22.jpg", "test/23.jpg", "test/24.jpg", "test/25.jpg", "test/26.jpg", "test/27.jpg", "test/28.jpg", "test/29.jpg", "test/30.jpg", "test/31.jpg", "test/32.jpg", "test/33.jpg", "test/34.jpg", "test/35.jpg", "test/36.jpg", "test/37.jpg", "test/38.jpg", "test/39.jpg", "test/40.jpg", "test/41.jpg", "test/42.jpg", "test/43.jpg", "test/44.jpg", "test/45.jpg", "test/46.jpg", "test/47.jpg", "test/48.jpg", "test/49.jpg", "test/50.jpg"]
// 参数修改
var defaultParam = {
	container: '#lazy-wrap',
	data: arr
}
setDom(defaultParam);

// 页面内容修改
// 渲染dom 如有改变修改str的值
str += '<li>';
str += '<div class="lazy-img" data-src="'+item+'"></div>';
str += '<p>你好哦啊是幅度萨芬弄i我就覅哦均为哦怕你好哦啊是幅度萨芬弄i我就覅哦均为哦怕</p>';
str += '</li>';

```

[完整例子]demo.html
