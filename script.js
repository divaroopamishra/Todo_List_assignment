let todos

if(localStorage.getItem("todos")){
    todos=JSON.parse(localStorage.getItem("todos"))
updateDisplay();
}
else todos=[];

function createTodo() {
    if(document.getElementById("todo-input").value=="") return false;
    
    todos.push(document.getElementById("todo-input").value);

    updateDisplay();
         
    document.getElementById("todo-input").value="";
    return false;
     
}

function removeTodo(index){
    todos.splice(index,1);
updateDisplay();    
}

function updateDisplay(){
    const container=document.getElementById("todo-list");
    container.innerHTML="";
    todos.map((todo,index)=>{
        const li=document.createElement("li");
        li.className="todo-item";
        li.appendChild(document.createElement("p")) ;
        li.querySelector("p").innerHTML=todo;
        const removeButton=document.createElement("button");
        removeButton.innerHTML="X";
        removeButton.className="remove-button"
        removeButton.onclick=function(){
            removeTodo(index)
        };
        li.appendChild(removeButton);
        container.appendChild(li);

    })

    localStorage.setItem("todos", JSON.stringify(todos));

};




