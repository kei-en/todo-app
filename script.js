const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const checkedCountSpan = document.getElementById('unchecked-count')
const newTodo = document.getElementById("newTodo")
let input = document.getElementById("inputDiv")
let addBtn = document.getElementById("addItem")
let itemCount = 0
let checkedCount = 0

//Create a close button and append it to each list item
let myNodeList = document.getElementsByTagName("LI")
let i
for (i = 0; i < myNodeList.length; i++) {
  let span = document.createElement("SPAN")
  let txt = document.createTextNode("\u00D7")
  span.className = "close"
  span.appendChild(txt)
  myNodeList[i].appendChild(span)
}

//Click on a close button to hide the current list item
let close = document.getElementsByClassName("close")
let v
for(v = 0; v < close.length; v++) {
  close[v].onclick = function () {
    let div = this.parentElement
    div.style.display = "none"
  }
}

//Add a checked symbol when clicking on a list item
list.addEventListener("click", (ev) => {
  if(ev.target.tagName === "LI") {
    ev.target.classList.toggle("checked")
    if(ev.target.className !== "checked") {
      checkedCount++
      checkedCountSpan.innerHTML = checkedCount
    }
    else {
      checkedCount--
      checkedCountSpan.innerHTML = checkedCount
    }
  }
}, false)

//Display the input div for new todos
newTodo.addEventListener("click", () => {
  input.style.display = "block"
})

//Add new item to todos
addBtn.addEventListener("click", () => {    
  let li = document.createElement("li")
  let inputField = document.getElementById("inputField").value
  let t = document.createTextNode(inputField)
  li.appendChild(t)
  if(inputField == '') {
    alert("You must write something")
  }
  else {
    list.appendChild(li)
    itemCount++
    itemCountSpan.innerHTML = itemCount
    checkedCount++
    checkedCountSpan.innerHTML = checkedCount
    input.style.display = 'none'
  }
  document.getElementById("inputField").value = ""

  let span = document.createElement("SPAN")
  let txt = document.createTextNode("\u00D7")
  span.className = "close"
  span.appendChild(txt)
  li.appendChild(span)

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let div = this.parentElement
      itemCount--
      itemCountSpan.innerHTML = itemCount
      if(div.className !== "checked") {
        checkedCount--
        checkedCountSpan.innerHTML = checkedCount
      }
      div.style.display = "none"
    }
  }
})




