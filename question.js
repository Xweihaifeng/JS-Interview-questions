面试题:[2020-4-18]
1 最新的js有几种数据类型，都是什么？他们分别存在内存哪里（栈？ 堆？）
2 打印结果
function setName(obj) {
    obj.name = "zhangsan";
    obj = new Object();
    obj.name = "lisi";
}
var person = new Object();
setName(person);
console.log(person.name);
3 打印结果
for (var i = 0; i < 4; i++) {
    setTimeout(function () {
        console.log(i);
    }, 300);
}
4 如何检查一个数字是否为整数？写代码
5 算法题：给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那两个整数，
  并返回他们的数组下标。你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
  示例: 给定 nums = [2, 7, 11, 15], target = 9
        因为 nums[0] + nums[1] = 2 + 7 = 9
        所以返回 [0, 1]
6 附加题 创建git库的命令

面试题:[2020-4-19],
1: es6字符串反向['ABCDEFGHIJKLMNOPQRSTUVEXYZ'];
2: 将数字['12345678']转化成RMB形式：12,345,678,
3: 字符串里出现出现频率最多的字符;
4: 获取字符串里出现子串的位置;
5: 将arr1-arr5合并为非假植的一维数组
    var arr1 = [1, 2, 3, 5, 6],
    arr2 = ['a', 'b'],
    arr3 = [null, undefined, 1e+2],
    arr4 = [['A', 'B', 'C']],
    arr5 = [[{x:1}],[[{y:2}]]]
6: for(var i=0;i<10;i++){ 
        setTimeout(function(){ 
            console.info(i); 
        },1000); 
    }
    改造一下函数,在setTimeout内的console打印出:0~9,

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
  parent.show();
  child1.show();
  child2.show();
  child1.change();
  child2.change();
  parent.show();
  child1.show();
  child2.show();

2:编程题 如何深拷贝一个对象
3:算法题
编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。
示例 1:

输入: ["flower","flow","flight"]
输出: "fl"
示例 2:

输入: ["dog","racecar","car"]
输出: ""
解释: 输入不存在公共前缀。
说明:

所有输入只包含小写字母 a-z 。