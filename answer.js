面试题:[2020-4-11]
1 最新的js有几种数据类型，都是什么？他们分别存在内存哪里（栈？ 堆？）
// 基本类型: [Number, boolean, String, null, undefined, Symbol] 基本数据类型存储在栈中
// 引用类型: [Object, Array, function] 引用数据类型（对象）存储在堆中,指针放在栈中; 
2 打印结果
function setName(obj) {
    obj.name = "zhangsan";
    obj = new Object();
    obj.name = "lisi";
}
var person = new Object();
setName(person);
console.log(person.name);
// ['zhangsan']
3 打印结果
for (var i = 0; i < 4; i++) {
    setTimeout(function () {
        console.log(i);
    }, 300);
}
// [4,4,4,4]
4 如何检查一个数字是否为整数？写代码;
// [Number.isInteger(num)]
5 算法题：给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那两个整数，
  并返回他们的数组下标。你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
  示例: 给定 nums = [2, 7, 11, 15], target = 9,因为 nums[0] + nums[1] = 2 + 7 = 9,所以返回 [0, 1]
/* 
// 方法一: 暴力法
var setData = (m,n) => m.map((v,k) => m.map((x,i) => v+x == n ? k : null)).flat().flat().filter(x=>x!=null);
// 方法二: 进化
var setData = (nums, target, X = []) => nums.map((v,k) => {
    if(nums[target-nums[k]] !== undefined) return [X[target-nums[k]], k];
    X[nums[k]] = k;
}).filter(x=>x)[0]
// 方法三: 进化Map
var setData = (nums, target, X = new Map()) => nums.map((v,k) => {
    if(X.has(target-nums[k])) return [X.get(target-nums[k]), k];
    X.set(nums[k], k);
}).filter(x=>x)[0]
// 运行：setData([12,2,3,4,5,6,7,78,8,8,7,7,6,5,4,54,76,87,87], 66); // [0, 15]
*/
6 附加题 创建git库的命令
// [git init],

面试题:[2020-4-18],
1: es6字符串反向['ABCDEFGHIJKLMNOPQRSTUVEXYZ'];
// ['ABCDEFGHIJKLMNOPQRSTUVEXYZ'].join().split('').reverse().join('');
2: 将数字['12345678']转化成RMB形式：12,345,678,
/*
// 方法一: 正则
var RMB = (arr) => arr.length && arr.toString().replace(/(\d)(?=(\d{3})+\.)/g,($1,$2) => $2 + ',')
// 方法二
function RMB(arr, res = []){
    var arr = arr.join().split('').reverse();
    for(let i = 0; i <arr.length; i++){
        res.push(arr[i]);
        if ((i + 1) % 3 === 0 && arr[i] != '.') res.push(",");
    }
    return res.reverse().join('');
}
// 运行:RMB([12345678.34]);
*/
3: 打印字符串'abcdefffdddddd'里出现出现频率最多的字符;
/* 
var setData = (str, obj = {}) => {
    str.split('').map((v,k) => obj[v] ? obj[v]++ : obj[v] = 1);
    var num = Math.max.apply(Math, Object.values(obj));
    for(key in obj) {
        if(obj[key] == num) return key;
    }
}
// 运行: setData('abcdefffdddddd')
 */
4: 获取字符串'abascbascbabasbascbascascbab'里出现'ab'的位置;
/* 
function position(str,target,n = 0,result = []){
    while(str.indexOf(target,n)!=-1 && n < str.length){
        result.push(str.indexOf(target,n));
        n = str.indexOf(target,n) + target.length;
    }
    return result;
}
// 运行: position('abascbascbabasbascbascascbab','ab');
 */
5: 将arr1-arr5合并为非假植的一维数组
    var arr1 = [1, 2, 3, 5, 6],
    arr2 = ['a', 'b'],
    arr3 = [null, undefined, 1e+2],
    arr4 = [['A', 'B', 'C']],
    arr5 = [[{x:1}],[[{y:2}]]]
/*
var isObject = o => Object.prototype.toString.call(o) === '[object Object]'
var arrSum = (a,b,c,d,e) => [...new Set([...a,...b,...c,...d,...e].flat().flat().filter(x=>x).map((v,k) => isObject(v) ? Object.values(v) : v).flat())]
*/
6: for(var i=0;i<10;i++){ 
        setTimeout(function(){ 
            console.info(i); 
        },1000); 
    }
    改造一下函数,在setTimeout内的console打印出:0~9,
    // 方法一：
    /* 
    for(var i=0;i<10;i++){
        (function(i){
            setTimeout(function(){
            alert(i);
            },1000);
        })(i)
    }
    */

    // 方法二：
    /* for (let i = 0; i < 10; i++) {
        setTimeout(function() {
            console.info(i);
        }, 1000);
    } */

面试题：[2020-4-25]
1: 写出输出结果
function Parent() {
    this.a = 1;
    this.b = [1, 2, this.a];
    this.c = { demo: 5 };
    this.show = function () {
        console.log(this.a, this.b, this.c.demo);
    };
}
function Child() {
    this.a = 2;
    this.change = function () {
        this.b.push(this.a);
        this.a = this.b.length;
        this.c.demo = this.a++;
    };
}
Child.prototype = new Parent();
var parent = new Parent();
var child1 = new Child();
var child2 = new Child();
child1.a = 11;
child2.a = 12;
parent.show(); // 1 | [1,2,1] | {demo: 5}
child1.show(); // 11 | [1,2,11] | {demo: 5}
child2.show(); // 12 | [1,2,12] | {demo: 5}
child1.change();
child2.change();
parent.show(); // 1 | [1,2,1] | {demo: 5}
child1.show(); // 4 | [1,2,11,11] | {demo: 5}
child2.show(); // 4 | [1,2,12,12] | {demo: 5}

2: 编程题: 如何深拷贝一个对象,
/* 
var obj = new Object();
JSON.parse(JSON.stringify(obj));
*/

3: 算法题: 编写一个函数来查找字符串数组中的最长公共前缀。如果不存在公共前缀，返回空字符串 ""。
    示例 1:
        输入: ["flower","flow","flight"]
        输出: "fl"
    示例 2:
        输入: ["dog","racecar","car"]
        输出: ""
    解释: 输入不存在公共前缀。
    说明: 所有输入只包含小写字母 a-z 。,
/* 
var arr = ["flower", "flow", "flight"];
function Prefix(arr,X=[],T=[],Y={},Z=1) {
	this.arr = arr;
	this.spl = (str) => {
		var len = new Array(str.length).fill(0);
		var ssr = len.map((v,k)=>{
			v = str.split('');
			v.length=k+1;
			return v.join('');
		});
		return ssr;
	};
	this.max = (arr,obj={}) => { 
		for(var i= 0, l = arr.length; i< l; i++){ 
			var item = arr[i]; 
			obj[item] = (obj[item] +1 ) || 1; 
		} 
		return obj; 
	};
	this.getData = () => {
		for(var j = 0; j < arr.length; j++) {
		    for(var i = 0; i < this.spl(arr[0]).length; i++) {
		        if(arr[j].includes(this.spl(arr[0])[i])) {
		            X.push(this.spl(arr[0])[i]);
		        } else {
		            continue;
		        }
		    }
		}
		Y = this.max(X);
		Z = Math.max(...Object.values(Y));
		if(Z === 0 || Z === 1) return '';
		for(var k in Y) {
			if(Y[k] == Z) T.push(k);
		}
		return T[T.length-1] || '';
	}
}
var prefix = new Prefix(arr);
console.log(prefix.getData()); 
 */

面试题：[2020-5-2]