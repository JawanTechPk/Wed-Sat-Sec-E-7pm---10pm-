/*alert("Hello world")

alert("Hello world")

alert("Hello world")*/

// alert("Hello world")


// function myFunc(val){

//   var userEmail = document.getElementById('email').value;
//   var pass = document.getElementById('pass').value;
//     if(userEmail == "" || pass == ""){
//         alert('Enter your credentials')
//     }else{
//         alert(val+userEmail+pass);
//     }
// }


// Calculator


var input = document.getElementById("inp")
function del(){
    var remaingChar = input.value.slice(0, input.value.length-1)
    input.value = remaingChar
}
function setVal(num){
    var lastChar = input.value[input.value.length-1]
    var opr = ["+","-","*","/","%"]
    if(opr.indexOf(lastChar) != -1 && opr.indexOf(num) != -1 ){
        del()
        input.value += num
    }else{
        input.value += num
    }
}
function clearInp(){
    input.value = "";
}
function result(){
    var result = eval(input.value)
    input.value = result
}