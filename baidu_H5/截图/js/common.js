/**
 * Created by zhaoyangyue on 2018/8/23 0023.
 */
function noise() {
	var audio = document.getElementById("bgMusic");
	audio.play();
}

function MyAi($element) {
	this.$container = $element;
	this.$index = $('.m-wrap');
	this.$result = $('.m-result');
	this.$start = $('.m-start');
	this.$input = this.$container.find('input');
	this.$scan = this.$container.find('.scan');
	this.$scaning = this.$container.find('.scaning');
	this.$dongtu = this.$container.find('.animate');
	this.$avator1 = $('#showAvator1');
	this.$avator2 = $('#showAvator2');
	this.$score = this.$result.find('.score');
	this.$text = this.$result.find('.text');
	this.$comments = this.$result.find('.title');
	this.$people = this.$result.find('.code > .left > span');
	this.$audio = $('#long_music');
	this.$again = this.$result.find('.again');
	this.$imgSrc = '';
	this.$loading = $('#loading');
	console.log(this);
	this.init();
}
MyAi.prototype = {
	init: function() {
		var _this = this;
		this.addListener();
		this.getScore();
		//		this.playAudio();

		document.addEventListener('visibilitychange', function() {
			if(document.hidden) {
				_this.$audio.get(0).pause();

			} else {
				_this.$audio.get(0).play();
			}
		})

		if(this.$index.hasClass('active')) {
			var prec = 0;
			var timer = setInterval(function() {
				prec++;
				$('.precent').html(prec + '%');
				if(prec == 100) {
					clearInterval(timer);
				}
			}, 30)
			setTimeout(function() {
				_this.$start.addClass('active').siblings().removeClass('active');
				_this.playAudio();
			}, 3000)
		}
	},
	addListener: function() {
		var _this = this;
		this.$input.on('change', $.proxy(this.change, this));
		this.$scan.on('click', $.proxy(this.click, this));
		this.$again.on('click', function() {
			this.$start.addClass('active').siblings().removeClass('active');
			this.playAudio();
		}.bind(this));
		this.share();
	},
	click: function() {
		var _this = this;
		this.$scaning.addClass('active');
		this.$dongtu.addClass('active');

		setTimeout(function() {
			_this.$result.addClass('active').siblings().removeClass('active');

			_this.$avator2.attr('src', _this.$url);
			if(_this.$result.hasClass('active')) {
				_this.$loading.show().addClass('active');

				$('#view').html('');
				var copyDom = _this.$result.find('.bg').clone();
				$('#view').width(_this.$result.find('.bg').width());
				$('#view').css({
					'z-index': -1
				})
				$('#view').append(copyDom);

				html2canvas(document.getElementById('view')).then(function(canvas) {
					_this.$scaning.removeClass('active');
					_this.$dongtu.removeClass('active');
					//					$('.m-result').get(0).appendChild(canvas);
					$('#saveImg').attr('src', canvas.toDataURL());
					_this.$loading.hide().removeClass('active');
				});
			}
		}, 3000)
	},
	change: function(e) {
		var _this = this;
		var file = e.target.files[0];
		var orientation;
		EXIF.getData(file, function() {
			orientation = EXIF.getTag(this, 'Orientation');
		});
		_this.$loading.show().addClass('active');
		var reads = new FileReader();
		// var f = e.target.files[0];

		reads.onload = function(e) {
			var src = reads.result;
			$('.m-scan').addClass('active').siblings().removeClass('active');
			getImgData(this.result, orientation, function(data) {
				//这里可以使用校正后的图片data了
				_this.$avator1.attr('src', data);
				_this.$url = data;
				_this.$loading.hide().removeClass('active');
			});

		};
		reads.readAsDataURL(file);
	},
	playAudio: function() {
		var _this = this;
		if(window.WeixinJSBridge) {
			WeixinJSBridge.invoke('getNetworkType', {}, function(e) {
				_this.$audio.get(0).play();
				_this.$audio.get(0).loop;
			}, false);
		} else {
			document.addEventListener("WeixinJSBridgeReady", function() {
				if(!_this.$index.hasClass('active')) {
					WeixinJSBridge.invoke('getNetworkType', {}, function(e) {
						_this.$audio.get(0).play();
						_this.$audio.get(0).loop;
					});
				}

			}, false);
		}
	},
	share: function() {
		var url = location.href.split('#')[0].toString(); //url不能写死
		$.ajax({
			type: "get",
			url: "http://publish.qdbkyz.com/index.php",
			async: true,
			data: {
				url: url
			},
			success: function(res) {
				var data = JSON.parse(res);
				wx.config({
					debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
					appId: data.appId, // 必填，公众号的唯一标识
					timestamp: data.timestamp, // 必填，生成签名的时间戳
					nonceStr: data.nonceStr, // 必填，生成签名的随机串
					signature: data.signature, // 必填，签名，见附录1
					jsApiList: [
						'checkJsApi',
						'onMenuShareTimeline',
						'onMenuShareAppMessage',
						'onMenuShareQQ',
						'onMenuShareWeibo'
					] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
				});
				var wstitle = '谁的颜值能超过这些技术宅？',
					wslink = url,
					wsimg = 'http://www.sgep.cn/baidu/images/share.png',
					wsdesc = '感谢代颜';
				wx.ready(function() {
					// 分享到朋友圈
					wx.onMenuShareTimeline({
						title: wstitle,
						link: wslink,
						imgUrl: wsimg,
						success: function() {
							console.log('分享成功');
						},
						cancel: function() {

						}
					});

					// 分享给朋友
					wx.onMenuShareAppMessage({
						title: wstitle,
						desc: wsdesc,
						link: wslink,
						imgUrl: wsimg,
						success: function() {
							console.log('分享成功');
						},
						cancel: function() {

						}
					});
					// 分享到QQ
					wx.onMenuShareQQ({
						title: wstitle,
						desc: wsdesc,
						link: wslink,
						imgUrl: wsimg,
						success: function() {
							console.log('分享成功');
						},
						cancel: function() {}
					});
					// 分享到QQ空间
					wx.onMenuShareQZone({
						title: wstitle,
						desc: wsdesc,
						link: wslink,
						imgUrl: wsimg,
						success: function() {
							console.log('分享成功');
						},
						cancel: function() {}
					});
				})
			}
		});
	},
	getScore: function() {
		var comments = [
			'忍不住想敲回车',
			'std::cout << "hello 潮人";',
			'我遇上喜欢的人',
			'美得让我出bug',
			'近你者甜',
			'16进制的522',
			'超平均阙值',
			'美到溢出',
			'de过bug一样',
			'像素太高',
			'确认不是猪队友',
			'这是个bug',
			'翻车老司机',
			'此人有料',
			'是个机灵鬼',
			'够美才有标签',
			'一看就是老铁',
			'hi 可否交往？',
			'开心不要理由',
			'拒人千里之内',
			'佛系养心',
			'美丽值：255',
			'此颜只应天上有',
			'在下爱吃鸡',
			'最强王者参上',
			'颜控收割者',
			'留下联系方式？',
			'批准C位出道',
			'只想skr skr',
			'隔壁小孩都哭了',
			'为你打call',
			'别看！扎心！',
			'比你美？tan90°',
			'还有这种操作？',
			'安排上了',
			'无敌的存在',
			'约你待心静',
			'当下，此人应景',
			'请勿参与',
			'今天也要开心鸭',
			'想认识你',
			'想加你粉丝群',
			'刷屏级流量',
			'偶像包袱卸一下',
			'同九何秀',
			'为你爆灯',
			'变美挂石锤',
			'颜值开挂已举报',
			'国民级偶像',
			'恰似快乐源泉,喜欢你,没道理',
			'想抱你大腿',
			'想和你皮一下',
			'太美看不透',
			'想pick你',
			'潮人了解一下',
			'凭脸5杀',
			'蜜甜的你欢喜',
			'颜值冠军内定',
			'路转粉标杆',
			'全场最佳（自封）',
			'这个颜我承包',
			'唯一首选',
			'蒂花之秀',
			'毫无PS痕迹',
			'承包焦点',
			'需要人陪',
			'游泳健身了解一下',
			'行走表情包',
			'云端阳光',
			'瑕不掩瑜 整体',
			'油而不腻',
			'螺丝钉-比伯',
			'负责的人',
			'手握ABC 脚踩祥云路',
			'站台买橘心里甜',
			'太浪欢 测不出',
			'与皮皮虾同行,捶胸口小拳拳',
			'有颜不闹',
			'最美大猪蹄子',
			'懂开发会设计有颜值',
			'产品至上 颜值第一',
			'码农冤家',
			'加班无需立字据',
			'活好话不多',
			'有天赋还努力',
			'学软工的PM',
			'绝对核心',
			'团队领袖',
			'最被信任的人',
			'幽默的好人',
			'不将就',
			'温柔不矫情',
			'特别能吃~~~吗？',
			'有文化的某人',
			'被饭催的人',
			'谢绝闲聊',
			'颜值高了什么人都有',
			'自带BGM的人',
			'数不过来的机灵劲',
			'全世界都知道的低调',
			'不小心就这么靓',
			'赶紧去拯救世界',
			'让世界充满爱',
			'燃~~~',
			'不会劈腿的人',
			'河畔一朵花',
			'不咬人',
			'亲自吃饭的人',
			'最美的时光',
			'冲动是魔鬼',
			'不适合淡定的心',
			'完美进化',
			'窒息的沉默',
			'一张有范儿的脸',
			'给点灯光就灿烂',
			'找得到快乐',
			'坐下休息休息吧',
			'双击666',
			'专家起步，大湿情怀',
			'不止格子衫',
			'军刀双肩背 颜值无人争',
			'人好代码好',
			'创造404',
			'有freebug',
			'脱网写码谁能比',
			'爱tab也爱空格',
			'空格处女座？',
			'此人风格Freecode',
			'粘贴复制能跑就行',
			'键鼠杀手',
			'有对象必涉及关系',
			'私有人',
			'地球出bug了',
			'用机械键盘的人',
			'天降bug于斯人',
			'非诚勿码',
			'404 no found',
			'云级私教身材',
			'ABC代颜人',
			'自带偶像滤镜',
			'首席云主角',
			'解锁美颜成就',
			'火钳留名',
			'TIF格式！',
			'专职diss',
			'谁还没写过bug？',
			'这个code稳',
			'为PHP带盐',
			'懂二进制的人',
			'氪金等级你来猜',
			'有码的人',
			'兼容性极高',
			'完~~~美！',
			'骨骼清奇',
			'鬼才……信',
			'码上人生',
			'方圆十里无WiFi',
			'密码太简单',
			'单手复制粘贴',
			'喊出你的语言',
			'献身云计算',
			'调试不怕没环境',
			'男默女泪',
			'灯光师为你就位',
			'天地难见',
			'无不精通',
			'Online的人儿',
			'千里之外定位bug',
			'为你不断电不断网',
			'断电啦！宕机啦！',
			'搬砖CIO',
			'有洞察力的人',
			'机器奴隶主',
			'没对象不关系',
			'颜值奇点',
			'进化出来信',
			'混合之美',
			'请再刷一遍脸',
			'超融合之人',
			'不设防火墙',
			'最好的承诺就是陪伴',
			'不挖坑不背锅',
			'哪里都是新鲜空气',
			'梅脾气，梅老板',
			'家里有矿',
			'有豪单',
			'带你飞过每个坑',
			'脱单？',
			'全年业绩已完成',
			'套路都懂',
			'顶级成功人士',
			'不变心不迁移',
			'小学生？！',
			'注意身体哦',
			'C3HF7在身边',
			'自主、可控',
			'甲方气质'
		];
		var randomCount = Math.round(Math.random() * (comments.length - 1));
		var overstep = 0;
		var precentCount = 50 + Math.round(Math.random() * 30);
		var precentCount1 = Math.round(Math.random() * 10)
		var randomPeople = 10000 + Math.round(Math.random() * 500);
		console.log(precentCount + '%', randomCount);

		if(precentCount >= 50 && precentCount < 60) {
			overstep = 30 + precentCount1;
		} else if(precentCount >= 60 && precentCount < 70) {
			overstep = 50 + precentCount1;
		} else if(precentCount >= 70 && precentCount < 80) {
			overstep = 70 + precentCount1;
		} else if(precentCount >= 80 && precentCount < 90) {
			overstep = 80 + precentCount1;
		} else {
			overstep = 90;
		}
		this.$score.html('<i>[</i>颜值：' + precentCount + '<i>]</i>');
		this.$text.html('<i>[</i>超越' + overstep + '%的参会者<i>]</i>');
		this.$comments.html('“' + comments[randomCount] + '”');
		// this.$comments.html('“与皮皮虾同行,捶胸口小拳拳”');
		this.$people.html(randomPeople);

	}
}

