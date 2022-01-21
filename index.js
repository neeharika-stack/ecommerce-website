small_imgs = document.querySelectorAll(".sub-shoes-image");
var num = small_imgs.length;

var sourcesList=["images\image-product-1.jpg", "images\image-product-2.jpg", "images\image-product-3.jpg", "images\image-product-4.jpg"];

small_imgs[0].addEventListener("click", () => {
    document.querySelector(".main-shoes-image").src = sourcesList[0];
})

small_imgs[1].addEventListener("click", () => {
    document.querySelector(".main-shoes-image").src = sourcesList[1];
})

small_imgs[2].addEventListener("click", () => {
    document.querySelector(".main-shoes-image").src = sourcesList[2];
})

small_imgs[3].addEventListener("click", () => {
    document.querySelector(".main-shoes-image").src = sourcesList[3];
})



document.querySelector(".increment").addEventListener("click", function() {
  var numOfShoesInt = parseInt(document.querySelector(".numOfShoes").innerText);
  if (numOfShoesInt >= 0) {
    numOfShoesInt = numOfShoesInt + 1;
    document.querySelector(".numOfShoes").innerText = numOfShoesInt;
  }
})

document.querySelector(".decrement").addEventListener("click", function() {
      var numOfShoesInt = parseInt(document.querySelector(".numOfShoes").innerText);
      if (numOfShoesInt > 0) {
        numOfShoesInt = numOfShoesInt - 1;
        document.querySelector(".numOfShoes").innerText = numOfShoesInt;
      }
})
      // document.querySelector(".main-shoes-image").addEventListener("click", function(){
      //
      // })
