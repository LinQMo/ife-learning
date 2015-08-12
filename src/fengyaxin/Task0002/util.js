/**
 * Created by fyx on 15/8/7.
 */
//判断是否为数组
//function isArray(arr){
//    if(Array.isArray(arr))
//        return true;
//    else
//      return false;
//}
//var arr1= new Array;
//var a=isArray(arr1);
//console.log(a);
//
////判断是否为函数
//function isFunction(fn) {
//    return Object.prototype.toString.call(fn)=== '[object Function]';
//}
//
//function bbb(){
//    console.log("I am Function")
//}
//
// var b=bbb();
// console.log(b);
// var c=isFunction();


//递归拷贝复制
//function cloneObject(obj){
//    Array.prototype.cloneObject=function(){
//      var a=[];
//       for(var i=0,l=this.length;i<l;i++)
//            b.push(this[i]);
//        return b;
//   }
//}

function  cloneObject(srcObj){
    var targeobj={};
    for (var propertyName in srcObj){
        switch (srcObj){
            case (typeof srcObj=="number"):
                targeobj[propertyName]=srcObj;
                break;
            case(typeof srcObj=="string"):
                targeobj[propertyName]=abj.slice(0);
                break;
            case (Array.isArray(srcObj)==true):
                targeobj[propertyName]=srcObj.slice(0);
                break;
        }
    }

}

var srcObj = {
    a: 1,
    b: ["hello", "hi"],
    c: "JavaScript"
};
console.log(srcObj);

var abObj = srcObj;
var tarObj = cloneObject(srcObj);

srcObj.a = 2;
srcObj.b[0] = "Hello";

console.log(abObj.a);
console.log(abObj.b[0]);

console.log(tarObj.a);     // 1
console.log(tarObj.b);    // ["hello", "hi"]
console.log(tarObj.c);    // "Javascript"

