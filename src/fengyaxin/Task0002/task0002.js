/**
 * Created by fyx on 15/8/7.
 */

console.log("hello JavaScript");
function $(id){
    return document.getElementById(id);
}
function add(num1,num2){
    return num1+num2;
}
function renderResult(result){
    $("result").innerHTML=result;
}
function addEventHandle(){
    var num1=$("number1").value;
    var num2=$("number2").value;
    var result=add(num1,num2);
    renderResult(result);
}
function initEvent(){
    $("addbtn").addEventListener("click",addEventHandle,false);
}
initEvent();


//function uniqArray(arr)
//{
//    var targeArr=[arr[0]];
//    for(var i=0;i<arr.length;i++)
//    {
//        for(var j=0;j<targeArr.length;j++)
//        {
//            if(arr[i] == targeArr[j])
//                break;
//            else
//                targeArr.push(arr[i]);
//        }
//    }
//    return targeArr;
//}