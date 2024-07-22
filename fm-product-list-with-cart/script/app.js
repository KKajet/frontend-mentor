// function sum() {
//   console.log(sumQuan - 9);
//   return sumQuan;
// }

let quantity = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let isCreated = [false, false, false, false, false, false, false, false];
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

      let sumQuantity = document.querySelector(".sum");
      let buttonClick = document.querySelector(`.cart-button${i}`);
      buttonClick.addEventListener("click", function () {
        let sumQuan = quantity.reduce((acc, curr) => acc + curr);
        if (!btn.className.includes("btn-clicked")) {
          quantity[i]++;
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

        let empty = document.querySelector(".empty-cart");

        let fullCart = document.querySelector(".full-cart");
        let productSum = product[i].price * quantity[i];
        let allOrders = document.querySelector(".all-orders");
        let productInCart = document.createElement("div");
        let productName = document.createElement("h3");
        let deleteImgDiv = document.createElement("div");
        let deleteImg = document.createElement("img");
        let divQuantityPrice = document.createElement("div");
        let paraQuantity = document.createElement("p");
        let pSoloPrice = document.createElement("p");
        let pSumPrice = document.createElement("p");
        let hrLine = document.createElement("hr");
        let crea = document.querySelector(`.created${i}`);
        let productNameClass = document.querySelector(`.product-name${i}`);
        let paraQuantityClass = document.querySelector(`.product-quantity${i}`);
        let pSoloPriceClass = document.querySelector(`.solo-quantity${i}`);
        let pSumPriceClass = document.querySelector(`.sum-price${i}`);
        let orderPrice = document.querySelector(".order-price");
        let orderTotalContainer = document.querySelector(".order-total-container");
        let totalOrderPrice =
          quantity[0] * product[0].price +
          quantity[1] * product[1].price +
          quantity[2] * product[2].price +
          quantity[3] * product[3].price +
          quantity[4] * product[4].price +
          quantity[5] * product[5].price +
          quantity[6] * product[6].price +
          quantity[7] * product[7].price +
          quantity[8] * product[8].price;
        orderPrice.innerText = `$${totalOrderPrice.toFixed(2)}`;
        orderTotalContainer.classList.remove("empty-display");
        if (quantity[i] >= 0) {
          if (quantity[i] == 0) {
            quantity[i]++;
            sumQuan = quantity.reduce((acc, curr) => acc + curr);
          }

          decreaseBtn.addEventListener("click", function () {
            if (quantity[i] == 1) {
              quantity[i] = 0;
            }
            quantity[i]--;
          });
          increaseBtn.addEventListener("click", function () {
            quantity[i]++;
          });

          empty.classList.add("empty-display");

          if (!isCreated[i]) {
            fullCart.append(allOrders);
            allOrders.append(productInCart);
            productInCart.append(productName);
            productInCart.classList.add(`created${i}`);
            productName.classList.add("text-preset-4-bold", `product-name${i}`);
            productName.innerText = `${product[i].name}`;
            productInCart.append(deleteImgDiv);
            deleteImgDiv.classList.add("delete-img-container", `delete-img${i}`);
            deleteImgDiv.append(deleteImg);
            deleteImg.src = "./assets/images/icon-remove-item.svg";
            deleteImg.classList.add("delete-image");
            productInCart.append(divQuantityPrice);
            divQuantityPrice.classList.add("quantity-and-price");
            divQuantityPrice.append(paraQuantity);
            paraQuantity.classList.add("quantity", "text-preset-4-bold", `product-quantity${i}`);
            paraQuantity.innerText = `x${quantity[i]}`;
            divQuantityPrice.append(pSoloPrice);
            pSoloPrice.classList.add("solo-price", "text-preset-4", `solo-quantity${i}`);
            pSoloPrice.innerText = `@ $${product[i].price.toFixed(2)}`;
            divQuantityPrice.append(pSumPrice);
            pSumPrice.classList.add("sum-price", "text-preset-4-bold", `sum-price${i}`);
            pSumPrice.innerText = `$${productSum.toFixed(2)}`;
            productInCart.append(hrLine);
            hrLine.classList.add(`hr-line${i}`);

            isCreated[i] = true;
          } else {
            productNameClass.innerText = `${product[i].name}`;
            paraQuantityClass.innerText = `x${quantity[i]}`;
            pSoloPriceClass.innerText = `@ $${product[i].price.toFixed(2)}`;
            pSumPriceClass.innerText = `$${productSum.toFixed(2)}`;
            crea.classList.remove(`empty-display`);
          }

          deleteImgDiv.addEventListener("click", function () {
            let crea = document.querySelector(`.created${i}`);

            crea.classList.add(`empty-display`);
            btn.classList.remove("btn-clicked");
            btn.innerHTML = '<img src="./assets/images/icon-add-to-cart.svg" style="position: relative; top: 3px; " /> <span class="add-to-card">Add to Cart</span>';
            quantity[i] = 0;
            sumQuan = quantity.reduce((acc, curr) => acc + curr);
            totalOrderPrice =
              quantity[0] * product[0].price +
              quantity[1] * product[1].price +
              quantity[2] * product[2].price +
              quantity[3] * product[3].price +
              quantity[4] * product[4].price +
              quantity[5] * product[5].price +
              quantity[6] * product[6].price +
              quantity[7] * product[7].price +
              quantity[8] * product[8].price;
            orderPrice.innerText = `$${totalOrderPrice.toFixed(2)}`;
            if (sumQuan <= 0) {
              empty.classList.remove("empty-display");
              orderTotalContainer.classList.add("empty-display");
            }
            sumQuantity.innerHTML = sumQuan;
            console.log(quantity);
          });
          sumQuantity.innerHTML = sumQuan;
        } else {
          quantity[i]++;
          if (quantity[i] <= 0) {
            crea.classList.add(`empty-display`);
          }
          btn.classList.remove("btn-clicked");
          btn.innerHTML = '<img src="./assets/images/icon-add-to-cart.svg" style="position: relative; top: 3px; " /> <span class="add-to-card">Add to Cart</span>';

          isClicked = false;
          sumQuantity.innerHTML = sumQuan + 1;
          if (sumQuan <= 0) {
            orderTotalContainer.classList.add("empty-display");
            empty.classList.remove("empty-display");
          }
        }
      });
    })
    .catch((err) => {
      console.log("ERROR", err);
    });
}

//     fullCart.innerHTML = `<div class="full-cart">
//   <h3 class="text-preset-4-bold">${product[i].name}</h3>
//   <div class="quantity-and-price">
//     <p class="quantity text-preset-4-bold">x${quantity[i]}</p>
//     <p class="solo-price text-preset-4">@${product[i].price.toFixed(2)}</p>
//     <p class="sum-price text-preset-4-bold"> $${productSum.toFixed(2)}</p>
//   </div>
//   <hr />
// </div>`;
