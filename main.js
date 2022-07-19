//get all elements
let btn = window.document.getElementById("btn");
let inp = window.document.getElementById("inp");
let boxs = document.querySelectorAll(".box");
let drag = null;

// add item
btn.onclick = function () {
  if (inp.value != "") {
    boxs[0].innerHTML += `
        <p class="item" draggable="true">${inp.value}</p>`;

    inp.value = "";
  }
  dragItem();
};
// drag and drop function

function dragItem() {
  let items = document.querySelectorAll(".item");
  items.forEach((item) => {
    item.addEventListener("dragstart", function () {
      drag = item;
      item.style.opacity = "0.5";
    });
    item.addEventListener("dragend", function () {
      drag = null;
      item.style.opacity = "1";
    });
    boxs.forEach((box) => {
      box.addEventListener("dragover", function (e) {
        e.preventDefault();
        this.style.background = "#5784BA";
        this.style.color = "white";
      });
      box.addEventListener("dragleave", function () {
        this.style.background = "white";
        this.style.color = "#000";
      });
      box.addEventListener("drop", function () {
        this.append(drag);
        this.style.background = "white";
        this.style.color = "#000";
      });
    });
  });
}

/////////////////////////////////////
