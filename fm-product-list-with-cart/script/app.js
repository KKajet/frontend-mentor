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

            let confirmButton = document.querySelector(".confirm-button");
            let orderConfirmed = document.querySelector(".order-confirmed");
            let confirmContainer = document.querySelector(".confirm-container");
            let productAndTotal = document.querySelector(".product-and-total");
            let newOrderButtonContainer = document.querySelector(".new-order-button-container");
            let newOrderButton = document.querySelector(".new-order-button");
            let confirmTotal = document.querySelector(".confirm-total-price");
            let confirmProductList = document.querySelector(".confirm-product-list");
            let confirmProduct = document.createElement("div");
            let confirmDivInfo = document.createElement("div");
            let confirmImg = document.createElement("img");
            let confirmDiv = document.createElement("div");
            let confirmName = document.createElement("p");
            let confirmQuantity = document.createElement("p");
            let confirmSoloPrice = document.createElement("p");
            let confirmTotalPrice = document.createElement("p");

            confirmProductList.append(confirmProduct);
            confirmProduct.classList.add(`confirm-prod${[i]}`);
            confirmProduct.append(confirmDivInfo);
            confirmProduct.classList.add("confirm-product");
            confirmDivInfo.append(confirmImg);
            confirmDivInfo.classList.add("confirm-div-info");
            confirmImg.src = product[i].image.thumbnail;
            confirmImg.classList.add(`confirm-img`);
            confirmDivInfo.append(confirmDiv);
            confirmDiv.classList.add("confirm-div");
            confirmDiv.append(confirmName);
            confirmName.innerText = product[i].name;
            confirmName.classList.add(`confirm-name`, "text-preset-4-bold", `confirm-name${i}`);
            confirmDiv.append(confirmQuantity);
            confirmQuantity.classList.add(`confirm-quantity${i}`, "text-preset-4-bold");
            confirmDiv.append(confirmSoloPrice);
            confirmSoloPrice.classList.add("confirm-solo-price", "text-preset-4");
            confirmProduct.append(confirmTotalPrice);
            confirmTotalPrice.classList.add(`confirm-total${i}`, "text-preset-3");
            let confirmProd = document.querySelectorAll(`.confirm-prod${i}`);
            let confirmNa = document.querySelectorAll(`.confirm-name${i}`);
            confirmButton.addEventListener("click", function () {
              if (quantity[i] <= 0) {
                for (let x = 0; x < confirmProd.length; x++) {
                  confirmProd[x].classList.add("empty-display");
                  confirmNa[x].classList.add("empty-display");
                }
              }
              let allButtons = document.querySelectorAll(`button`);
              let mainPage = document.querySelector(".black-screen");
              let body = document.querySelector("body");
              orderConfirmed.classList.remove("empty-display");
              confirmContainer.classList.remove("empty-display");
              productAndTotal.classList.remove("empty-display");
              newOrderButtonContainer.classList.remove("empty-display");
              productSum = product[i].price * quantity[i];
              confirmTotalPrice.innerText = `$${productSum.toFixed(2)}`;
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
              confirmTotal.innerText = `$${totalOrderPrice.toFixed(2)}`;
              confirmSoloPrice.innerText = `@ $${product[i].price.toFixed(2)}`;
              confirmQuantity.innerText = `${quantity[i]}x`;
              confirmButton.disabled = true;
              decDiv.disabled = true;
              incDiv.disabled = true;
              mainPage.style.filter = "brightness(50%)";
              body.style.background = "rgba(0,0,0,0.5)";
              mainPage;
              for (let j = 0; j < allButtons.length; j++) {
                allButtons[j].disabled = true;
                allButtons[j].style.cursor = "default";
              }
              newOrderButton.disabled = false;
              newOrderButton.style.cursor = "pointer";
            });
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
          if (sumQuan < 0) {
            empty.classList.remove("empty-display");
            orderTotalContainer.classList.add("empty-display");
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
