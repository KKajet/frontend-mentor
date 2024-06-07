let submitBtn = document.querySelector("button");
let container1 = document.querySelector("#rating-state");
let container2 = document.querySelector("#thank-state");
let btns = document.querySelectorAll(".rating");
let selectedSpan = document.querySelector(".select");

let isSelected = false;

let numberSelected = "3";

submitBtn.addEventListener("click", () => {
  container1.classList.toggle("display");
  container2.classList.toggle("display");
});

btns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    btns.forEach((btn) => {
      btn.classList.remove("selected");
    });
    event.target.classList.add("selected");

    numberSelected = event.target.textContent;
    selectedSpan.innerHTML = "&nbsp;" + numberSelected + "&nbsp;";
  });
});
