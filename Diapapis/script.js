function addTask(){
    const input = document.getElementById("taskInput");
    const taskText= input.value.trim();

    if (taskText != ""){
        const li = document.createElement("li");
        const span = document.createElement("span");
        span.textContent = taskText;
        span.className = "task-text";

        const button = document.createElement("button");
        button.textContent = "✔";

        button.onclick = function(){
            if(li.classList.contains("completed")){
                li.remove();
            }else{
                li.classList.add("completed");
            }
        }
        li.appendChild(span);
        li.appendChild(button);
        document.getElementById("taskList").appendChild(li);
        input.Value = "";
    }
}