
let ary = [];
let str1 = "赵钱孙李周吴郑王冯陈褚卫蒋沈韩杨朱秦尤许何吕施张孔曹严华金魏陶姜戚谢邹喻水窦章云苏潘";　
let str2 = "乐于时傅皮卞齐康伍余元卜顾孟平黄和穆萧尹姚邵湛汪祁毛禹狄米贝明臧计伏成戴谈宋茅庞熊纪";
let str3 = "鲁韦昌马苗凤花方俞任袁柳酆鲍史唐费廉岑薛雷贺倪汤滕殷罗毕郝邬安常屈项祝董梁奚范彭郎葛";
let sexy = ['男', '女'];
for (let i = 1; i <= 99; i++) {
    let obj = {};
    obj.id = i;
    obj.name = str1[getRandom(0,42)]+str2[getRandom(0,42)]+str3[getRandom(0,42)];
    obj.sexy = sexy[getRandom(0,1)];
    obj.score = getRandom(59,98);
    obj.tel = '13709876475';
    obj.address = '山东省 青岛市';
    ary.push(obj);
}
function getRandom(n, m) {
    return Math.round(Math.random() * (m - n) + n);
}
module.exports =ary ;