document.addEventListener("DOMContentLoaded", function () {
  loadTotoList();
});

function loadTotoList() {
  let storedItems = JSON.parse(localStorage.getItem("todoItems")) || [];
  storedItems.forEach(function (item) {
    appendTodoItem(item);
  });
}

function appendTodoItem(todoItem) {
  let doList = document.getElementById("tolist");
  let toItem = document.createElement("li");
  toItem.className = "tolist";
}

function enableEditing(element) {
  let oldValue = element.innerHTML;
  let inputField = document.createElement("input");
  inputField.type = "text";
  inputField.value = oldValue;

  inputField.addEventListener("blur", function () {
    element.innerHTML = inputField.value;
  });

  element.innerHTML = "";
  element.appendChild(inputField);
  inputField.focus();
}

function addBtn() {
  let toInput = document.getElementById("toinput");
  let doList = document.getElementById("tolist");
  console.log(toInput.value);
  if (!toInput.value) {
    alert("Plz input value");
    return;
  }

  let toItem = document.createElement("li");
  toItem.className = "tolist";

  let toCheckBox = document.createElement("input");
  toCheckBox.type = "checkbox";

  toCheckBox.addEventListener("change", function (e) {
    let listItem = e.target.closest("li");
    let textBlock = listItem.querySelector(".text-block");
    if (toCheckBox.checked) {
      textBlock.style.textDecoration = "line-through";
    } else {
      textBlock.style.textDecoration = "none";
    }
  });

  let textBlock = document.createElement("span");
  textBlock.className = "text-block";
  textBlock.innerHTML = toInput.value;

  let changeBtn = document.createElement("span");
  changeBtn.className = "changeBtn";
  changeBtn.innerHTML = "&nbsp;&nbsp;&nbsp change";
  changeBtn.addEventListener("click", function () {
    enableEditing(textBlock);
  });
  let deleteBtn = document.createElement("span");
  deleteBtn.className = "deleteBtn";
  deleteBtn.innerHTML = "&nbsp;&nbsp;&nbsp❌";
  deleteBtn.addEventListener("click", function () {
    toItem.remove();
  });
  toItem.appendChild(toCheckBox);
  toItem.appendChild(textBlock);
  toItem.appendChild(changeBtn);
  toItem.appendChild(deleteBtn);
  doList.appendChild(toItem);
  toInput.value = "";
}
