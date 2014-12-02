
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





//                      Hier die Tick Funktionen für Categories


var categoriesSaleStatus = 0;

function categoriesSaleFunktion(){
    if(categoriesSaleStatus===0){
        document.getElementById("sale").style.backgroundImage= "url('/images/elements/tickKastenSelect.png')";
        categoriesSaleStatus = 1;
    }else{
        document.getElementById("sale").style.backgroundImage = "url('/images/elements/tickKasten.png')";
        categoriesSaleStatus = 0;
    }
}


var categoriesMenStatus = 0;

function categoriesMenFunktion(){
    if(categoriesMenStatus===0){
        document.getElementById("men").style.backgroundImage= "url('/images/elements/tickKastenSelect.png')";
        categoriesMenStatus = 1;
    }else{
        document.getElementById("men").style.backgroundImage = "url('/images/elements/tickKasten.png')";
        categoriesMenStatus = 0;
    }
}

var categoriesWomenStatus = 0;

function categoriesWomenFunktion(){
    if(categoriesWomenStatus===0){
        document.getElementById("women").style.backgroundImage= "url('/images/elements/tickKastenSelect.png')";
        categoriesWomenStatus = 1;
    }else{
        document.getElementById("women").style.backgroundImage = "url('/images/elements/tickKasten.png')";
        categoriesWomenStatus = 0;
    }
}

var categoriesUnikateStatus = 0;

function categoriesUnikateFunktion(){
    if(categoriesUnikateStatus===0){
        document.getElementById("unikate").style.backgroundImage= "url('/images/elements/tickKastenSelect.png')";
        categoriesUnikateStatus = 1;
    }else{
        document.getElementById("unikate").style.backgroundImage = "url('/images/elements/tickKasten.png')";
        categoriesUnikateStatus = 0;
    }
}


var categoriesNeuStatus = 0;

function categoriesNeuFunktion(){
    if(categoriesNeuStatus===0){
        document.getElementById("neu").style.backgroundImage= "url('/images/elements/tickKastenSelect.png')";
        categoriesNeuStatus = 1;
    }else{
        document.getElementById("neu").style.backgroundImage = "url('/images/elements/tickKasten.png')";
        categoriesNeuStatus = 0;
    }
}

//                      Hier Die Funktionen für Product-Type


var productTypeAsecoiresStatus = 0;

function productTypeAsecoiresFunktion(){
    if(productTypeAsecoiresStatus===0){
        document.getElementById("asecoires").style.backgroundImage= "url('/images/elements/tickKastenSelect.png')";
        productTypeAsecoiresStatus = 1;
    }else{
        document.getElementById("asecoires").style.backgroundImage = "url('/images/elements/tickKasten.png')";
        productTypeAsecoiresStatus = 0;
    }
}

var productTypeJackenStatus = 0;

function productTypeJackenFunktion(){
    if(productTypeJackenStatus===0){
        document.getElementById("jacken").style.backgroundImage= "url('/images/elements/tickKastenSelect.png')";
        productTypeJackenStatus = 1;
    }else{
        document.getElementById("jacken").style.backgroundImage = "url('/images/elements/tickKasten.png')";
        productTypeJackenStatus = 0;
    }
}

var productTypeHosenStatus = 0;

function productTypeHosenFunktion(){
    if(productTypeHosenStatus===0){
        document.getElementById("hosen").style.backgroundImage= "url('/images/elements/tickKastenSelect.png')";
        productTypeHosenStatus = 1;
    }else{
        document.getElementById("hosen").style.backgroundImage = "url('/images/elements/tickKasten.png')";
        productTypeHosenStatus = 0;
    }
}


var productTypeShirtsStatus = 0;

function productTypeShirtsFunktion(){
    if(productTypeShirtsStatus===0){
        document.getElementById("shirts").style.backgroundImage= "url('/images/elements/tickKastenSelect.png')";
        productTypeShirtsStatus = 1;
    }else{
        document.getElementById("shirts").style.backgroundImage = "url('/images/elements/tickKasten.png')";
        productTypeShirtsStatus = 0;
    }
}

var productTypeSkirtsStatus = 0;

function productTypeSkirtsFunktion(){
    if(productTypeSkirtsStatus===0){
        document.getElementById("skirts").style.backgroundImage= "url('/images/elements/tickKastenSelect.png')";
        productTypeSkirtsStatus = 1;
    }else{
        document.getElementById("skirts").style.backgroundImage = "url('/images/elements/tickKasten.png')";
        productTypeSkirtsStatus = 0;
    }
}





                //              shopMenuStatus

