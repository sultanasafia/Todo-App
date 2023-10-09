



let list = document.getElementById('list')
function addToDo(){
    let toDoItem = document.getElementById('toDoItem')
    let li = document.createElement('li')
    let liText = document.createTextNode(toDoItem.value)
    li.appendChild(liText)
    list.appendChild(li)
   toDoItem.value = '';
    console.log(li);
    // =delet btn=====
    
    let  deletBtn = document.createElement('button')
    let deletText = document.createTextNode('Delete')
    deletBtn.appendChild(deletText)
    deletBtn.setAttribute('onclick','deletItem(this)')
    li.appendChild(deletBtn)

    // editbtn =======================

    let editBtn = document.createElement('button')
    let editText = document.createTextNode('Edit')
    editBtn.appendChild(editText)
    li.appendChild(editBtn)
  editBtn.setAttribute('onclick','editITem(this)')


}


function deletItem(e){
    e.parentNode.remove()
}

function editITem(e){
let editVal = prompt('enter your edit value',e.parentNode.firstChild.nodeValue)
e.parentNode.firstChild.nodeValue = editVal
}

function DeleteAll(){
    list.innerHTML = ''
}
