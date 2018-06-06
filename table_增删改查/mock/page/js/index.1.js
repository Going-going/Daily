var Public = (function() {
    // 增加
    function addInfo(params) {
        console.log(params)
            $.ajax({
                url: '/addItem',
                method: 'post',
                dataType: 'json',
                data: params,
                success: function (res) {
                    if (res.code == 200) {
                        console.log(res);
                        $('#myModal').modal('hide')
                        events.init();
                    }
                },
                error: function (data) {
                    console.log(data);
                }
            })
    }
    // 删除
    function deleteInfo(id) {
        $.ajax({
            url: '/delectItem',
            method: 'get',
            dataType: 'json',
            data: {
                id: id
            },
            success: function (res) {
                events.init();
            },
            error: function (err) {
                console.log(err)
            }
        })
    }
    // 修改
    function changeItem(params) {
        $.ajax({
            url: '/changeItem',
            method: 'post',
            dataType: 'json',
            data: params,
            success: function (res) {
                if (res.code == 200) {
                    $('#myModal1').modal('hide');
                    events.init();
                }
            },
            error: function (data) {
                console.log(data);
            }
        })
    }
    // 查询
    function bindHTML(param) {
        var param = param || {};
        $.ajax({
            url: '/getItem',
            method: 'get',
            dataType: 'json', 
            data: {
                id: param.id,
                curpage: param.curpage,
                pagesize: param.pagesize
            },
            async: false,
            success: function (res) {
                count = res.counts;
                var html = '';
                var data = res.data ? res.data : [];
                data.forEach((item, key) => {
                    html += `<tr>
                                <td>${item.id}</td>
                                <td>${item.name}</td>
                                <td>${item.sexy}</td>
                                <td>${item.tel}</td>
                                <td>${item.address}</td>
                                <td>
                                    <button class='btn btn-success' data-toggle="modal" data-target="#myModal1" change-id="${item.id}">修改</button>
                                    <button class="btn btn-danger" delete-id="${item.id}">删除</button>
                                </td>
                            </tr>`
                })
                $('tbody').html(html || '<div class="nodata">暂无更多数据~</div>');
            }
        })
    }
})()

$(function () {

    var i = 0;
    var count = 0;
    var curpage = 1;
    // 获取别表数据
    var events = {
        init: function () {
            this.getData({
                curpage: curpage
            });
            layui.use(['layer', 'laypage', 'element', 'table'], function () {
                var layer = layui.layer   // 弹层
                    , laypage = layui.laypage//分页
                    , element = layui.element  // 元素操作
                    , table = layui.table;
                layer.msg(curpage);
                //分页
                laypage.render({
                    elem: 'pageDemo' //分页容器的id
                    , count: count //总页数
                    , skin: '#1E9FFF' //自定义选中色值
                    , skip: true //开启跳页
                    , limit: 10
                    , curr: curpage
                    , layout: ['prev', 'page', 'next', 'limit', 'skip']
                    , jump: function (obj, first) {
                        layer.msg('第' + obj.curr + '页');
                        curpage = obj.curr;
                        events.getData({
                            curpage: curpage
                        });
                    }
                });
            });
        },
        addInfo: function (params) {
            console.log(params)
            $.ajax({
                url: '/addItem',
                method: 'post',
                dataType: 'json',
                data: params,
                success: function (res) {
                    if (res.code == 200) {
                        console.log(res);
                        $('#myModal').modal('hide')
                        events.init();
                    }
                },
                error: function (data) {
                    console.log(data);
                }
            })
        },
        getData: function (param) {
            var param = param || {};
            $.ajax({
                url: '/getItem',
                method: 'get',
                dataType: 'json', 
                data: {
                    id: param.id,
                    curpage: param.curpage,
                    pagesize: param.pagesize
                },
                async: false,
                success: function (res) {
                    count = res.counts;
                    var html = '';
                    var data = res.data ? res.data : [];
                    data.forEach((item, key) => {
                        html += `<tr>
                                    <td>${item.id}</td>
                                    <td>${item.name}</td>
                                    <td>${item.sexy}</td>
                                    <td>${item.tel}</td>
                                    <td>${item.address}</td>
                                    <td>
                                        <button class='btn btn-success' data-toggle="modal" data-target="#myModal1" change-id="${item.id}">修改</button>
                                        <button class="btn btn-danger" delete-id="${item.id}">删除</button>
                                    </td>
                                </tr>`
                    })
                    $('tbody').html(html || '<div class="nodata">暂无更多数据~</div>');
                }
            })
        },
        deleteInfo: function (id) {
            $.ajax({
                url: '/delectItem',
                method: 'get',
                dataType: 'json',
                data: {
                    id: id
                },
                success: function (res) {
                    events.init();
                },
                error: function (err) {
                    console.log(err)
                }
            })
        },
        changeItem: function (params) {
            $.ajax({
                url: '/changeItem',
                method: 'post',
                dataType: 'json',
                data: params,
                success: function (res) {
                    if (res.code == 200) {
                        $('#myModal1').modal('hide');
                        events.init();
                    }
                },
                error: function (data) {
                    console.log(data);
                }
            })
        },
        getItem: function (id) {
            var id = id || '';
            var item = [];
            $.ajax({
                url: '/getItem',
                method: 'get',
                dataType: 'json',
                data: {
                    id: id
                },
                async: false,
                success: function (res) {
                    item = res.data;
                }
            })
            return item;
        },
    }
    events.init();

    // 添加
    $('#myModal').find('.submit').click(function (params) {
        events.addInfo($('#addform').serialize());
    })
    // 删除
    $('tbody').on('click', '.btn-danger', function () {
        var id = $(this).attr('delete-id');
        events.deleteInfo(id)
    })
    // 修改赋值
    $('tbody').on('click', '.btn-success', function () {
        var id = $(this).attr('change-id');
        var item = events.getItem({ id: id })[0];
        var form = $('#myModal1').find('form');
        form.find('input[name="name"]').val(item.name);
        form.find('input[name="tel"]').val(item.tel);
        form.find('input[name="address"]').val(item.address);
        form.find(form.find('input[value=' + item.sexy + ']')).attr('checked', 'checked');
        form.find('input[name="id"]').val(item.id);
    })
    $('#myModal1').find('.submit').click(function (params) {
        events.changeItem($('#myModal1').find('form').serialize());
    })


})