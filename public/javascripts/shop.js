/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function shopClicked(){
    document.getElementById('shopleiste').style.backgroundColor = " #585858";
    document.getElementById('peopleleiste').style.backgroundColor = "transparent";
    document.getElementById('showroomleiste').style.backgroundColor = "transparent";
    document.getElementById('rewardsleiste').style.backgroundColor = "transparent";
    
    document.getElementById('shopleiste').style.color = "white";
    document.getElementById('peopleleiste').style.color = "#585858";
    document.getElementById('showroomleiste').style.color = "#585858";
    document.getElementById('rewardsleiste').style.color = "#585858";
    
    localStorage.setItem("actualPage", 'explore');
    
    $(".middleContent").load("/html/explore/shopMenu.html");
    document.getElementById('popupMiddle').style.zIndex =1;
     $(".popupMiddle").load("/html/leer.html");
     
    audio.pause();           
    p=1;
    
    filterStatus = 1;
    
    $(".filterContent").load("/html/filterShop.html");
    filterShopSammlung();
};

function coverScrollShop(){
    $('#shop4').animate({
    scrollTop: document.getElementById('shop4').scrollTop + 400}, 500);
}
   
function shopArtikel(){
    if(document.getElementById('shop4').offsetWidth < document.getElementById('shop2').offsetWidth){
        document.getElementById('shop1').style.width ="480px";
         }
    else {
        document.getElementById('shop1').style.width ="720px"; 
    }
}

function shopBanner1(){
    $(".middleContent").load("/html/explore/shop.html");
}

function artikelDetail(){
    $(".popupMiddle").load("/html/explore/artikelDetail.html");
    document.getElementById('popupMiddle').style.zIndex =20;
    document.getElementById('back').style.opacity =0;
    
}

function closePopupMiddle(){
    document.getElementById('popupMiddle').style.zIndex =0;
     $(".popupMiddle").load("/html/leer.html");
     document.getElementById('back').style.opacity =1;
     $(".zoomContainer").width(0);
     $(".zoomContainer").height(0);
     
     
}


function stopZoomContainer(){
   // $(".zoomContainer").height(0);
    document.getElementById("zoomContainer").remove();
}
