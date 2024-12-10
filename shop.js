let gridDisplay = document.querySelector(".shop-products-bottom")
let shopProducts = document.querySelector(".shop-products")
let del1 = document.querySelector(".sidebar")

let shopGrid = document.querySelector(".shop-grid")




function column4 () {
    gridDisplay.style.gridTemplateColumns = "repeat(4,auto)";
    gridDisplay.style.width = "1120px";
    del1.style.display = "none";
    shopProducts.style.width = "1120px"



    shopItem.style.cssText += "height : 433px; width : 262px;flex-direction : column;"

    Info.style.cssText += "display:none"

    shopItemInfo.style.cssText = "height:72px;width:262px;padding:0px"

}
function column3 () {
    gridDisplay.style.gridTemplateColumns = "repeat(3,auto)";
    gridDisplay.style.width = "834px";
    del1.style.display = "";
    shopProducts.style.width = "834px"


    shopItem.style.cssText += "height : 433px; width : 262px;flex-direction : column;"

    Info.style.cssText += "display:none"


}

let shopItemInfo = document.querySelector(".shop-item-info")
let shopItem = document.querySelector(".shop-item")
let Info = document.querySelector(".info")

let cartButton = document.querySelector (".cart-btn")
let heart = document.querySelector(".fa-heart")



function column2 () {
    gridDisplay.style.gridTemplateColumns = "repeat(2,auto";
    gridDisplay.style.width = "1120px";
    del1.style.display = "none";
    shopProducts.style.width = "1120px";

    

    shopItem.style.cssText += "height : 349px; width : 548px;flex-direction : row;align-items : center;"


    Info.style.cssText += "display:block"

    shopItemInfo.style.cssText = "height:349px;width:282px;padding:24px;"
    
   




    
   




    // shopItemInfo.style.padding = "24px"
    // shopItemInfo.style.width = "282px";
    // shopItemInfo.style.height = "349px";
    // Info.style.display = "inline";





}

