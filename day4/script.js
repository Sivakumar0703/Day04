//Q1
var a = {"a":1,"b":2,"c":3}
var b = {"b":2,"c":3,"a":1}
length = Object.keys(b);
var check = true;
for(let i of Object.keys(b)){
    if(a[i] != b[i]){
        check = false;
    }
}
console.log(check); 




//Q2
/*var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
var result = JSON.parse(request.response);
for(let i=0;i<result.length;i++){
    console.log(result[i].flags.svg);
}
}  */


//Q3
/*var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var result = JSON.parse(request.response);
    for(let i=0;i<result.length;i++){
    console.log("COUNTRY NAME :",result[i].name.official," ","REGION :",result[i].region," ","SUB-REGION :",result[i].subregion," ","POPULATION :",result[i].population);
    } 
} */