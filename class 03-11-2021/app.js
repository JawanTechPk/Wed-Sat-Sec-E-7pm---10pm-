// var text = "changed the political alignment and social structure of the globe. The United Nations (UN) was established to foster international co-operation and prevent future conflicts, and the victorious great powers—China, France, the Soviet World War II Union, the United Kingdom, and the United States—became the Permanent members of its Security Council";


// // console.log(text.slice(3));


// for(var i=0;i<text.length;i++){
//     if("World War II" == text.slice(i, i + 12) ){
//         text = text.slice(0,i) + "The Second World War"+text.slice(i+12);
//     }
// }

// console.log(text)

// var text = "changed the political alignment and social structure of the globe. The United Nations (UN) was established to foster international co-operation and prevent future conflicts, and the victorious great powers—China, France, the Soviet World War II Union, the United Kingdom, and the United States—became the Permanent members of its Security Council";

// var firstVal = prompt('Enter name want to change');
// var secVal = prompt('Enter Updated name ');

// // console.log(text.slice(3));


// for(var i=0;i<text.length;i++){
//     if(firstVal.toLowerCase() == text.slice(i, i + firstVal.length).toLowerCase() ){
//         text = text.slice(0,i) + secVal+text.slice(i+firstVal.length);
//     }
// }

// console.log(text)



// var text = "changed the political alignment and social structure of the globe. The United Nations (UN) was established to foster international co-operation and prevent future conflicts, and the victorious great powers—China, France, the Soviet World War II Union, the United Kingdom, and World War II the United States—became the Permanent members of its Security Council";

// console.log(text.indexOf('World War II'))


// var ind = text.lastIndexOf('World War II')

// if(ind != -1){
//     text = text.slice(0,ind) + "The Second World War"+text.slice(ind+12);
// }

// console.log(text)




// var userName  = "umair jhkj k hk h kjh kj h kh kj jh";

// userName.slice(0,1);
// console.log(userName.charAt(userName.length-1))




// var text = "changed the political alignment and social structure of the globe. The United Nations (UN) was established to foster international co-operation and prevent future conflicts, and the victorious great powers—China, France, the Soviet World War II Union, the United Kingdom, and World War II the United States—became the Permanent members of its Security Council";


// // var updateVal = text.replace("World War II","The Second World War");

// text = text.replace("World War II","The Second World War");

// console.log(text);
// // console.log(updateVal);


// var text = "changed the political alignment and social structure of the globe. The United Nations (UN) was established to foster international co-operation and prevent future conflicts, and the victorious great powers—China, France, the Soviet World War II Union, the United Kingdom, and World War II the United States—became the Permanent members of its Security Council World War II World War II";



// // var updateVal = text.replace("World War II","The Second World War");

// text = text.replace(/World War II/g,"The Second World War");

// console.log(text);
// // console.log(updateVal);


var text = "changed the political alignment and social structure of the globe. The United Nations (UN) was established to foster international co-operation and prevent future conflicts, and the   great powers—China, France, the Soviet World War II Union, the United Kingdom, and World War II the victorious United States—became the Permanent members of its Security Council World War II World War II";


var firstVal = prompt('Enter name want to change');
var secVal = prompt('Enter Updated name ');

text = text.replaceAll(firstVal,secVal);

console.log(text);
// console.log(updateVal);