new MyAi($('.container'));

function getObjectURL(file) {
	var url = null;
	// 下面函数执行的效果是一样的，只是需要针对不同的浏览器执行不同的 js 函数而已
	if(window.createObjectURL != undefined) { // basic
		url = window.createObjectURL(file);
	} else if(window.URL != undefined) { // mozilla(firefox)
		url = window.URL.createObjectURL(file);
	} else if(window.webkitURL != undefined) { // webkit or chrome
		url = window.webkitURL.createObjectURL(file);
	}
	return url;
}

function getQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); // [^]字符类取反
	var r = window.location.search.substr(1).match(reg);
	if(r != null) return r[2];
	return '';
}

function getImgData(img, dir, next) {
	var image = new Image();
	image.onload = function() {
		var degree = 0,
			drawWidth, drawHeight, width, height;
		drawWidth = this.naturalWidth;
		drawHeight = this.naturalHeight;
		//以下改变一下图片大小
		var maxSide = Math.max(drawWidth, drawHeight);
		if(maxSide > 1024) {
			var minSide = Math.min(drawWidth, drawHeight);
			minSide = minSide / maxSide * 1024;
			maxSide = 1024;
			if(drawWidth > drawHeight) {
				drawWidth = maxSide;
				drawHeight = minSide;
			} else {
				drawWidth = minSide;
				drawHeight = maxSide;
			}
		}
		var canvas = document.createElement('canvas');
		canvas.width = width = drawWidth;
		canvas.height = height = drawHeight;
		var context = canvas.getContext('2d');
		//判断图片方向，重置canvas大小，确定旋转角度，iphone默认的是home键在右方的横屏拍摄方式
		switch(dir) {
			//iphone横屏拍摄，此时home键在左侧
			case 3:
				degree = 180;
				drawWidth = -width;
				drawHeight = -height;
				break;
				//iphone竖屏拍摄，此时home键在下方(正常拿手机的方向)
			case 6:
				canvas.width = height;
				canvas.height = width;
				degree = 90;
				drawWidth = width;
				drawHeight = -height;
				break;
				//iphone竖屏拍摄，此时home键在上方
			case 8:
				canvas.width = height;
				canvas.height = width;
				degree = 270;
				drawWidth = -width;
				drawHeight = height;
				break;
		}
		//使用canvas旋转校正
		context.rotate(degree * Math.PI / 180);
		context.drawImage(this, 0, 0, drawWidth, drawHeight);
		//返回校正图片
		next(canvas.toDataURL("image/jpeg", .8));
	}
	image.src = img;
}