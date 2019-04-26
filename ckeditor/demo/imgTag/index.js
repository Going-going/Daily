CKEDITOR.replace('main', {
	language: 'zh-cn',
	fontSize_defaultLabel: '18px',
	height: 400,
	toolbar_Full : [{
		name: 'document',
		items: ['Source', '-', 'Save', 'NewPage', 'DocProps', 'Preview', 'Print', '-', 'Templates']
	}, {
		name: 'clipboard',
		items: ['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo']
	}, {
		name: 'editing',
		items: ['Find', 'Replace', '-', 'SelectAll', '-', 'SpellChecker', 'Scayt']
	}, {
		name: 'forms',
		items: ['Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton', 'HiddenField']
	}, 
	'/', 
	{
		name: 'basicstyles',
		items: ['Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat']
	}, {
		name: 'paragraph',
		items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', 'CreateDiv', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'BidiLtr', 'BidiRtl']
	}, {
		name: 'links',
		items: ['Link', 'Unlink', 'Anchor']
	}, {
		name: 'insert',
		items: ['Image', 'Flash', 'Table', 'HorizontalRule', 'Smiley', 'SpecialChar', 'PageBreak', 'Iframe']
	}, 
	'/', 
	{
		name: 'styles',
		items: ['Styles', 'Format', 'Font', 'FontSize', 'lineheight']
	}, {
		name: 'colors',
		items: ['TextColor', 'BGColor']
	}, {
		name: 'tools',
		items: ['Maximize', 'ShowBlocks', '-', 'About']
	}]
	// filebrowserBrowseUrl: 'https://cdn.ckeditor.com/apps/ckfinder/3.4.5/ckfinder.html',
	// filebrowserImageBrowseUrl: 'https://cdn.ckeditor.com/apps/ckfinder/3.4.5/ckfinder.html?type=Images',
	// filebrowserUploadUrl: 'https://cdn.ckeditor.com/apps/ckfinder/3.4.5/core/connector/php/connector.php?command=QuickUpload&type=Files',
	// filebrowserImageUploadUrl: 'https://cdn.ckeditor.com/apps/ckfinder/3.4.5/core/connector/php/connector.php?command=QuickUpload&type=Images',
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