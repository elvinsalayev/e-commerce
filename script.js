var cart = document.getElementById("products");

var btnAdd = document.querySelectorAll(".btn-add");

var closeBtn = document.querySelector("#x");

var basket = document.querySelector(".basket");

var cartBasket = document.querySelector(".cart");

var cnt = document.querySelector(".container");

   

 for (i of btnAdd){
        i.addEventListener("click", function () {
            let product = this.parentElement.parentElement;
            let brand = product.querySelector(".brand");
            let model = product.querySelector(".model").textContent;
            addProduct(brand, model);

        cart.textContent = Number(cart.textContent)+1;});
    }
    
      
   function addProduct(brand, model) {
        let product = {
            brand: brand,
            model: model
        }
        let products = [];
        if (localStorage.getItem("products") === null) {
            products.push(product);
            localStorage.setItem("products", JSON.stringify(products));
        } else {
            products = JSON.parse(localStorage.getItem("products"));
            products.push(product);
            localStorage.setItem("products", JSON.stringify(products));
        }
    }

closeBtn.addEventListener("click", function () {
    basket.style.display = "none";
    cnt.style.opacity = "100%";});

    cartBasket.addEventListener("click", function () {
        basket.style.display = "block";
    cnt.style.opacity="10%"}   );


