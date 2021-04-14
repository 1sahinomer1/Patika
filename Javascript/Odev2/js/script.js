function myFunction() {
  let task = document.getElementById("addText").value;
  if (task !== "") {
    addTodo(task);
  } else {
    alert("task isn't empty");
  }
  document.getElementById("addText").value = "";
}

function addTodo(task) {
  let ul = document.querySelector("ul");
  let li = document.createElement("li");
  li.innerHTML = `
        <div><p>${task}</p></div>
        <div>
        <button type="submit" onclick="clear()">clear</button>
        <button onclick="check()">check</button>
        </div>
    `;
  ul.appendChild(li);
}
function clear() {
  console.log("ssssssss");
}
