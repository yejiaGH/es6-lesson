/**
 创建时间 15/11/25
 QQ: 1405491181
 个人网站: forjs.org
 版权所有: 曾亮 <1405491181@qq.com>
 说明: 未经许可,此视频和资料不可用于商业用途,违者必究.
 奖励: 购买到盗版的学员,可与作者联系,有奖励.
 */

export var name = 'leo';

export function changeName(_name) {
    name = _name;
}

var age = 222;
export default age;
//
//setTimeout(function () {
//    age = 55;
//});

export class User {
    constructor(name) {
        this.name = name;
    }

    changeName(name) {
        this.name = name;
    }
}