document.addEventListener("DOMContentLoaded", function() {
let toDoForm= document.getElementById('todolist')
let toDoList= document.getElementById('list')




toDoForm.addEventListener('submit', function(event){
    event.preventDefault();
    
    let removeButton = document.createElement("button");
    removeButton.innerText = "X";

    let newToDo = document.createElement('li');
    newToDo.innerText = document.getElementById("task").value;

    toDoList.appendChild(newToDo);
    newToDo.appendChild(removeButton);

    toDoForm.reset();

});

toDoList.addEventListener('click', function(event){
    const targetTagToLowerCase = event.target.tagName.toLowercase();
    if (targetTagToLowerCase === 'li'){
        event.target.style.textDecoration = "line-through";
    } else if (targetTagToLowerCase === 'button') {
        event.target.parentNode.remove();
    }
});
});