function shopMenuNeu(){
    filterShopCategoriesStatus = 1;
    filterShopProductTypeStatus = 0;
    filterShopDesignerStatus = 0;
    filterShopSizeStatus = 0;
    ilterShopColorStatus = 0;
    filterShopPriceStatus = 0;
    filterShopLocationStatus = 0;
    categoriesSaleStatus = 0;
    categoriesMenStatus = 0;
    categoriesWomenStatus = 0;
    categoriesUnikateStatus = 0;
    categoriesNeuStatus = 1;
    
    $(".filterContent").load("/html/filterShop.html");
}

function shopMenuSale(){
    filterShopCategoriesStatus = 1;
    filterShopProductTypeStatus = 0;
    filterShopDesignerStatus = 0;
    filterShopSizeStatus = 0;
    ilterShopColorStatus = 0;
    filterShopPriceStatus = 0;
    filterShopLocationStatus = 0;
    categoriesSaleStatus = 1;
    categoriesMenStatus = 0;
    categoriesWomenStatus = 0;
    categoriesUnikateStatus = 0;
    categoriesNeuStatus = 0;
    
    $(".filterContent").load("/html/filterShop.html");
}

function shopMenuMen(){
    filterShopCategoriesStatus = 1;
    filterShopProductTypeStatus = 0;
    filterShopDesignerStatus = 0;
    filterShopSizeStatus = 0;
    ilterShopColorStatus = 0;
    filterShopPriceStatus = 0;
    filterShopLocationStatus = 0;
    categoriesSaleStatus = 0;
    categoriesMenStatus = 1;
    categoriesWomenStatus = 0;
    categoriesUnikateStatus = 0;
    categoriesNeuStatus = 0;
    
    $(".filterContent").load("/html/filterShop.html");
}

function shopMenuWomen(){
    filterShopCategoriesStatus = 1;
    filterShopProductTypeStatus = 0;
    filterShopDesignerStatus = 0;
    filterShopSizeStatus = 0;
    ilterShopColorStatus = 0;
    filterShopPriceStatus = 0;
    filterShopLocationStatus = 0;
    categoriesSaleStatus = 0;
    categoriesMenStatus = 0;
    categoriesWomenStatus = 1;
    categoriesUnikateStatus = 0;
    categoriesNeuStatus = 0;
    
    $(".filterContent").load("/html/filterShop.html");
}

function shopMenuUnikate(){
    filterShopCategoriesStatus = 1;
    filterShopProductTypeStatus = 0;
    filterShopDesignerStatus = 0;
    filterShopSizeStatus = 0;
    ilterShopColorStatus = 0;
    filterShopPriceStatus = 0;
    filterShopLocationStatus = 0;
    categoriesSaleStatus = 0;
    categoriesMenStatus = 0;
    categoriesWomenStatus = 0;
    categoriesUnikateStatus = 1;
    categoriesNeuStatus = 0;
    
    $(".filterContent").load("/html/filterShop.html");
}

function shopMenuJungeDesigner(){
    filterShopCategoriesStatus = 0;
    filterShopProductTypeStatus = 0;
    filterShopDesignerStatus = 0;
    filterShopSizeStatus = 0;
    ilterShopColorStatus = 0;
    filterShopPriceStatus = 0;
    filterShopLocationStatus = 0;
    categoriesSaleStatus = 0;
    categoriesMenStatus = 0;
    categoriesWomenStatus = 0;
    categoriesUnikateStatus = 0;
    categoriesNeuStatus = 0;
    
    filterShopProductTypeStatus =1;
    $(".filterContent").load("/html/filterShop.html");
    
}


/*
filterShopCategoriesStatus = 0;
filterShopProductTypeStatus = 0;
filterShopDesignerStatus = 0;
filterShopSizeStatus = 0;
ilterShopColorStatus = 0;
filterShopPriceStatus = 0;
filterShopLocationStatus = 0;
categoriesSaleStatus = 0;
categoriesMenStatus = 0;
categoriesWomenStatus = 0;
categoriesUnikateStatus = 0;
categoriesNeuStatus = 0;  
 */


/*function filterShopSammlung(){
    filterShopCategoriesFunktion();
    filterShopProductTypeFunktion();
    filterShopDesignerFunktion();
    filterShopSizeFunktion();
    filterShopColorFunktion();
    filterShopPriceFunktion();
    filterShopLocationFunktion();
    
    categoriesSaleFunktion();
    categoriesMenFunktion();
    categoriesWomenFunktion();
    categoriesUnikateFunktion();
    categoriesNeuFunktion();

}*/
