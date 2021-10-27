function MyDay() {
  var output = document.getElementById("Data");
  output.innerHTML = "";
  output.innerHTML += "MyDay...";

}
function Important() {
  var output = document.getElementById("Data");
  output.innerHTML = "";
  output.innerHTML += "Important...";
}
function Planned() {
  var output = document.getElementById("Data");
  output.innerHTML = "";
  output.innerHTML += "Planned...";
}
function Assign() {
  var output = document.getElementById("Data");
  output.innerHTML = "";
  output.innerHTML += "Assigned To Me...";

}
function Tasks() {
  var output = document.getElementById("Data");
  output.innerHTML = "";
  output.innerHTML += "Tasks...";
}
function arrow() {
  var x = document.getElementById("sidebar");
  var y = document.getElementById("leftside");
  if (x.style.display === "none") {
    x.style.display = "flex";
    y.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "flex";
  }
}
function arrowexpand() {
  var x = document.getElementById("sidebar");
  var y = document.getElementById("leftside")
  if (y.style.display === "flex") {
    x.style.display = "flex";
    y.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "flex";
  }
}
function addTask() {
  let Input = document.getElementById("list");
  let Task = document.getElementById("added-task");
  var list = document.createElement("p");
  var img = document.createElement("img")
  list.classList.add('newlist');
  img.setAttribute("src", "list-check.svg");
  list.appendChild(img)
  list.innerText = Input.value;
  Task.appendChild(list);
  Input.value = "";
  let tittle = document.getElementsByClassName("right");
  var add = list.innerText;
  tittle[0].innerHTML = add;
  list.addEventListener('click', function () {
    tittle[0].innerHTML = list.innerText;
  })
}
function onclicks() {
  var newListName = document.getElementById("right-input");
  var output = document.getElementById("Textbox");
  var firstlist = document.getElementById("baseAdd");
  output.innerHTML = "";
  output.innerHTML += newListName.value;
  firstlist.innerHTML += newListName.value;
  newListName.innerHTML += "";
}
function enter(event) {
  let liText = document.getElementById("list").value;
  let listNode = document.getElementById("list-of-new-task");
  let listsNode = document.createElement("LI");
  let btn = document.createElement("button");
  btn.setAttribute("class", "list-button")
  let div = document.createElement("div");
    if (event.key == "Enter") {
      txtNode = document.createTextNode(liText);
      listsNode.appendChild(txtNode);
      btn.appendChild(listsNode)
      div.appendChild(btn)
      listNode.appendChild(div)
      arrForTask.push(btn.innerText)
    }
}