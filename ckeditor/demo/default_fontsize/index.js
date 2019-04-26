CKEDITOR.replace('main', {
	language: 'zh-cn',
	fontSize_defaultLabel: '18px',
	height: 400,
	// uiColor: '#AADC6E',
	toolbar: [{
			name: 'document',
			items: ['Source', '-', 'Save', 'NewPage', 'Preview']
		}, {
			name: 'clipboard',
			items: ['Undo', 'Redo']
		},
		'/', {
			name: 'basicstyles',
			items: ['Bold', 'Italic', 'Underline', 'Strike', ]
		}, {
			name: 'paragraph',
			items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', 'CreateDiv', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock']
		}, {
			name: 'links',
			items: ['Link']
		}, {
			name: 'insert',
			items: ['EasyImageUpload', 'Flash', 'Table', 'HorizontalRule']
		},
		'/', {
			name: 'styles',
			items: ['Styles', 'Format', 'Font', 'FontSize']
		}, {
			name: 'colors',
			items: ['TextColor', 'BGColor']
		}, {
			name: 'tools',
			items: ['Maximize']
		}
	]
});
CKEDITOR.instances["main"].on("instanceReady", function(ev) {    
	// 设置p标签默认值
	ev.editor.dataProcessor.htmlFilter.addRules({        
		elements: {            
			$: function(element) {
				if (element.name == 'p') {
					var pStyle = element.attributes.style;
					element.attributes.style = pStyle + ";font-size:" + ev.editor.config.fontSize_defaultLabel;                    
				}                    
				return element;                
			}        
		}    
	});
});
// 获取内容
document.querySelector('.getData').onclick = function() {
	var data = CKEDITOR.instances['main'].getData();
	console.log(data);
}