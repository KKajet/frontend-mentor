let btn = document.querySelector(".share-card");
let tog = document.querySelector(".share-toggle");
let img = document.querySelector(".share-img");

let isChecked = false;
btn.addEventListener("click", function () {
  if (!isChecked) {
    tog.classList.toggle("share-toggle");
    img.classList.toggle("filter");
    btn.style.background = "hsl(214, 17%, 51%)";

    isChecked = true;
  } else {
    tog.classList.toggle("share-toggle");
    img.classList.toggle("filter");
    btn.style.background = "hsl(210, 46%, 95%)";
    isChecked = false;
  }
});
