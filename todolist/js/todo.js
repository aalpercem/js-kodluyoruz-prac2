doneTick();

function doneTick() {
  let ulDOM = document.querySelector("#list");

  ulDOM.addEventListener(
    "click",
    function (event) {
      if (event.target.tagName === "LI") {
        event.target.classList.toggle("checked");
      }
    },
    false
  );
}

function newElement() {
  let liDOM = document.createElement("li");
  let inputValue = document.getElementById("task").value;
  let inputText = document.createTextNode(inputValue);
  liDOM.append(inputText);

  if (inputValue === "" || inputValue.replace(/^\s+|\s+$/g, "").length == 0) {
    $(".error").toast("show");
  } else {
    $(".success").toast("show");
    document.getElementById("list").append(liDOM);
  }
  document.getElementById("task").value = "";

  let save = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];
  save.push(inputValue);
  localStorage.setItem("tasks", JSON.stringify(save));

  let span = document.createElement("SPAN");
  let xBtn = document.createTextNode("\u00D7");
  span.className = "close";
  span.append(xBtn);
  liDOM.append(span);

  let close = document.getElementsByClassName("close");
  let index = 0;

  // invisible
  while (index < close.length) {
    close[index].addEventListener("click", function () {
      let li = this.parentElement;
      li.style.display = "none";
    });
    index++;
  }
  
}

localStorage.clear();
