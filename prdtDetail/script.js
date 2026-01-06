let activeProduct = document.querySelector(".active-product");


let cngImg = document.getElementsByClassName("cngImg");

function clickedOnMainImage(i){
    activeProduct.src = (Array.from(cngImg))[i].src;
}