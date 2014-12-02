/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var showroomStatus = 0;

function showroomClicked(){
    document.getElementById('shopleiste').style.backgroundColor = "transparent";
    document.getElementById('peopleleiste').style.backgroundColor = "transparent";
    document.getElementById('showroomleiste').style.backgroundColor = "#585858";
    document.getElementById('rewardsleiste').style.backgroundColor = "transparent";
    
    document.getElementById('shopleiste').style.color = "#585858";
    document.getElementById('peopleleiste').style.color = "#585858";
    document.getElementById('showroomleiste').style.color = "white";
    document.getElementById('rewardsleiste').style.color = "#585858";

    localStorage.setItem("actualPage", 'explore');
    
    if(showroomStatus===0){
        $(".middleContent").load("/html/explore/showroomMenu.html");
    }else{
        $(".middleContent").load("/html/explore/showroom.html");
    }
    
    document.getElementById('popupMiddle').style.zIndex =1;
    $(".popupMiddle").load("/html/leer.html");

    audio.pause();           
    p=1;
    
    $(".filterContent").load("/html/filterShowroom.html");
    filterStatus = 3;
};

function showroomZuruck(){
    showroomStatus =0;
    $(".middleContent").load("/html/explore/showroomMenu.html");
}

function coverScrollShowroom(){
    $('#showroom4').animate({
    scrollTop: document.getElementById('showroom4').scrollTop + 330}, 500);
   }

function showroomArtikel(){
    if(document.getElementById('showroomProfil3').offsetWidth < document.getElementById('showroomProfil2').offsetWidth){
        document.getElementById('showroomProfil1').style.width ="480px";
        }
    else {
        document.getElementById('showroomProfil1').style.width ="720px";
        
    }
}

function showroomProfilClicked(){
  
    localStorage.setItem("actualPage", 'showroomProfil'); 
    $(".middleContent").load("/html/explore/showroomProfil.html");
    //wk =1;
    showroomStatus =1;
};

    
function showroomMenu1(){
     $(".middleContent").load("/html/explore/showroom.html");
}
