// function sum() {
//   console.log(sumQuan - 9);
//   return sumQuan;
// }

let quantity = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
for (let i = 0; i < 9; i++) {
  fetch("./data.json")
    .then((res) => {
      return res.json();
    })
    .then((product) => {
      const dessert = document.querySelector(".product-list");
      const prod = document.createElement("div");
      const img = document.createElement("img");
      const imgBtn = document.createElement("div");
      const itemInfo = document.createElement("div");
      const category = document.createElement("p");
      const name = document.createElement("p");
      const price = document.createElement("p");
      const btn = document.createElement("button");
      prod.classList.add("product");
      imgBtn.classList.add("imgBtn-container");
      dessert.append(prod);
      prod.append(imgBtn);
      imgBtn.append(img);
      imgBtn.append(btn);
      btn.classList.add(`cart-button${i}`, "text-preset-4-bold");
      btn.innerHTML = '<img src="./assets/images/icon-add-to-cart.svg" style="position: relative; top: 3px; " /> <span class="add-to-card">Add to Cart</span>';
      prod.append(itemInfo);
      img.src = product[i].image.desktop;
      img.classList.add("product-image");
      itemInfo.append(category);
      category.classList.add("text-preset-4", "category");
      category.innerText = product[i].category;
      itemInfo.append(name);
      name.classList.add("text-preset-3", "name");
      name.innerText = product[i].name;
      itemInfo.append(price);
      price.classList.add("text-preset-3", "price");
      price.innerText = `$${product[i].price.toFixed(2)}`;

      let isClicked = false;
      let sumQuantity = document.querySelector(".sum");
      let buttonClick = document.querySelector(`.cart-button${i}`);
      buttonClick.addEventListener("click", function () {
        let sumQuan = quantity.reduce((acc, curr) => acc + curr);
        if (!btn.className.includes("btn-clicked") && !isClicked) {
          quantity[i]++;
          console.log(quantity);
          sumQuan = quantity.reduce((acc, curr) => acc + curr);
        }
        sumQuantity.innerHTML = sumQuan;
        btn.classList.add("btn-clicked");
        btn.innerHTML = `
        <div class="flex-button dec ">
          <img src="./assets/images/icon-decrement-quantity.svg" class="svg-filter" style="position: relative ";" />
        </div> 
          <span class="add-to-card">${quantity[i]}</span> 
        <div class="flex-button inc ">
          <img src="./assets/images/icon-increment-quantity.svg" class="svg-filter" style="position: relative  ";" />
          </div>`;
        let decDiv = document.querySelector(`.cart-button${i} .dec`);
        decDiv.classList.add(`decrement${i}`);
        let incDiv = document.querySelector(`.cart-button${i} .inc`);
        incDiv.classList.add(`increment${i}`);
        let unitSpan = document.querySelector(`.cart-button${i} span`);
        unitSpan.classList.add(`unit${i}`);
        let decreaseBtn = document.querySelector(`.decrement${i}`);
        let increaseBtn = document.querySelector(`.increment${i}`);
        isClicked = true;

        if (quantity[i] > 0) {
          decreaseBtn.addEventListener("click", function () {
            if (quantity[i] == 1) {
              quantity[i] = 0;
            }
            quantity[i]--;
            console.log(quantity);
          });
          increaseBtn.addEventListener("click", function () {
            quantity[i]++;
            console.log(quantity);
          });
        } else {
          quantity[i]++;
          console.log(quantity);
          btn.classList.remove("btn-clicked");
          btn.innerHTML = '<img src="./assets/images/icon-add-to-cart.svg" style="position: relative; top: 3px; " /> <span class="add-to-card">Add to Cart</span>';
          isClicked = false;
          sumQuantity.innerHTML = sumQuan + 1;
        }
      });
    })
    .catch((err) => {
      console.log("ERROR", err);
    });
}
