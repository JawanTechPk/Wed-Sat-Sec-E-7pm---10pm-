function addItem(paraOne){

    console.log(paraOne)
    var val = document.getElementById('item');
    
    var trEle = document.createElement('tr');
    var valThEle = document.createElement('th')
    var editTdEle = document.createElement('td');
    var deleTdEle = document.createElement('td');

    valThEle.setAttribute('class',"firstTd")
    editTdEle.setAttribute('class','secondTd');
    deleTdEle.setAttribute('class','thirdTd');


    var editBtnEle = document.createElement('button');
    var deleBtnEle = document.createElement('button');

    editBtnEle.setAttribute("onclick","editItem(this)");
    deleBtnEle.setAttribute("onclick","deleItem(this)");

    editBtnEle.setAttribute('class',"editBtn")
    deleBtnEle.setAttribute('class',"delBtn")

    var editTxt = document.createTextNode("Edit")
    editBtnEle.appendChild(editTxt)

    var deleTxt =document.createTextNode('delete');
    deleBtnEle.appendChild(deleTxt);

    var txtNode = document.createTextNode(val.value)

    valThEle.appendChild(txtNode)
    editTdEle.appendChild(editBtnEle);
    deleTdEle.appendChild(deleBtnEle);

    trEle.appendChild(valThEle);
    trEle.appendChild(editTdEle);
    trEle.appendChild(deleTdEle);

    var tbEle = document.getElementById('table');
    tbEle.appendChild(trEle);

    val.value = ""
}


function deleteAll(){

    var tbEle = document.getElementById('table');
    tbEle.innerHTML = "";

}


function deleItem(delBtn){

    delBtn.parentNode.parentNode.remove()

}