var MenuItems = document.getElementById("MenuItems");
MenuItems.style.maxHeight = "0px";

function manutoggle(){
    if(MenuItems.style.maxHeight == "0px") {
        MenuItems.style.maxHeight = "200px";
    }
    else {
        MenuItems.style.maxHeight = "0px";
    }
}


// JS for product gallery

var productImg = document.getElementById("productImg");
var SmallImg = document.getElementsByClassName("small-img");

    SmallImg[0].onclick = function(){
        productImg.src = SmallImg[0].src;
    }
    SmallImg[1].onclick = function(){
        productImg.src = SmallImg[1].src;
    }
    SmallImg[2].onclick = function(){
        productImg.src = SmallImg[2].src;
    }
    SmallImg[3].onclick = function(){
        productImg.src = SmallImg[3].src;
    }

