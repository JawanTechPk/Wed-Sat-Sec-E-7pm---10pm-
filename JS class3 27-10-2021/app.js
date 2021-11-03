// var place = prompt("Enter place")

// if(place == "pakistan"){
//     var city = prompt("Enter city name")
//     if(city == "hunza"){
//         alert("Good Place")
//     }
//     else if(city == "gilgit"){
//         alert("Cold Place")
//     }
// }
// else{
//     alert("No services available")
// }

var xyz;

var arr = ["mango", "apple", "banana", "pineapple"]


// arr[0] = "orange"
// arr[1] = "apple"
// arr[2] = "banana"

// arr[4] = "orange"
// arr[3] = "grapes"

// console.log(arr)

// arr.pop()
// arr.push("pineapple", "abc")
// arr.shift()
// arr.unshift("pineapple", "abc")

// arr.splice(0,3, "xyz", "gfh", "jhj", "ght")
// var miniArr = arr.slice(1)

// console.log(miniArr)
// console.log(arr)

// for(var i = 0; i<arr.length; i++){
//     if (arr[i] == "banana") {
//         console.log("You have found banana at ====> " + i)        
//     }
//     else{
//         console.log("banana not found ====> " + i)
//     }

//     // console.log(arr[i])
// }

for(var i = arr.length - 1; i >= 0; i--){
    document.write(arr[i] + "<br />")
}