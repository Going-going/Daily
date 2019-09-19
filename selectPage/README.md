    layui下拉选择带搜索插件

    如果和layui自带form同时出现会出现无法点击出现面板

    解决： form.js修改源码 87行
    var pageBox = $(e.target).parent().parent().attr('class') || '';
    var aBox = $(e.target).parent().attr('class') || '';
    var btn = $(e.target).attr('class')
    if (btn != 'layui-laypage-btn' && (pageBox.indexOf('layui-laypage') > -1 || aBox.indexOf('layui-laypage') > -1)) {
            return false;
    }
    if (!$(e.target).parent().hasClass(TITLE) || clear){
        $('.'+CLASS).removeClass(CLASS+'ed ' + CLASS+'up');
        thatInput && initValue && thatInput.val(initValue);
    }

