function getRandom(n, m) {
    return Math.round(Math.random() * (m - n) + n);
}

var str1 = '赵钱孙李周吴郑王冯陈褚卫蒋沈韩杨朱秦尤许何吕施张孔曹严华金魏陶姜戚谢邹喻水窦章云苏潘';　// 0-42
var str2 = '乐于时傅皮卞齐康伍余元卜顾孟平黄和穆萧尹姚邵湛汪祁毛禹狄米贝明臧计伏成戴谈宋茅庞熊纪';
var str3 = '鲁韦昌马苗凤花方俞任袁柳酆鲍史唐费廉岑薛雷贺倪汤滕殷罗毕郝邬安常屈项祝董梁奚范彭郎葛';

var ary = []
for (let i = 1; i <= 99; i++) {
    var obj = {};
    obj.id = i;
    obj.name = str1[getRandom(0,42)]+str2[getRandom(0,42)]+str3[getRandom(0,42)];
    obj.sex = getRandom(0,1);
    obj.score = getRandom(59,98);
    ary.push(obj);
}

console.log(JSON.stringify(ary));