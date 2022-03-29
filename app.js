// extracting values

var obj={
    question1:"html stand for",
    answer1:"hyper text markup language",
    answer2:"hyper text lang",

    question2:"css stands for",
    answer1:"cascading style sheet",
    asnwer2:"css"
}
var arr=[];
arr.push(Object.values(obj));
console.log(arr);


//extracting keys


var arr1=[];
arr1.push(Object.keys(obj));
console.log(arr1);
