const btns = document.querySelectorAll(".icon-plus");
let paragraphs = document.querySelectorAll("p");
let minus = document.querySelectorAll(".icon-minus");
let plus = document.querySelectorAll(".icon-plus");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    paragraphs[i].classList.toggle("hidden");
    plus[i].classList.toggle("hidden");
    minus[i].classList.toggle("hidden");
  });
}
for (let i = 0; i < btns.length; i++) {
  minus[i].addEventListener("click", function () {
    paragraphs[i].classList.toggle("hidden");
    plus[i].classList.toggle("hidden");
    minus[i].classList.toggle("hidden");
  });
}
