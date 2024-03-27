let form = document.querySelector("form");
let input = document.querySelector("input");
let output = document.querySelector(".output");
let message = document.querySelector(".message-container");

console.log(form);
console.log(input);
console.log(output);
console.log(message);

function getToDo(value) {
  let toDo = document.createElement("div");
  let textE1 = document.createElement("span");
  textE1.innerHTML = value;
  toDo.appendChild(textE1);
  message.classList.toggle("success");
  message.textContent = "Item Added";

  setTimeout(() => {
    message.classList.toggle("success");
  }, 2500);

  let closeE1 = document.createElement("span");
  closeE1.innerHTML = "&times;";
  closeE1.classList.add("delete");

  closeE1.addEventListener("click", () => {
    output.removeChild(todo);
    message.classList.toggle("error");
    message.textContent = "Item Deleted";

    setTimeout(() => {
      message.classList.toggle("error");
    }, 2500);
  });

  toDo.appendChild(closeE1);
  toDo.classList.add("todo");
  return todo;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let value = input.value;
  if (value.trim()) return;
  output.appendChild(gettodo(value));
  input.value = "";
});
