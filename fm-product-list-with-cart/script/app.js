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
        btn.classList.add("cart-button", "text-preset-4-bold");
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
      }
    })
    .catch((err) => {
      console.log("ERROR", err);
    });
}
