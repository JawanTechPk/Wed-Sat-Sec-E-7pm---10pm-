// var res = document;

// console.log(res.childNodes[1].childNodes[2]
//     .childNodes);


// var d = document.getElementById('humpty');

// console.log(d.childNodes)

// var d = document.getElementById('humpty');

// console.log(d.firstChild);


// var d = document.getElementById('humpty');

// console.log(d.parentNode);


// var d = document.getElementById('humpty');

// console.log(d.previousSibling);


// var d = document.getElementById('humpty');

// console.log(d.nextSibling);



// var d = document.getElementById('humpty');

// console.log(d.firstChild.innerHTML);
// console.log(d.firstChild.childNodes[0].nodeValue);


// var d = document.getElementById('humpty');

// console.log(d.firstChild.nodeName);

// var d = document.getElementById('humpty');

// var dList = d.childNodes;

// var len = dList.length;


// console.log(dList);

// var howManyPara = 0;

// for(var i =0;i<len;i++){
//     if(dList[i].nodeName.toLowerCase() == '#text' ){
     
//         howManyPara++
//     }
// }
// console.log(howManyPara)


// var divVar = document.getElementById('div2');

// var res = divVar.hasAttribute('style');

// console.log(res)

// var res2 = divVar.getAttribute('style');

// console.log(res2);


// var res3 = divVar.setAttribute('style',"background-color: red;");

// console.log(res3);




// var res3 = document.getElementById('div2').attributes

// console.log(res3[1].nodeName);


// var res3 = document.getElementById('div2').attributes

// console.log(res3[1].nodeValue);



// var para = document.createElement('p');

// para.setAttribute('class','regular');

// var txtNode = document.createTextNode('Hello World');

// para.appendChild(txtNode);

// console.log(para);





// var divVar = document.getElementById('mainDIv');


// var para = document.createElement('p');
// para.setAttribute('class','regular');
// var txtNode = document.createTextNode('Hello World');

// para.appendChild(txtNode);

// divVar.appendChild(para);




// var divVar = document.getElementById('mainDIv');
// var para = document.createElement('p');
// para.setAttribute('class','regular');
// var txtNode = document.createTextNode('Hello World');

// para.appendChild(txtNode);

// var firsVar = divVar.firstChild
// divVar.insertBefore(para,firsVar)





// var divVar = document.getElementById('mainDIv');
// var para = document.createElement('p');
// para.setAttribute('class','regular');
// var txtNode = document.createTextNode('Hello World');
// para.innerHTML = "Hello World"
// para.appendChild(txtNode);

// var firsVar = divVar.firstChild.nextSibling
// divVar.insertBefore(para,firsVar)