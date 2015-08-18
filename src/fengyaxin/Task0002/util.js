
//判断是否为数组
//function isArray(arr){
//    //return Array.isArray(arr);
//    return arr instanceof Array;
//}
//var arr1= [];
//var a=isArray(arr1);
//console.log(a);

//判断是否为函数
//function isFunction(fn) {
//    //return Object.prototype.toString.call(fn)=== '[object Function]';
//    return fn instanceof Function;
//}
//
//function bbb(){
//    console.log("I am Function");
//}
//
////var b=bbb();
//var c= function(){};
//
////console.log(b);//i am function
//console.log(c);//
//
//console.log(isFunction(bbb));
//console.log(isFunction(c));



//拷贝复制
//function  cloneObject(srcObj){
//    var targeobj={};
//    for (var propertyName in srcObj){
//        var proname=typeof srcObj[propertyName];
//        switch (proname){
//            case ("number"):
//                targeobj[propertyName]=srcObj[propertyName];
//                break;
//            case("string"):
//                targeobj[propertyName]=srcObj[propertyName];
//                break;
//            case ("object"):
//                targeobj[propertyName]=srcObj[propertyName].slice(0);
//                break;
//            case ("boolean"):
//                targeobj[propertyName]=srcObj[propertyName];
//                break;
//
//        }
//    }
//    return targeobj;
//
//}
//
//var srcObj = {
//    a: 1,
//    b: ["hello", "hi"],
//    c: "JavaScript",
//    d: true
//};
//console.log(srcObj);
//
//var abObj = srcObj;
//var tarObj = cloneObject(srcObj);
//
//srcObj.a = 2;
//srcObj.b[0] = "Hello";
//
//console.log(abObj.a);
//console.log(abObj.b[0]);
//
//console.log(tarObj.a);     // 1
//console.log(tarObj.b);    // ["hello", "hi"]
//console.log(tarObj.c);    // "Javascript"
//console.log(tarObj.d);    // "Javascript"
//function uniqArray(arr) {
//    var newArray = [];
//    for (var i in arr) {
//        if (newArray.indexOf(arr[i]) < 0 ) {
//            newArray.push(arr[i]);
//        }
//    }
//    return newArray;
//}

//function uniqArray(arr) {
//    var newArray = [];
//    for (var i in arr) {
//        if (newArray.indexOf(arr[i]) < 0 ) {
//            newArray.push(arr[i]);
//        }
//    }
//    return newArray;
//}

//数组去重
//未成功版
//function uniqArrayV1(arr) {
//    var targeArr=arr;
//    for(var i=0;i<targeArr.length;i++)
//    {
//        for(var j=0;j< arr.length;j++)
//        {
//            if( targeArr[j]==arr[i])
//                break;
//            else
//                targeArr.pop(arr[i]);
//        }
//    }
//    return targeArr;
//}

//V2版本伪代码
// aeterejofjieiowjrioe
//arr = aeterejofjieiowjrioe
//new arr2
//arr2[1]=arr[1]
//for arr
//    遍历arr2，检查是否存在同arr[i]相等的元素。
//    若不存在，则push(arr[i])。
//
//return arr2

//function uniqArrayV2(arr){
//    var arr2=[];
//    arr2[0]=arr[0];
//    for(var i=0;i<arr.length;i++){
//        for(var j=0;j<arr2.length;j++){
//            var b = false;
//            if(arr[i]==arr2[j]){
//                b=true;
//                break;
//            }
//        }
//        if(b==false){
//            arr2.push(arr[i]);
//        }
//    }
//    return arr2;
//}
//
//// 使用示例
//var a = [1, 3, 5, 7, 5, 3];
//var b = uniqArrayV2(a);
//console.log(b); // [1, 3, 5, 7]


// 实现一个简单的trim函数，用于去除一个字符串，头部和尾部的空白字符
//function simpleTrim(str) {
//    var len = str.length;
//    for (var i = 0; i < len; i++) {
//        if (str[i] === ' ' || str[i] === '\t') {
//        } else {
//            break;
//        }
//    }
//    for (var j = len; j > 0; j--) {
//        if (str[j - 1] === ' ' || str[j - 1] === '\t') {
//        } else {
//            break;
//        }
//    }
//    return str.substring(i, j);
//}
//// 使用示例
//var str = '   hi!  ';
//console.log(str.length);
//str = simpleTrim(str);
//console.log(str); // 'hi!'



// 实现一个遍历数组的方法，针对数组中每一个元素执行fn函数，并将数组索引和元素作为参数传递
function each(arr, fn) {
    for(var i=0;i<arr.length;i++){
        fn(arr[i],i);
    }
}


// 其中fn函数可以接受两个参数：item和index

// 使用示例
var arr = ['java', 'c', 'php', 'html'];
function output(item, index) {
    console.log(item);
}
each(arr, output);  // java, c, php, html

// 使用示例
var arr = ['java', 'c', 'php', 'html'];
function output(item, index) {
    console.log(index + ': ' + item)
}
each(arr, output);  // 0:java, 1:c, 2:php, 3:html































