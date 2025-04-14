const input = document.querySelector(".input-txt")
const addTask = document.querySelector(".btn")
const  list = document.querySelector(".List")

addTask.addEventListener("click",()=>{
   if(input.value === ""){
    alert("Please add your task first...")
   }
   else{
    let listItem = document.createElement("li")
    list.appendChild(listItem)
    listItem.textContent = input.value
    let icon1 = document.createElement("i")
    icon1.classList.toggle("ri-circle-line")
    listItem.appendChild(icon1)
    let deleteBtn = document.createElement("button")
    deleteBtn.textContent = "Delete"
    listItem.appendChild(deleteBtn)
   }
   input.value=""
})

list.addEventListener("click",(e)=>{
    if(e.target.classList.contains("ri-circle-line")){
        e.target.classList.replace("ri-circle-line","ri-check-double-line")
    }
    else if(e.target.tagName === "BUTTON"){
        e.target.parentElement.remove()
    }
    else{
        e.target.classList.replace("ri-check-double-line","ri-circle-line")
    }
})

