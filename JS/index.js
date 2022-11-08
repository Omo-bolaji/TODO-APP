  function showToDo(todo){
    const Todos = document.querySelector("#ul-id");
    const p = document.createElement("p")
    p.classList.add("todo-section")


    p.innerHTML = `<div>
     <div class="div-wrapper section>
     <span class="todo-text section"> ${todo} </span>
     <i class="fa fa-trash delete-btn section"> </i>
     </div>
    </div>
    `
  
    Todos.appendChild(p)
    addEventListeners();
  }

  

function myFunction(form) {
    form.preventDefault();
    const inputField = document.querySelector("#input-form");
    const theValue = inputField.value;
    showToDo(theValue)
}


const form = document.getElementById("form")
form.addEventListener("submit", myFunction)

function deleteTodo(del){
  const Click = del.target;
  const Item = Click.parentNode.parentNode.parentNode;
  Item.remove();
}




function addEventListeners () {
  const collection = document.querySelectorAll(".delete-btn");
  const lastButton = collection[collection.length  - 1]
  lastButton.addEventListener("click", deleteTodo)
}

function clearBtn () {
  const clear = document.querySelector("#input-form")
  clear.value = "";
}



const takeAway = document.querySelector("#close")
takeAway.addEventListener("click", clearBtn)