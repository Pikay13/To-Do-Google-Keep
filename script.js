/*
function todoList(){
    var item = document.getElementById("todoinput");
    if(item.value != ""){
    var removeBtn = document.createElement("button");
    removeBtn.classList.add("removebtn");
    removeBtn.textContent = "Delete";
    var addBtn = document.querySelector(".addbtn");
    var newItem = document.createElement("li");
    newItem.textContent = item.value;
    newItem.classList.add("container2");
    newItem.append(removeBtn);
    document.querySelector("#todoList").append(newItem);
    item.value = "";
            removeBtn.onclick=() => {
                newItem.remove();
            }
}
}
*/
window.onload = function () {
    item.focus();
};

const item = document.getElementById("todoinput");
const title = document.getElementById("title");
const footerbtn = document.querySelector(".footerbtn");
const bars = document.querySelector(".fa fa-bars");

function todoList() {
    if (item.value != "") {
        var newItem = document.getElementById("oh").content.cloneNode(true);
        var removeBtn = newItem.querySelector(".removeBtn");
        var par = newItem.querySelector(".para");
        par.textContent = item.value;
        document.querySelector("#todoList").prepend(newItem);
        item.value = "";
        document.getElementById("largeSign").style.display = "none";
    }

}
item.addEventListener("click", show);
item.addEventListener("keyup", (e) => {
    if (e.code === "Enter") {
        hide();
        todoList();
    }
})
function show() {
    title.style.display = "flex";
    footerbtn.style.display = "flex";
}
footerbtn.addEventListener("click", hide);
function hide() {
    title.style.display = "none";
    footerbtn.style.display = "none";
}

let activeElement = null;
document.addEventListener("click", (evt) => {
    if (!evt.target.closest(".container1")) {
        title.style.display = "none";
        footerbtn.style.display = "none";
        todoList();
    }
    if (evt.target.closest(".sidebarItem")) {
        evt.target.closest(".sidebarItem").classList.add("active");
        if (activeElement) {
            activeElement.classList.remove("active");
        }
        activeElement = evt.target.closest(".sidebarItem");
    }
});