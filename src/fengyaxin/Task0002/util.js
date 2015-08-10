/**
 * Created by fyx on 15/8/7.
 */
function isArray(arr){
    if(Array.isArray(arr))
        return true;
    else
      return false;
}
var arr1= new Array;
var a=isArray(arr1);
console.log(a);


function cloneObject(obj){
    Array.prototype.cloneObject=function(){
      var a=[];
       for(var i=0,l=this.length;i<l;i++)
            b.push(this[i]);
        return b;
   }
}


var srcObj = {
    a: 1,
    b: ["hello", "hi"],
    c: "JavaScript"
};
var abObj = srcObj;
var tarObj = cloneObject(srcObj);

srcObj.a = 2;
srcObj.b[0] = "Hello";

console.log(abObj.a);
console.log(abObj.b[0]);

console.log(tarObj.a);     // 1
console.log(tarObj.b);    // ["hello", "hi"]
console.log(tarObj.c);    // "Javascript"

