for (let i = 0; i < 9; i++) {
  fetch("./data.json")
    .then((res) => {
      return res.json();
    })
    .then((product) => {
      const dessert = document.querySelector(".product-list");
      for (let j = 0; j < 1; j++) {
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

        let quantity = [1, 1, 1, 1, 1, 1, 1, 1, 1];

        let buttonClick = document.querySelector(`.cart-button${i}`);
        buttonClick.addEventListener("click", function () {
          btn.classList.add("btn-clicked");
          btn.innerHTML = `<div class="flex-button decrement"><img src="./assets/images/icon-decrement-quantity.svg" style="position: relative; ";" /></div> <span class="add-to-card unit">${quantity[i]}</span> <div class="flex-button increment"><img src="./assets/images/icon-increment-quantity.svg" style="position: 
            relative;  ";" /></div>`;
          let decreaseBtn = document.querySelector(".decrement");
          let increaseBtn = document.querySelector(".increment");
          let unitSpan = document.querySelector(".unit");
          if (quantity[i] > 0) {
            decreaseBtn.addEventListener("click", function () {
              quantity[i]--;
              console.log(quantity);
              unitSpan.innerText = quantity[i];
            });
            increaseBtn.addEventListener("click", function () {
              quantity[i]++;
              console.log(quantity);
              unitSpan.innerText = quantity[i];
            });
          } else {
            quantity[i]++;
            btn.classList.toggle("btn-clicked");
            btn.innerHTML = '<img src="./assets/images/icon-add-to-cart.svg" style="position: relative; top: 3px; " /> <span class="add-to-card">Add to Cart</span>';
          }
        });
      }
    })
    .catch((err) => {
      console.log("ERROR", err);
    });
}
