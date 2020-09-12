
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
    if (evt.target.closest(".sidebarItem3")) {
        document.querySelector(".edit-section").style.display = "flex"
    }
    else if (!evt.target.closest(".edit")) {
        document.querySelector(".edit-section").style.display = "none"
    }
});
document.querySelector(".doneBtn").addEventListener("click", hideEdit);
function hideEdit() {
    document.querySelector(".edit-section").style.display = "none";
};

