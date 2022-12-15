let productArray = [{ productTitle: "Product One", productDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus ex nam sed expedita ipsam, alias ea, beatae, accusamus consequatur iusto dolorum saepe." },
{ productTitle: "Product Two", productDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus ex nam sed expedita ipsam, alias ea, beatae, accusamus consequatur iusto dolorum saepe." },
{ productTitle: "Product Three", productDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus ex nam sed expedita ipsam, alias ea, beatae, accusamus consequatur iusto dolorum saepe." }
]

let str = "";
let productInfo = document.getElementById("productInfo");

for (productObj of productArray) {

  str = str + `<div class="card" style="width: 18rem;">
  <img src="./product.png" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${productObj.productTitle}</h5>
    <p class="card-text">
    ${productObj.productDescription}
    </p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  </div>`

}

productInfo.innerHTML = str;
