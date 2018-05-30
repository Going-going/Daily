$(function() {  
    // 获取别表数据
    var events = {
        init: function() {
            this.getData();
        },
        addInfo: function(params) {
            console.log(params)
            $.ajax({
                url: 'http://127.0.0.1:9000/addItem',
                method: 'post',
                dataType: 'json',
                data: params,
                success: function (res) {  
                    if(res.code == 200){
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
        getData: function(id) {
            var id = id || '';
            $.ajax({
                url: 'http://127.0.0.1:9000/getItem',
                method: 'get',
                dataType: 'json',
                data: {
                    id: id
                },
                success: function (res) {  
                    var html = '';
                    res.data.forEach((item, key) => {
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
                    $('tbody').html(html);
                }
            })
        },
        deleteInfo: function(id) {
            $.ajax({
                url: 'http://127.0.0.1:9000/delectItem',
                method: 'get',
                dataType: 'json',
                data: {
                    id: id
                },
                success: function(res) {
                    events.init();
                },
                error: function(err) {
                    console.log(err)
                }
            })
        },
        changeItem: function(params) {
            $.ajax({
                url: 'http://127.0.0.1:9000/changeItem',
                method: 'post',
                dataType: 'json',
                data: params,
                success: function (res) {  
                    if(res.code == 200){
                        $('#myModal1').modal('hide')
                        events.init();
                    }
                },
                error: function (data) {  
                    console.log(data);
                }
            })
        },
        getItem: function(id) {
            var id = id || '';
            var item = [];
            $.ajax({
                url: 'http://127.0.0.1:9000/getItem',
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
    $('#myModal').find('.submit').click(function(params) {
        events.addInfo($('#addform').serialize());
    })
    // 删除
    $('tbody').on('click', '.btn-danger', function() {
        var id = $(this).attr('delete-id');
        events.deleteInfo(id)
    })
    // 修改赋值
    $('tbody').on('click', '.btn-success', function() {
        var id = $(this).attr('change-id');
        var item = events.getItem(id)[0];
        var form =  $('#myModal1').find('form');
        form.find('input[name="name"]').val(item.name);
        form.find('input[name="tel"]').val(item.tel);
        form.find('input[name="address"]').val(item.address);
        form.find(form.find('input[value='+item.sexy+']')).attr('checked', 'checked');
        form.find('input[name="id"]').val(item.id);
    })
    $('#myModal1').find('.submit').click(function(params) {
        events.changeItem($('#myModal1').find('form').serialize());
    })
    
})