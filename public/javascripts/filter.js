
var filterShopCategoriesStatus = 0;

function filterShopCategoriesFunktion(){
    if(filterShopCategoriesStatus ===0){
        document.getElementById("filterShopCategories").src = "/images/elements/untenW.png";
        filterShopCategoriesStatus =1;
        document.getElementById("CategoriesShopSubContainer").style.height= "auto";
    }else{
        document.getElementById("filterShopCategories").src = "/images/elements/vorW.png"; 
        filterShopCategoriesStatus =0;
        document.getElementById("CategoriesShopSubContainer").style.height=0;
    }
}

var filterShopProductTypeStatus = 0;

function filterShopProductTypeFunktion(){
    if(filterShopProductTypeStatus ===0){
        document.getElementById("filterShopProductType").src = "/images/elements/untenW.png";
        filterShopProductTypeStatus =1;
        document.getElementById("ProductTypeShopSubContainer").style.height= "auto";
    }else{
        document.getElementById("filterShopProductType").src = "/images/elements/vorW.png";
        filterShopProductTypeStatus =0;
        document.getElementById("ProductTypeShopSubContainer").style.height=0;
    }
}

var filterShopDesignerStatus = 0;

function filterShopDesignerFunktion(){
    if(filterShopDesignerStatus ===0){
        document.getElementById("filterShopDesigner").src = "/images/elements/untenW.png";
        filterShopDesignerStatus =1;
        document.getElementById("DesignerShopSubContainer").style.height= "auto";
    }else{
        document.getElementById("filterShopDesigner").src = "/images/elements/vorW.png";
        filterShopDesignerStatus =0;
        document.getElementById("DesignerShopSubContainer").style.height=0;
    }
}

var filterShopSizeStatus = 0;

function filterShopSizeFunktion(){
    if(filterShopSizeStatus ===0){
        document.getElementById("filterShopSize").src = "/images/elements/untenW.png";
        filterShopSizeStatus =1;
        document.getElementById("SizeShopSubContainer").style.height= "auto";
    }else{
        document.getElementById("filterShopSize").src = "/images/elements/vorW.png";
        filterShopSizeStatus =0;
        document.getElementById("SizeShopSubContainer").style.height=0;
    }
}

var filterShopColorStatus = 0;

function filterShopColorFunktion(){
    if(filterShopColorStatus ===0){
        document.getElementById("filterShopColor").src = "/images/elements/untenW.png";
        filterShopColorStatus =1;
        document.getElementById("colorShopSubContainer").style.height= "auto";
    }else{
        document.getElementById("filterShopColor").src = "/images/elements/vorW.png";
        filterShopColorStatus =0;
        document.getElementById("colorShopSubContainer").style.height=0;
    }
}

var filterShopPriceStatus = 0;

function filterShopPriceFunktion(){
    if(filterShopPriceStatus ===0){
        document.getElementById("filterShopPrice").src = "/images/elements/untenW.png";
        filterShopPriceStatus =1;
        document.getElementById("PriceShopSubContainer").style.height= "auto";
    }else{
        document.getElementById("filterShopPrice").src = "/images/elements/vorW.png";
        filterShopPriceStatus =0;
        document.getElementById("PriceShopSubContainer").style.height=0;
    }
}

var filterShopLocationStatus = 0;

function filterShopLocationFunktion(){
    if(filterShopLocationStatus ===0){
        document.getElementById("filterShopLocation").src = "/images/elements/untenW.png";
        filterShopLocationStatus =1;
        document.getElementById("LocationShopSubContainer").style.height= "auto";
    }else{
        document.getElementById("filterShopLocation").src = "/images/elements/vorW.png";
        filterShopLocationStatus =0;
        document.getElementById("LocationShopSubContainer").style.height=0;
    }
}





